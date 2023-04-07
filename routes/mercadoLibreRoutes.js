const express = require('express');
const router = express.Router();
const mercadolibreCtrl = require('../controllers/mercadoLibreController');


router.get('/search', mercadolibreCtrl.searchProducts);
router.get('/product/:id', mercadolibreCtrl.viewProduct);

module.exports = router;