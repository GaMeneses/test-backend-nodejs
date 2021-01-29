const express = require('express');
const product = require('./routers/productRouter');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({
    produto: '/produto'
}));

app.use('/produto', product);

app.listen(3000, () => console.log('Server runing in localhost 127.0.0.1:3000'));