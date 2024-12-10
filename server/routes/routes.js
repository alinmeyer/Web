import express from "express";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
import postRoutes from "./postRoutes.js";
import bookRoutes from "./bookRoutes.js";

const router = express.Router();
const baseURL = "/api/v1"; // Inclua a barra inicial

// Rotas principais
router.use(`${baseURL}/users`, userRoutes);
router.use(`${baseURL}/auth`, authRoutes);
router.use(`${baseURL}/posts`, postRoutes);
router.use(`${baseURL}/books`, bookRoutes);

// Rota principal para teste
router.get("/", (req, res) => {
    res.send("API está funcionando!");
});

export default router;

