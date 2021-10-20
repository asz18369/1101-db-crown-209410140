const serviceCrown2Controller_40 = require('./serviceCrown2Controller_40')

exports.getCategories = async (req,res) => {
    try{
        const data=await serviceCrown2Controller_40.getCategories();
        return res.json(data);
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}