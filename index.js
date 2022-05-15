const express = require('express');
const app = express();
const port = 5550;
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static('public'));


require("./router/router")(app);
app.listen(port, ()=>{
    console.log(`hallgotózok a ${port}`)
})