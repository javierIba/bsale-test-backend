const databaseInfo = require('./key');
const mysql = require('mysql2');

var pool = mysql.createPool(databaseInfo);


function query(dataQuery) {
    let query = dataQuery.query;
    let callback = dataQuery.callback;
    let arrayData = dataQuery.arrayData;
   
    let queryFormat = null;

    if (arrayData) {
        queryFormat = mysql.format(query, arrayData);
    } else {
        queryFormat = mysql.format(query);
    }
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("error en la base de datos");
        };
        connection.query(queryFormat, (err, result) => {
            console.log(queryFormat)
            callback(err, result);
            connection.release();
        });
    });
}
module.exports = {
    query
}
