const { query } = require('./../../database/connection')

function showAllProducts(req, res) {
  const showAllProductsQuery = "SELECT name,url_image,price,discount FROM product";

  query({
    query: showAllProductsQuery,
    callback: (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error en la base de datos" });
      } else {
        res.status(200).json({
          message: "petición exitosa",
          data: result
        });
      }
    },
    arrayData: null
  })

}

function showProductByCategory(req, res) {
  const { category } = req.body;
  const showProductByCategoryQuery = 'SELECT name, url_image, price, discount FROM product WHERE category = ?';

  query({
    query: showProductByCategoryQuery,
    callback: (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error en la base de datos" });
      } else {
        res.status(200).json({
          message: "petición exitosa",
          data: result,
        });
      }
    },
    arrayData: [category, category]
  }
  );
}

function searchProductBy(req, res) {
  let { product } = req.body;
  product = `%${product}%`;
  const searchProductByQuery = 'SELECT name,url_image,price,discount FROM product WHERE name LIKE ?';

  query({
    query: searchProductByQuery,
    callback: (err, result) => {
      if (err) {
        res.status(500).json({ message: "Error en la base de datos" });
      } else {
        res.status(200).json({
          message: "petición exitosa",
          data: result
        });
      }
    },
    arrayData: [product]
  }
  );

}





module.exports = {
  showAllProducts,
  showProductByCategory,
  searchProductBy
}