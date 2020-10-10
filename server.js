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
        let coronaObjects=response.data;
        let date = response.data.timelineitems[0];
        
        ///console.log(response.data.timelineitems[0]);
        res.render('index.ejs',{corona: coronaObjects, dates: date}); 

    
        
        /*for (var keys=Object.keys(date), i=0, end=keys.length; i<end;i++){
            var key=keys[i], value=date[key];
            let lastKey = keys[end-2];
            let firstKey = keys[0];
            
           if (key==firstKey){
                console.log(`First date is: ${firstKey}`);
                console.log(`New daily cases: ${value.new_daily_cases}`);
                console.log(`Total cases: ${value.total_cases}`);
                console.log(`Total recoveries: ${value.total_recoveries}`);
           }else if(key=lastKey){
                console.log(`Last date is: ${lastKey}`);
                console.log(`New daily cases: ${value.new_daily_cases}`);
                console.log(`Total cases: ${value.total_cases}`);
                console.log(`Total recoveries: ${value.total_recoveries}`);
                break;
           }

           
        
        };*/
        
    
        
    }).
    catch(function(error){
        console.log(error);
        
    });      
        
 });


app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
    });