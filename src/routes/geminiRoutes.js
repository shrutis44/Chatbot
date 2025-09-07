import express from "express";
import { handleGenerateText } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/generate", handleGenerateText);

export default router;