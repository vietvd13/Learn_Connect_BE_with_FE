//Connect db
require('./config/dbconnect');
const expess = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//Connect be with fe
const cors = require('cors');
//Require routes cho product
const product = require('./routes/product.route');
const app = expess();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Router cho product
app.use('/products', product);

app.listen(port, (req, res) => {
    console.log('Server running in port ' + port);
});


