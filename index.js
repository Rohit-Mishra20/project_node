const express=require('express')
var exphbs  = require('express-handlebars');
const path = require('path');

const usersRouter = require('./routes/user_request')

const port=8000
const app=express();

//setting up view engine
app.engine('handlebars', exphbs( { defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//static folders
app.use(express.static(path.join(__dirname,'public')))

 
// Parse url data
app.use(express.urlencoded());

//user define routes
app.use(usersRouter)

app
   .get('/',(req,res)=>{
    res.render('home');
    })

app.listen(port,()=>{
    console.log(`Server running on `+port)
});
