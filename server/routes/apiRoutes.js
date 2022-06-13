const express = require('express');
const router = express.Router();
const bodega = require('../controllers/api');


router.get('/:id', bodega.getMenu, (req, res) => {
        res.status(200).json(res.locals.bodega_menu);
});


module.exports = router;