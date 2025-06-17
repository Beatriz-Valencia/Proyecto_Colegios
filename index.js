const express = require("express");
const app = express();
const PORT = 3000;

const db = require("./models"); 
const { tabla } = require("./models");


app.use(express.json());


app.use("/tablas", require("./routes/tablas"));






app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})