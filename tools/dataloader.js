const connectDB=require('../config/db');
const Battle=require('../models/Battle');
const csv = require('csv-parser')
const fs = require('fs')
const path=require('path')
const results = [];

//connect to Database
connectDB()

fs.createReadStream(path.join(__dirname,'../battles.csv'))
  .pipe(csv())
  .on('data',async (data) => {
    results.push(data);
    for(const [key,value] of Object.entries(data)){
        if(data[key]==""){
            delete data[key];
        }
    }
    if(data.attacker_commander && null != data.attacker_commander){
        let commander_list= data.attacker_commander.split(',');
        data={...data,attacker_commander:commander_list};
    }
    if(data.defender_commander && null != data.defender_commander){
        let commander_list= data.defender_commander.split(',');
        data={...data,defender_commander:commander_list};
    }
    //console.log(data);
      try{
        const newBattle=new Battle(data);
        await newBattle.save();
        console.log(newBattle);
    }catch(err){
        console.log(err);
      }
    
    })
  .on('end', () => {
    console.log(results.length);
    
  });

