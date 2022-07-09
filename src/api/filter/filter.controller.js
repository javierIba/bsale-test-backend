const {query} = require('./../../database/connection')




function showAllProducts(req,res){
    let showAllProductsQuery = "Select * from product";
    
    query(showAllProductsQuery,
        (err, result) => {
            if (err) {
              res.status(500).json({ message: "Error en la base de datos" });
            } else {
              res.status(200).json({
                message:"petición exitosa",
                data:result
              });
            }
          }
    );
}


module.exports = {
    showAllProducts
}