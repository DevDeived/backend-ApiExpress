import express from "express"
import * as produtoController from "../controllers/produtoController.js"
const router = express.Router();


router.get("/produto",produtoController.index)
router.get("/produto/:id",produtoController.find)
router.delete("/produto/:id",produtoController.destroy)
router.post("/produto",produtoController.create)
router.put("/produto/:id",produtoController.update)
export default router