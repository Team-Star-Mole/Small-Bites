const express = require('express');
const pool = require('../db.js'); // connect to database

const bodega =  {};

bodega.getMenu = (req, res, next) => {
    const { id } = req.params;
    console.log(req.params)
    //    const dataQuery = ''; 
    pool.query(`SELECT * FROM food_bodega WHERE bodega_id = ${id}`)
    .then((data) => {
        res.locals.customer = data.rows;
        console.log(data.rows);
        return next();
    })
    .catch((err) => 
    {
        console.log('error in getBackendData in middleware.js')
        next(
            {
                log: 'error in getBackendData in middleware.js',
                status: 400,
                message: { err: 'error in getBackendData in middleware.js' },
            }
        )
    })
}

module.exports = bodega;