require('dotenv/config');
const PORT = process.env.PORT || 3000
const app = require('./server');

app.listen(PORT, () => console.log('Server runing in localhost 127.0.0.1:3000'));