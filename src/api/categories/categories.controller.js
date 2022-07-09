const { query } = require('./../../database/connection')

// function showAllCategories(req,res) {
//     const categoryNames = req.body;

//     let showAllCategoriesQuery = 'SELECT category.name as categoryName, count(*) AS total, sum(case when category.name = "bebida energetica" then 1 else 0 end) AS bebidaEnergetica, sum(case when category.name = "pisco" then 1 else 0 end) AS pisco FROM product inner join category on product.category = category.id'

//     // 'SELECT product.name,category.name as categoryName from  product inner join category on product.category = category.id';
//     query(showAllCategoriesQuery,(err, result) => {
//         if (err) {
//           res.status(500).json({ message: "Error en la base de datos" });
//         } else {
//           res.status(200).json({
//             message:"petición exitosa",
//             data:result
//           });
//         }
//       }) 
// } 


function showAllCategories(req,res) {
  let showAllCategoriesQuery = 'SELECT * FROM category';
  query(showAllCategoriesQuery,(err, result) => {
            if (err) {
              res.status(500).json({ message: "Error en la base de datos" });
            } else {
              res.status(200).json({
                message:"petición exitosa",
                data:result
              });
            }
          });
}

module.exports = {
    showAllCategories
}