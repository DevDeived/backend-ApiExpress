import db from "../config/db.js"

export const index = async() => {
    let [results] = await db.query('SELECT * FROM usuarios')
    return results
}

export const find = async(id) => {
    let [results] = await db.query('SELECT * FROM usuarios WHERE id =?',[id])
    return results
}

export const destroy = async(id) => {
    let [results] = await db.query('DELETE FROM usuarios WHERE id =?',[id])
    return results
}

export const create = async(nome,email,senha,telefone) => {
    let [results] = await db.query('INSERT INTO usuarios(nome,email,senha,telefone) VALUES(?,?,?,?)',[nome,email,senha,telefone])
    return results
}


export const update = async(nome,email,senha,telefone,id) => {
    let [results] = await db.query('UPDATE usuarios SET nome = ?, email=?,senha=?,telefone=? WHERE id = ?',[nome,email,senha,telefone,id])
    return results
}