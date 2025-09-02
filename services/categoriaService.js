import * as categoriaRepository from "../repositories/categoriaRepository.js"


export const index = async() => {
    return await categoriaRepository.index()
}

export const find = async(id) => {
    return await categoriaRepository.find(id)
}

export const destroy = async(id) => {
    return await categoriaRepository.destroy(id)
}

export const create = async(nome,email,senha,telefone) => {
    return await categoriaRepository.create(nome,email,senha,telefone)
}

export const update = async(nome,email,senha,telefone,id) => {
    return await categoriaRepository.update(nome,email,senha,telefone,id)
}