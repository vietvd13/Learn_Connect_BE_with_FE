// DAO = Data Access Object
const mongoose = require('mongoose');
//Require model product
const productSchema = require('./product.model');

productSchema.statics = {
    create: function(data, cb){
        var product = new this(data);
        product.save(cb);
    },

    get: function(query, cb){
        this.find(query, cb);
    },

    getByName: function(query, cb){
        this.find(query, cb);
    },

    update: function(query, productUpdate, cb){
        this.findOneAndUpdate(query, {$set: productUpdate}, {new: true}, cb);
    },

    delete: function(query, cb){
        this.findOneAndDelete(query, cb);
    }
}

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;