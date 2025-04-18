import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
} from "../controllers/UserController.js";

const router = express.Router();
const PORT = 3000;

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;
