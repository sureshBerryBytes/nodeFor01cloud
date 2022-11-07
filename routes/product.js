const express = require('express');
const router = express.Router();

const {getProducts, newProduct, getSingleProduct, updateProduct, 
    deleteProduct, createProductReview, getProductReviews, deleteReview} = require('../controllers/productController')
const {isAuthenticatedUser, authorizedRole} = require('../middlewares/auth');

router.route('/product').get(isAuthenticatedUser,getProducts);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizedRole('admin'), newProduct);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizedRole('admin'), updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizedRole('admin'), deleteProduct);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/review/').delete(isAuthenticatedUser, deleteReview);

module.exports = router; 