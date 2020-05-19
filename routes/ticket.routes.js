const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket.controllers");

router.post("/ticket", ticketController.createTicket);
router.get("/ticket", ticketController.getTicket);

module.exports = router;