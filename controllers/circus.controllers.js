const circusService = require("../services/circus.services");

const createCircus = async (req, res, next) => {
    console.log("req", req.body);
    try {
        const circus = await circusService.createCircus({
            title: req.body.title,
            date: req.body.date,
        });
        res.status(200).json({ result: circus });
    } catch (err) {
        next(err);
    }
};

const getCircus = async (req, res, next) => {
    try {
        const circuses = await circusService.getCircus();
        res.status(200).json({ result: circuses });
    } catch (err) {
        next(console.log(err));
    }
};

const getCircusById = async (req, res, next) => {
    try {
        const circus = await circusService.getCircusById(req.params.id);
        res.status(200).json({ result: circus });
    } catch (err) {
        next(console.log(err));
    }
};

const deleteCircus = async (req, res, next) => {
    try {
        const circus = await circusService.deleteCircus(req.params.id);
        res.status(200).json({ result: "done", deletedcircus: circus });
    } catch (err) {
        next(err);
    }
};

const updateCircus = async (req, res, next) => {
    try {
        const circus = await circusService.updateCircus(req.params.id, req.body);
        res.status(200).json({ result: "done", updatedCircus: circus });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCircus,
    getCircus,
    getCircusById,
    deleteCircus,
    updateCircus,
};