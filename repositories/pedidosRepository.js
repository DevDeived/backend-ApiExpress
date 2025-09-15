import prisma from "../config/prisma.js";

export const index = async () => {
  let results = await prisma.pedido.findMany();
  return results;
};

export const find = async (id) => {
  let results = await prisma.pedido.findUnique({
    where: { id: Number(id) },
  });
  return results;
};

export const create = async (
  nome,
  cod_rastreio,
  data_compra,
  data_entrega,
  forma_de_pagamento_id,
  status_id,
  transportadora_id
) => {
  let results = await prisma.pedido.create({
    data: {
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id,
    },
  });
  return results;
};

export const destroy = async (id) => {
  let results = await prisma.pedidos.delete({
    where: { id: Number(id) },
  });
  return results;
};

export const update = async (
  id,
  nome,
  cod_rastreio,
  data_compra,
  data_entrega,
  forma_de_pagamento_id,
  status_id,
  transportadora_id
) => {
  let results = await prisma.pedidos.update({
    where: { id: Number(id) },
    data: {
      nome,
      cod_rastreio,
      data_compra,
      data_entrega,
      forma_de_pagamento_id,
      status_id,
      transportadora_id,
    },
  });
  return results;
};
