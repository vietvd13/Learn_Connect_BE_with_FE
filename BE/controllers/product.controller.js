const Product = require('../models/product.dao');
const mongoose = require('mongoose');
const productSchema = require('../models/product.model');

//Thêm sản phẩm
exports.product_create = function(req, res) {
    //Tạo Object sản phẩm
    const product = new Product(
        {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price,
            detail: req.body.detail
        }
    );

    //Thêm sản phẩm
    Product.create(product, function(err, product) {
        if(err){
            res.json({
                //Thông báo lỗi khi thêm
                error: err
            })
        }else{
            res.json({
                //Thông báo thêm sản phẩm thành công
                message: 'Add successfully'
            })
        }
    })
};

//Lấy thông tin của 1 sản phẩm bằng id
exports.product_get = function(req, res, next){
    Product.get({_id: req.params.id}, function(err, product) {
        if(err){
            res.json({
                //Hiển thị lỗi khi lấy thông tin của 1 sản phẩm
                error: err
            });
        }else{
            res.json({
                //Hiên thị thông tin của 1 sản phẩm
                product: product
            });
        }
    });
}

//Lấy thông tin của nhiều sản phẩm
exports.products_get = function(req, res, next){
    Product.get({}, function(err, product) {
        if(err){
            res.json({
                //Thông báo lỗi khi lấy thông tin
                error: err
            });
        }else{
            res.json({
                product: product
            })
        }
    });
}

//Cập nhật thông tin của 1 sản phẩm bằng ID
exports.product_update = function(req, res, next) {
    //Object lưu thông tin cần update
    var productUpdate = {
        name: req.body.name,
        price: req.body.price,
        detail: req.body.detail
    }

    Product.update({_id: req.params.id}, productUpdate, function(err, productUpdate) {
        if(err){
            res.json({
                //Hiển thị lỗi
                error: err
            });
        }else{
            res.json({
                //Thông báo thành công
                message: 'Product update successfully'
            });
        }
    });
}

//Xoá thông tin của 1 sản phẩm bằng ID
exports.product_delete = function(req, res, next) {
    Product.delete({_id: req.params.id}, function(err, product) {
        if(err){
            res.json({
                //Hiển thị lỗi khi xoá
                error: err
            });
        }else{
            res.json({
                //Thông báo thành công khi xoá
                message: 'Deleted product successfully'
            });
        }
    });
}
