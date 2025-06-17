const express = require("express");
const app = express();
const PORT = 3000;

const db = require("./models"); 
const { Tabla } = require("./models");


app.use(express.json());

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/tablas", require("./routes/tablas"));






app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(` Documentación Swagger en http://localhost:${PORT}/api-docs`);
})