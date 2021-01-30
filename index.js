require('dotenv/config');
const PORT = process.env.PORT || 3000
const express = require('express');
const product = require('./routers/productRouter');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({
    produto: '/product'
}));

app.use('/product', product);

app.listen(PORT, () => console.log('Server runing in localhost 127.0.0.1:3000'));