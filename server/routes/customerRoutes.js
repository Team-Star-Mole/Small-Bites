const express = require('express');
const router = express.Router();
const getCustomers = require('../controllers/middleware');

// router.get('/api/:id', getCustomers.getBodegaMenu, (req, res) => {
//     res.status(200).json(res.locals.customer);
// })

// get database data to render on the frontend
router.get('/', getCustomers.getBackendData, (req, res) => {
    res.status(200).json(res.locals.customer);
})

router.get('/bodega-names', getCustomers.getBodegaNames, (req, res) => {
    res.status(200).json(res.locals.customer);
})





// router.get('/restNames', getC)

module.exports = router;