import * as usuarioRepository from "../repositories/usuarioRepository.js"


export const index = async() => {
    return await usuarioRepository.index()
}

export const find = async(id) => {
    return await usuarioRepository.find(id)
}

export const destroy = async(id) => {
    return await usuarioRepository.destroy(id)
}

export const create = async(nome,email,senha,telefone) => {
    return await usuarioRepository.create(nome,email,senha,telefone)
}

export const update = async(nome,email,senha,telefone,id) => {
    return await usuarioRepository.update(nome,email,senha,telefone,id)
}