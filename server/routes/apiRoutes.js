const express = require('express');
const router = express.Router();
const bodega = require('../controllers/api');


router.get('/:id', bodega.getMenu, (req, res) => {
        res.status(200).json(res.locals.customer);
});

// router.get('/bodegareact', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../client/component/BodegaOneMenu'))
// })

module.exports = router;