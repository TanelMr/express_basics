//define express
const express = require ('express');
const app = express ();

//public directory
app.use(express.static('public'));

//add listeners
app.get('/user/:username',(req, res)=>{
    let user = req.params.username;
    res.render('index.ejs', {username:user});
});
//listen on port 3000
app.listen(3000, ()=>{
    console.log('Server started');
});

