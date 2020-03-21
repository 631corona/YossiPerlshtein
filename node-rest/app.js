const express = require('express');
const app = express();

app.get("/users", (req, res, next) =>{
    res.json(["Tom", "Ann", "Michal"]);
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})