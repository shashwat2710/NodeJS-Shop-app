const http =  require('http');
const path = require('path');

const express =  require('express');
const bodyParser =  require('body-parser');
//const expresshbs =  require('express-handlebars');

const adminRouter =  require('./routes/admin');
const shopRouter =  require('./routes/shop');

const errorController= require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'Public')));

app.use('/admin',adminRouter);
app.use(shopRouter);

app.use(errorController.errorPage);

app.listen('3000');