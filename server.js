const  path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require ('cors')
const app = express();

app.set('port',process.env.PORT || 8000);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');    

app.use(express.static("public")); 
app.use(express.static("node_modules")); 
app.use(morgan('start'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

//routes
app.use(morgan('start'));
app.get('/', indexRoutes);
  
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});