const express =require('express');
const ejs=require('ejs');
const bodyParser = require('body-parser');
const axios=require('axios');
const app=express();


app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    
    res.render('index.ejs', {corona: ''});
 });

app.post('/',(req, res)=>{
    /////let country=req.body.country;
    let url='https://api.thevirustracker.com/free-api?countryTimeline=EE';
  
    axios.get(url).
    
    then(function(response){
        console.log(response.corona);
        let coronaObjects=response.data[0];
        res.render('index.ejs',{corona:coronaObjects});

        
    }).
    catch(function(error){
        console.log(error);
        
    });      
        

});

app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
    });