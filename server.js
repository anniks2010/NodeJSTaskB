const express =require('express');
const ejs=require('ejs');
const bodyParser = require('body-parser');
const axios=require('axios');
const app=express();


app.set('view engine',ejs);
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    
    let url='https://api.thevirustracker.com/free-api?countryTimeline=EE';
    axios.get(url).
    
    then(function(response){
        ////console.log(response.data);
        let coronaObjects=response.data;
        let date = response.data.timelineitems[0];
        console.log(response.data.timelineitems[0]);
        res.render('index.ejs',{corona: coronaObjects, dates: date}); 

          
          for (const [key, value] of Object.entries(date)) {
           
            
            
            console.log(`${key}: ${value}`);
        }



        
    }).
    catch(function(error){
        console.log(error);
        
    });      
        
 });


app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
    });