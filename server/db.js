const { Pool } = require('pg');

// pass in url as value to PG_URI
const PG_URI = 'postgres://wpkuehlu:lUi8R_HRGWtblNIlCf666A2qu_VJyLYt@rajje.db.elephantsql.com/wpkuehlu';
// postgres://wpkuehlu:lUi8R_HRGWtblNIlCf666A2qu_VJyLYt@rajje.db.elephantsql.com/wpkuehlu
const pool = new Pool(
    {
        connectionString: PG_URI,
    }
);


module.exports = {
    query: (text, params, callback) => {
        // console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};