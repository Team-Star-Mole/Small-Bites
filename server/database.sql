CREATE DATABASE starmole;
-- Alter table table_name add serial primary key (column_name)
-- ALTER TABLE table_name
-- ADD column_name datatype;

-- Insert https://www.sqlservertutorial.net/sql-server-basics/sql-server-insert-multiple-rows/
CREATE TABLE dummytable(
    dummy_id PRIMARY SERIAL KEY,
    name VARCHAR(255)
);

CREATE TABLE food_bodega_1(
    item_id int, 
    price DECIMAL(4, 2), 
    -- 2 means 2 decimal places after period
    item_description VARCHAR(255), 
    bodega_id int
);

CREATE TABLE food_bodega_2(
    item_id int, 
    price DECIMAL(4, 2), 
    item_description VARCHAR(255), 
    bodega_id int
)

CREATE TABLE food_bodega_3(
    item_id int, 
    price DECIMAL(4, 2), 
    item_description VARCHAR(255), 
    bodega_id int
)

-- update all of bodega_id column to equal 2 
Update food_bodega_2 set bodega_id = 2 where bodega_id = 1

-- IF VIEW MENU BUTTON for Bodega 1 IS CLICKED: send get request to get menu for bodega 1 food table
SELECT * FROM food_bodega_1

-- Insert into food_bodega (price, item_description, bodega_id) 
-- Values (7.00, 'coffee', 3), 
-- (16.00, 'sub sandwich', 3), 
-- (3.00, 'soda', 3),
-- (11.00, 'salad', 3),
-- (2.50, 'candy', 3)

pool.query('INSERT INTO food_bodega_1 (item_id, price, item_description, bodega_id) VALUES=$1 VALUES=$2 VALUES=$3 VALUES=$4', [1, 5.00, 'coffee', 1])

app.post('/cryptotodo', async(req,res) => {
    try {
        const name = req.body.name;        
        const newTodo = await pool.query(`INSERT INTO cryptoToDo(name) VALUES($1) RETURNING *`, [name]);
        res.status(200).json(newTodo)
        // Essentially what happens:
            /* when you go on website: localhost:5000/todos and post:
                {
                    "description": "BTC"
                }
                you update the database by inserting into database the description in pool.query()*/
    } catch(err) {
        console.error("Error in server: POST req for /cryptotodo", err.message)
    }
})

// 5. Delete a todo
app.delete('/cryptotodo/:id', async (req, res) => {
    try {
        // specify exactly what we want to delete
        const id = req.params.id;
        const deleteTodo = await pool.query('DELETE FROM cryptoToDo WHERE trending_id = $1', [id]);
        res.status(200).json('To do item was deleted');
    } catch (error) {
        console.log("error in DELETE request in server", error.message);
    }

})

