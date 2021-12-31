const path =  require('path');

const express =  require('express');

const router =  express.Router();

const shopController = require('../controllers/shop');
const { resourceLimits } = require('worker_threads');

router.get('/', shopController.getIndex);

router.get('/products',shopController.getProducts);
router.get('/products/:productID',shopController.getProduct);
router.get('/cart',shopController.getCart);
router.get('/checkout',shopController.getCheckout);
router.get('/order',shopController.getOrders);


module.exports = router;
