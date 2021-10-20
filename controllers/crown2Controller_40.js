const serviceCrown2Controller_40 = require('./serviceCrown2Controller_40')

exports.getCategories = async (req,res) => {
    try{
        let results=await serviceCrown2Controller_40.getCategories();
        console.log('results',JSON.stringify(results));
        res.render('crown2_40', { 
            data: results,
            title: 'Crown2_40',
            name: 'Chen Cheh-Hsien',
            id: '209410140'
        });
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}