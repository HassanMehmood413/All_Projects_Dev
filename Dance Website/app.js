const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

//express specific stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded())


//pug specific stuff
app.set('view engine', 'pug');// template engine for pug 
app.set('views', path.join(__dirname,'views'));// set the path directory 

// //endpoints
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
});


//start the server
app.listen(port,()=>{
    console.log(`This app is running at port ${port}`);
});
