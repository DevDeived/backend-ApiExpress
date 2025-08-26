import express from "express"
import * as usuarioController from "../controllers/usuarioController.js"

const router = express.Router()

router.get("/usuarios",usuarioController.index)
router.get("/usuarios/:id",usuarioController.find)
router.delete("/usuarios/:id",usuarioController.destroy)
router.post("/usuarios",usuarioController.create)
router.put("/usuarios/:id",usuarioController.update)
export default router