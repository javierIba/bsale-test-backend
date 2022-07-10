const express = require('express');
const cors = require('cors')


const api_filter = require('./api/filter/filter.route');
const api_category = require('./api/categories/categories.route'); 
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/filter',api_filter);
app.use('/api/category',api_category);
module.exports = app;

