import express from "express"
import * as usuariosController from "../controllers/usuariosController.js"

const router = express.Router()

router.get("/usuarios",usuariosController.index)
router.get("/usuarios/:id",usuariosController.find)
router.delete("/usuarios/:id",usuariosController.destroy)
router.post("/usuarios",usuariosController.create)
router.put("/usuarios/:id",usuariosController.update)
export default router