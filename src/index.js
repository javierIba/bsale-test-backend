const app = require('./app');
const port = 8080;



app.listen(port, () => {
    console.log(`Llistening on port ${port}`)
  })