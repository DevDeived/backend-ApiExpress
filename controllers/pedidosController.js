import * as pedidosService from "../services/pedidosService.js";

export const index = async (req, res) => {
  try {

    const pedidos = await pedidosService.index();

    res.status(200).send(pedidos);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const find = async (req, res) => {
  try {
    let { id } = req.params;
    const pedidos = await pedidosService.find(id);

    res.status(200).send(pedidos);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    const pedidos = await pedidosService.destroy(id);

    res.status(200).send(pedidos);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const create = async (req, res) => {
  try {
    let {
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id,
    } = req.body;
    const pedidos = await pedidosService.create(
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id
    );

    res.status(200).send("Pedido cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    let {
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id,
    } = req.body;
    let { id } = req.params;
    const pedidos = await pedidosService.update(
      id,
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id
    );

    res.status(200).send("Pedido atualizado com sucesso");
  } catch (error) {
    res.status(500).send(error);
  }
};
