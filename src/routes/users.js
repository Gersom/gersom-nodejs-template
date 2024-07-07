const express = require("express");
const router = express.Router();
const { asyncHandler } = require("@middlewares/asyncHandler");
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("@handlers/users");

router.get("/", asyncHandler(getAllUsers));
router.get("/:id", asyncHandler(getUser));
router.post("/", asyncHandler(createUser));
router.put("/:id", asyncHandler(updateUser));
router.delete("/:id", asyncHandler(deleteUser));

module.exports = router;