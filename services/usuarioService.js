import * as usuarioRepository from "../repositories/usuarioRepository.js"


export const index = async(req,res) => {
    return await usuarioRepository.index()
}