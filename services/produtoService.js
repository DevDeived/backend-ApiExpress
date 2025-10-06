import * as produtoRepository from "../repositories/produtoRepository.js";
import prisma from "../config/prisma.js";

export const getFiltered = async ({
  filtros = {},
  sort = "lancamento",
  page = 1,
  limit = 12,
}) => {
  const where = {};

  if (filtros.marca_id) {
    const marcas = Array.isArray(filtros.marca_id)
      ? filtros.marca_id.map(Number)
      : [Number(filtros.marca_id)];
    where.marca_id = { in: marcas };
  }

  if (filtros.categoria_id) {
    const categorias = Array.isArray(filtros.categoria_id)
      ? filtros.categoria_id.map(Number)
      : [Number(filtros.categoria_id)];
    where.categoria_id = { in: categorias };
  }

  if (filtros.genero) {
    const generos = Array.isArray(filtros.genero)
      ? filtros.genero
      : [filtros.genero];
    where.genero = { in: generos };
  }

  if (filtros.preco) {
    const [min, max] = filtros.preco.split("-").map(Number);
    where.preco = { gte: min, lte: max };
  }

  let orderBy = { createdAt: "desc" };
  switch (sort) {
    case "preco_asc":
      orderBy = { preco: "asc" };
      break;
    case "preco_desc":
      orderBy = { preco: "desc" };
      break;
    case "lancamento":
      orderBy = { createdAt: "desc" };
      break;
  }

  const skip = (page - 1) * limit;
  const take = limit;

  console.log(await prisma.produto.findMany());

  const produtos = await prisma.produto.findMany({
    where,
    orderBy,
    skip,
    take,
    include: {
      marca: true,
      categoria: true,
      promocao: true,
      estoque: true,
      forma_de_pagamento: true,
      end_de_entrega: true,
      estado: true,
    },
  });

  const total = await prisma.produto.count({ where });

  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data: produtos,
  };
};

export const create = async (data, imageFile) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === undefined || data[key] === null || data[key] === "") {
      delete data[key];
    }
  });

  const createData = {
    nome: data.nome,
    descricao: data.descricao,
    avaliacao: data.avaliacao ? Number(data.avaliacao) : undefined,
    tamanho: data.tamanho,
    cor: data.cor,
    preco: data.preco ? Number(data.preco) : undefined,
    genero: data.genero,
    imagem: imageFile ? imageFile.filename : data.imagem,
  };

  if (data.categoria_id) {
    createData.categoria = { connect: { id: Number(data.categoria_id) } };
  }
  if (data.marca_id) {
    createData.marca = { connect: { id: Number(data.marca_id) } };
  }
  if (data.promocao_id) {
    createData.promocao = { connect: { id: Number(data.promocao_id) } };
  }
  if (data.estado_id) {
    createData.estado = { connect: { id: Number(data.estado_id) } };
  }
  if (data.estoque_id) {
    createData.estoque = { connect: { id: Number(data.estoque_id) } };
  }
  if (data.forma_de_pagamento_id) {
    createData.forma_de_pagamento = {
      connect: { id: Number(data.forma_de_pagamento_id) },
    };
  }
  if (data.end_de_entrega_id) {
    createData.end_de_entrega = {
      connect: { id: Number(data.end_de_entrega_id) },
    };
  }

  return await prisma.produto.create({
    data: createData,
    include: {
      categoria: true,
      marca: true,
      promocao: true,
      estoque: true,
      forma_de_pagamento: true,
      end_de_entrega: true,
      estado: true,
    },
  });
};

export const update = async (id, data, imageFile) => {
  Object.keys(data).forEach((key) => {
    if (data[key] === undefined) delete data[key];
  });

  const updateData = {
    nome: data.nome,
    descricao: data.descricao,
    avaliacao: data.avaliacao ? Number(data.avaliacao) : undefined,
    tamanho: data.tamanho,
    cor: data.cor,
    preco: data.preco ? Number(data.preco) : undefined,
    genero: data.genero,
    imagem: data.imagem || (imageFile ? imageFile.filename : undefined),
    categoria: data.categoria_id
      ? { connect: { id: Number(data.categoria_id) } }
      : undefined,
    marca: data.marca_id
      ? { connect: { id: Number(data.marca_id) } }
      : undefined,
    promocao: data.promocao_id
      ? { connect: { id: Number(data.promocao_id) } }
      : undefined,
    estado: data.estado_id
      ? { connect: { id: Number(data.estado_id) } }
      : undefined,
    estoque: data.estoque_id
      ? { connect: { id: Number(data.estoque_id) } }
      : undefined,
    forma_de_pagamento: data.forma_de_pagamento_id
      ? { connect: { id: Number(data.forma_de_pagamento_id) } }
      : undefined,
    end_de_entrega: data.end_de_entrega_id
      ? { connect: { id: Number(data.end_de_entrega_id) } }
      : undefined,
  };

  Object.keys(updateData).forEach((key) => {
    if (updateData[key] === undefined) delete updateData[key];
  });

  return await prisma.produto.update({
    where: { id: Number(id) },
    data: updateData,
  });
};

export const destroy = async (id) => {
  return await prisma.produto.delete({
    where: { id: Number(id) },
  });
};

export const find = async (id) => {
  return await prisma.produto.findUnique({
    where: { id: Number(id) },
    include: {
      marca: true,
      categoria: true,
      promocao: true,
      estoque: true,
      forma_de_pagamento: true,
      end_de_entrega: true,
      estado: true,
    },
  });
};
