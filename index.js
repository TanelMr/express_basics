//define express
const express = require ('express');
const app = express ();

//add listeners
app.get('/',(req, res)=>{
    res.send('<a href="/contact">Contact us</a><br><a href="/about">About us</a>');
});

app.get('/contact', (req, res)=>{
    res.send('<h1>Contact us page</h1>');
});

app.get('/about', (req, res)=>{
    res.send('<h1>About us page</h1>');
});

app.get('*', (req, res)=> {
    res.send('<h1>404, this page does not exist</h1><br><a href="/">Go to homepage</a>');
});

//listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started');
});

