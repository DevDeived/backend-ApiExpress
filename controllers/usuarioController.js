import * as usuarioService from "../services/usuarioService.js"


export const index = async(req,res) => {
    try {
        const usuarios = await usuarioService.index()
        res.status(200).send(usuarios)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const usuarios = await usuarioService.find(id)
        
        res.status(200).send(usuarios)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const usuarios = await usuarioService.destroy(id)
        
        res.status(200).send(usuarios)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {nome,email,senha,telefone} = req.body
        const usuarios = await usuarioService.create(nome,email,senha,telefone)
        
        res.status(200).send("Usuário cadastrado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {nome,email,senha,telefone} = req.body
        let {id} = req.params
        const usuarios = await usuarioService.update(nome,email,senha,telefone,id)
        
        res.status(200).send("Usuário atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}