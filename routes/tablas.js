const express = require("express");
const TablaController = require("../controllers/TablaController");


const router = express.Router();


router.get("/", TablaController.getAll);
router.get("/id/:id", TablaController.getById);
router.get("/byname", TablaController.getByName);

module.exports = router;


