import * as produtoRepository from "../repositories/produtoRepository.js"

export const index = async() => {
    return await produtoRepository.index()
}

export const find = async(id) => {
    return await produtoRepository.find(id)
}

export const destroy = async(id) => {
    return await produtoRepository.destroy(id)
}

export const create = async(nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id) => {
    return await produtoRepository.create(nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id)
}

export const update = async(id,nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id) => {
    return await produtoRepository.update(id,nome,descricao,avaliacao,tamanho,cor,preco,genero,categoria_id,estado_id,marca_id,promocao_id)
}