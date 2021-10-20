const db = require('../utils/database');

const Category_40 = class Category_40{
    constructor(id,name,size,remote_url,link_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

static async fetchAll() {
    try{
        let results = await db.query(`SELECT * from category_40`);
        return result.rows;
    } catch (e) {
        console.log('error',e);
    }
    }
};

// const test =async () => {
//     let results =await Category_40.fetchAll();
//     console.log('results',JSON.stringify(results.rows));
// }

test();
module.exports = category_40;