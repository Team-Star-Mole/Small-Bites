const express = require('express');
const pool = require('../db.js'); // connect to database

const bodega =  {};

bodega.getMenu = (req, res, next) => {
    const { id } = req.params;
    console.log(req.params)
 
    pool.query(`SELECT * FROM food_bodega WHERE bodega_id = ${id}`)
    .then((data) => {
        res.locals.bodega_menu = data.rows;
        console.log(data.rows);
        return next();
    })
    .catch((err) => 
    {
        next(
            {
                log: 'error in getMenu in middleware.js',
                status: 400,
                message: { err: 'error in getMenu in middleware.js' },
            }
        )
    })
}



module.exports = bodega;