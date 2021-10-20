const Category_40 = require('../models/Category_40');

exports.getCategories = async (req,res)=>{
    try {
        return await Category_40.fetchAll();
    } catch (err){
        console.log('getCategories',err);
    }
}