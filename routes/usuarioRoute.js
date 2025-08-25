import express from "express"
import * as usuarioController from "../controllers/usuarioController.js"

const router = express.Router()

router.get("/usuarios",usuarioController.index)

export default router