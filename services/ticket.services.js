const TicketSchema = require("../models/ticket.model");

const createTicket = async (reqBody) => {
    const ticket = await TicketSchema.create(reqBody);
    return ticket;
};

const getTicket = async () => {
    const ticketes = await TicketSchema.find();
    return ticketes;
};


module.exports = {
    createTicket,
    getTicket
};