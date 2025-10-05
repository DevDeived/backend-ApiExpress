import prisma from "../config/prisma.js";

// Listar todos os produtos
export const index = async () => {
  const results = await prisma.produto.findMany({
    include: {
      categoria: true,
      marca: true,
      promocao: true,
      estoque: true,
      estado: true,
      end_de_entrega: true,
      forma_de_pagamento: true,
    },
  });
  //return results;
  return [];
};

// Buscar produto por ID
export const find = async (id) => {
  const result = await prisma.produto.findUnique({
    where: { id: Number(id) },
    include: {
      categoria: true,
      marca: true,
      promocao: true,
      estoque: true,
      estado: true,
      end_de_entrega: true,
      forma_de_pagamento: true,
    },
  });
  return result;
};

// Criar novo produto
export const create = async (data) => {
  const result = await prisma.produto.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      avaliacao: Number(data.avaliacao),
      tamanho: data.tamanho,
      cor: data.cor,
      preco: Number(data.preco),
      genero: data.genero,
      imagem: data.imagem, // caminho/nome do arquivo da imagem
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
      end_de_entrega: data.end_de_entrega_id
        ? { connect: { id: Number(data.end_de_entrega_id) } }
        : undefined,
      forma_de_pagamento: data.forma_de_pagamento_id
        ? { connect: { id: Number(data.forma_de_pagamento_id) } }
        : undefined,
    },
  });
  return result;
};

// Atualizar produto
export const update = async (id, data) => {
  const result = await prisma.produto.update({
    where: { id: Number(id) },
    data: {
      nome: data.nome,
      descricao: data.descricao,
      avaliacao:
        data.avaliacao !== undefined ? Number(data.avaliacao) : undefined,
      tamanho: data.tamanho,
      cor: data.cor,
      preco: data.preco !== undefined ? Number(data.preco) : undefined,
      genero: data.genero,
      imagem: data.imagem || undefined,
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
      end_de_entrega: data.end_de_entrega_id
        ? { connect: { id: Number(data.end_de_entrega_id) } }
        : undefined,
      forma_de_pagamento: data.forma_de_pagamento_id
        ? { connect: { id: Number(data.forma_de_pagamento_id) } }
        : undefined,
    },
  });
  return result;
};

// Deletar produto
export const destroy = async (id) => {
  const result = await prisma.produto.delete({
    where: { id: Number(id) },
  });
  return result;
};
