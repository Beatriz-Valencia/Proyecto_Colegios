const express = require("express");
const TablaController = require("../controllers/TablaController");


const router = express.Router();


router.get("/", TablaController.getAll);
router.get("/id/:id", TablaController.getById);
router.get("/municipio/:municipio", TablaController.getByMunicipio);
router.get("/byname", TablaController.getByName);
router.get("/regimen/:regimen", TablaController.getByRegimen);



module.exports = router;


