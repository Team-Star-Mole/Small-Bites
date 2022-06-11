const Pool = require('pg').Pool;

// pass in url as value to PG_URI
const PG_URI = 'postgres://wpkuehlu:lUi8R_HRGWtblNIlCf666A2qu_VJyLYt';

const pool = new Pool(
    {
        connectionString: PG_URI,
    }
)

module.exports = pool;