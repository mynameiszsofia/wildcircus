const express = require("express");
const router = express.Router();
const circusController = require("../controllers/circus.controllers");

router.post("/", circusController.createCircus);
router.get("/", circusController.getCircus);
router.get("/:id", circusController.getCircusById);
router.delete("/:id", circusController.deleteCircus);
router.patch("/:id", circusController.updateCircus);

module.exports = router;