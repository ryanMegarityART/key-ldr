import express from "express";
import { tldr } from "./tldr/tldr";

const router = express.Router();

router.use("/tldr", tldr);

export default router;