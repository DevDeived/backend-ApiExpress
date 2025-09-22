import * as enderecoentregaService from "../services/enderecoentregaService.js"


export const index = async(req,res) => {
    try {
        const enderecoentrega = await enderecoentregaService.index()
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const find = async(req,res) => {
    try {
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.find(id)
        
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}

export const destroy = async(req,res) => {
    try {
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.destroy(id)
        
        res.status(200).send(enderecoentrega)
    } catch (error) {
            res.status(500).send(error)
    }
}
export const create = async(req,res) => {
    try {
        let {id,estado,cidade,rua,cep,numero,complemento} = req.body
        const enderecoentrega = await enderecoentregaService.create(id,estado,cidade,rua,cep,numero,complemento)
        
        res.status(200).send("Endereço cadastrado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}

export const update = async(req,res) => {
    try {
        let {estado,cidade,rua,cep,numero,complemento} = req.body
        let {id} = req.params
        const enderecoentrega = await enderecoentregaService.update(id,estado,cidade,rua,cep,numero,complemento)
        
        res.status(200).send("Endereço atualizado com sucesso")
    } catch (error) {
            res.status(500).send(error)
    }
}