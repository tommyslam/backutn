const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/create", controller.createEmployee);
router.get("/empleados", controller.getEmployees);
router.put("/update", controller.updateEmployee);
router.delete("/delete/:id", controller.deleteEmployee);
router.post('/login', controller.login);
router.post('/register', controller.userCreate);
router.post('/createText', controller.createText);
router.get("/info", controller.getInfo);
router.delete("/deleteinfo/:id", controller.deletInfo);
router.put("/updateinfo", controller.updateInfo);

module.exports = router;
