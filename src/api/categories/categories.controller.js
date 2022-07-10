const { query } = require('./../../database/connection')




function showAllCategories(req, res) {
  let showAllCategoriesQuery = 'SELECT name,id FROM category';
  query({
    query: showAllCategoriesQuery,
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
  });
}

module.exports = {
  showAllCategories
}