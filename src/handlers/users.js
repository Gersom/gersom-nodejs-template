const {
  getAllUsersController,
  getUserController,
  postUserController,
  updateUserController,
  deleteUserController
} = require("@controllers/users");

const getAllUsers = async (req, res) => {
  const result = await getAllUsersController(req.query);
  res.status(200).json(result);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const result = await getUserController(id);
  res.status(200).json(result);
};

const createUser = async (req, res) => {
  const result = await postUserController(req.body);
  res.status(201).json(result);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const result = await updateUserController(id, req.body);
  res.status(200).json(result);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await deleteUserController(id);
  res.status(200).json(result);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};