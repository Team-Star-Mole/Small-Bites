const express = require('express');
const pool = require('../db.js'); // connect to database

const getCustomers =  {};

// trying to connect to database and select dummytable data
getCustomers.getBackendData = (req, res, next) => {
//    const dataQuery = ''; 
    pool.query(`SELECT * FROM food_bodega_1`)
    .then((data) => {
        res.locals.customer = data.rows;
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

getCustomers.getBodegaNames = (req, res, next) => {
    //    const dataQuery = ''; 
    pool.query(`SELECT * FROM bodeganame`)
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

// getCustomers.getBodegaMenu = (req, res, next) => {
//     const { id } = req.params;
//     console.log(req.params)
//     //    const dataQuery = ''; 
//     pool.query(`SELECT * FROM WHERE bodega_id = ${id}`)
//     .then((data) => {
//         res.locals.customer = data.rows;
//         console.log(data.rows);
//         return next();
//     })
//     .catch((err) => 
//     {
//         console.log('error in getBackendData in middleware.js')
//         next(
//             {
//                 log: 'error in getBackendData in middleware.js',
//                 status: 400,
//                 message: { err: 'error in getBackendData in middleware.js' },
//             }
//         )
//     })
// }

module.exports = getCustomers;

