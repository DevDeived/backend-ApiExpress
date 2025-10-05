import * as produtoRepository from "../repositories/produtoRepository.js";
import prisma from "../config/prisma.js";

// Filtrar produtos
export const getFiltered = async ({
  filtros = {},
  sort = "lancamento",
  page = 1,
  limit = 12,
}) => {
  const where = {};

  // Filtrar por marca
  if (filtros.marca_id) {
    const marcas = Array.isArray(filtros.marca_id)
      ? filtros.marca_id.map(Number)
      : [Number(filtros.marca_id)];
    where.marca_id = { in: marcas };
  }

  // Filtrar por categoria
  if (filtros.categoria_id) {
    const categorias = Array.isArray(filtros.categoria_id)
      ? filtros.categoria_id.map(Number)
      : [Number(filtros.categoria_id)];
    where.categoria_id = { in: categorias };
  }

  // Filtrar por gênero
  if (filtros.genero) {
    const generos = Array.isArray(filtros.genero)
      ? filtros.genero
      : [filtros.genero];
    where.genero = { in: generos };
  }

  // Filtrar por faixa de preço
  if (filtros.preco) {
    const [min, max] = filtros.preco.split("-").map(Number);
    where.preco = { gte: min, lte: max };
  }

  // Ordenação
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
  return await prisma.produto.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      avaliacao: Number(data.avaliacao),
      tamanho: data.tamanho,
      cor: data.cor,
      preco: Number(data.preco),
      genero: data.genero,
      imagem: data.imagem,
      categoria: { connect: { id: Number(data.categoria_id) } },
      marca: { connect: { id: Number(data.marca_id) } },
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
    },
  });
};

export const update = async (id, data, imageFile) => {
  return await prisma.produto.update({
    where: { id: Number(id) },
    data: {
      nome: data.nome,
      descricao: data.descricao,
      avaliacao: Number(data.avaliacao),
      tamanho: data.tamanho,
      cor: data.cor,
      preco: Number(data.preco),
      genero: data.genero,
      imagem: data.imagem,
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
    },
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
