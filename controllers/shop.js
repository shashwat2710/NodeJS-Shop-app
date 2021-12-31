const Product =  require('../models/product');
const router = require('../routes/shop');



exports.getProducts =(req, res, next) => {

    Product.fetchAll((products) => {
        //console.log(products);
        res.render('shop/product-list',{prods: products, 
            docTitle: 'All Products',
            pageTitle: 'All Products', 
            path: '/products'
        });
    });

};

exports.getProduct = (req, res, next) => {
    const prodID = req.params.productID;
    Product.findByID(prodID, (product) => {
        res.render('shop/product-details',{
            product:  product,
            pageTitle: product.title,
            path: '/products'
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index',{prods: products, 
            docTitle: 'My Shop',
            pageTitle: 'My Shop', 
            path: '/'
        });
    });
    
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/order',{
        path: '/order',
        pageTitle: 'My Orders'
    })
}