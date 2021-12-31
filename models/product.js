const rootDir = require('../util/path');

//const fs = require('fs').promises;
const path =  require('path');
const fs = require('fs');




const p = path.join(rootDir,
    'Data',
    'products.json'
);

const getProductFromFile =(cb) => {

    fs.readFile(p,(err, data) => {
        if(err){
            return cb([]);
        }
        else {
           return cb(JSON.parse(data));
            }

        });
}

/*
const promisedReadFile = new Promise ((resolve,reject) => {
    const data = fs.readFile(p,(err,data)=>{
        if(!err) resolve(data);
        else reject(err);
    });

})
const getProductFromFile = () => {
   // const data = await fs.readFile(p);
   const data = await promisedReadFile;
    return data;

};


const getProductFromFile = () => {
    const data =  promisedReadFile.then((data)=> {
        return data;
    });
    return data;
}
*/

class Product {
    constructor(title, imageUrl, price, description){
        this.title =  title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    
    save()  {
    this.id = Math.random().toString();
    getProductFromFile((product) => {
        product.push(this);
        fs.writeFile(p, JSON.stringify(product) , err => {
            console.log(err); 
             });
    });
    }

    static fetchAll(cb){

        getProductFromFile(cb);
            
    }
    static findByID(id,cb){
        getProductFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}

module.exports =  Product;