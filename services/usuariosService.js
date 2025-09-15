import * as usuariosRepository from "../repositories/usuariosRepository.js"


export const index = async() => {
    return await usuariosRepository.index()
}

export const find = async(id) => {
    return await usuariosRepository.find(id)
}

export const destroy = async(id) => {
    return await usuariosRepository.destroy(id)
}

export const create = async(nome,cpf,genero,email,celular,senha) => {
    return await usuariosRepository.create(nome,cpf,genero,email,celular,senha)
}

export const update = async(nome,cpf,genero,email,celular,senha) => {
    return await usuariosRepository.update(nome,cpf,genero,email,celular,senha)
}