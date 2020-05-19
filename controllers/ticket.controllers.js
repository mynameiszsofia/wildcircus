const ticketService = require("../services/ticket.services");

const createTicket = async (req, res, next) => {
    console.log("req", req.body);
    try {
        const ticket = await ticketService.createTicket({
            email: req.body.email,
            ticket: req.body.ticket,
        });
        res.status(200).json({ result: ticket });
    } catch (err) {
        next(err);
    }
};

const getTicket = async (req, res, next) => {
    try {
        const ticketes = await ticketService.getTicket();
        res.status(200).json({ result: ticketes });
    } catch (err) {
        next(console.log(err));
    }
};

module.exports = {
    createTicket,
    getTicket
};