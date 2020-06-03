const CircusSchema = require("../models/circus.model");

const createCircus = async (reqBody) => {
  const circus = await CircusSchema.create(reqBody);
  return circus;
};

const getCircus = async () => {
  const circuses = await CircusSchema.find();
  return circuses;
};

const getCircusById = async (circusId) => {
  const circus = await CircusSchema.findById(circusId);
  if (!circus) {
    throw new Error("Not found");
  }
  return circus;
};

const deleteCircus = async (circusId) => {
  const circus = await getCircusById(circusId);
  await circus.remove();
  return circus;
};

const updateCircus = async (circusId, updateParam) => {
  const circus = await getCircusById(circusId);
  Object.assign(circus, updateParam);
  circus.save();
  return circus;
};

module.exports = {
  createCircus,
  getCircus,
  getCircusById,
  deleteCircus,
  updateCircus,
};
