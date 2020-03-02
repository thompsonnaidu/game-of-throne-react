const express =require('express');
const app=express();
const connectDB=require('./config/db');
const path=require('path');
const bodyParser = require('body-parser');
//connect to Database
connectDB()

// initialise middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Define Routes
app.use('/api/battle',require('./routes/battle'));


//server static assets in production
if(process.env.NODE_ENV === 'production'){

    // set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'client','build','index.html'))

    })
} 


const PORT= process.env.PORT || 5000;

// Start the server @ port 
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})
