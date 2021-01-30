const express = require('express');
const product = require('./routers/productRouter');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({
    product: '/product'
}));

app.use('/product', product);

module.exports = app;