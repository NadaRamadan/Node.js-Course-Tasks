const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Welcome to Express!');
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});
app.get('/greet/:name', (req,res)=>{
    const {name}= req.params;
    res.json({message:`Hello, ${name}! Welcome to express`})

})
