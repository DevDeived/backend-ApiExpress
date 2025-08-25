import * as usuarioService from "../services/usuarioService.js"


export const index = async(req,res) => {
    try {
        const usuarios = await usuarioService.index()
        res.status(200).send(usuarios)
    } catch (error) {
            res.status(500).send(error)
    }
}