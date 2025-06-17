const express = require("express");
const app = express();
const PORT = 3000;

//const db = require("./models"); 
//const {  } = require("./models");


app.use(express.json());


//app.use("/users", require("./routes/users"));






app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})