//define express
const express = require ('express');
const app = express ();

//add listeners
app.get('/user/:username',(req, res)=>{
    let user = req.params.username;
    res.render('index.ejs', {username:user});
});

app.get('*', (req, res)=> {
    res.send('<h1>404, this page does not exist</h1><br><a href="/">Go to homepage</a>');
});

//listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started');
});

