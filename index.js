//define packages
const express = require ('express');
const path = require("path");
const app = express ();

//public directory
app.use(express.static('public'));

//add views template engine
app.set('view engine', 'ejs');

//add views directory path
app.set('views', path.join(__dirname, 'views'));



//add listeners
app.get('/questions',(req, res)=>{
    let questions = [
        {title: "Pick a number", user:"Kadi", votes : 10},
        {title: "Pick another number", user: "Tom", votes: 10}
    ]
    res.render('index', {questions:questions});
});
//listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started');
});

