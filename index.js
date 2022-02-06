//define packages
const express = require ('express');
const path = require("path");
const app = express ();
const bodyparser = require('body-parser');

//public directory
app.use(express.static('public'));

//add views template engine
app.set('view engine', 'ejs');

//add views directory path
app.set('views', path.join(__dirname, 'views'));

//use bodyparser
app.use(bodyparser.urlencoded({extended:true}));

//add listeners
app.get('/login',(req, res)=>{
    res.render('index');
});

//post
app.post ('/login', (req, res)=>{

    let email=req.body.email;
    let password=req.body.password;

    if (email === 'email@email.com' && password === 'qwerty'){
        res.redirect('/dashboard');
    }

    console.log('Post request done')
    console.log(req.body)
})

app.get ('/dashboard', (req,res)=>{
    res.render('dashboard');
});
//listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started');
});

