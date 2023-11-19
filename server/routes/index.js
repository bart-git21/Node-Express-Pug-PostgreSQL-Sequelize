import express from "express";
import { check } from "express-validator";
import { appControllers } from "./controllers/index.js";

const router = express.Router();

router.get("/", appControllers.getStartPage());
router.get("/id", appControllers.getUser());
router.post(
  "/add",
  [
    check("name").isLength({ min: 2 }).withMessage("Please enter a name"),
    check("email").isLength({ min: 1 }).withMessage("Please enter an email"),
  ],
  appControllers.addUser()
);

export default router;
