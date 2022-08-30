const express = require('express');
const app = express(); 

app.get('/', async (req, res, next) =>{
    res.json({"users": ["John", 'Joe', 'Bob']})
})


app.listen(5000, () => {
    console.log("Listening at port 5000")
})