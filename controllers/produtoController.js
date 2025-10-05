import * as produtoService from "../services/produtoService.js";

export const index = async (req, res) => {
  try {
    const produtos = await produtoService.getFiltered({
      filtros: req.query,
      sort: req.query.sort || "lancamento",
      page: Number(req.query.page) || 1,
      limit: Number(req.query.limit) || 12,
    });
    res.status(200).json(produtos);
  } catch (error) {
    console.error("Erro no getFiltered:", error);
    res.status(500).json({
      error: "Erro ao buscar produtos",
      details: error.message,
    });
  }
};

// Buscar por ID
export const find = async (req, res) => {
  try {
    const produto = await produtoService.update(req.params.id);
    res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(500).json({
      error: "Erro ao buscar produto",
      details: error.message,
    });
  }
};

// Criar produto
export const create = async (req, res) => {
  try {
    const produto = await produtoService.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    res.status(500).json({
      error: "Erro ao criar produto",
      details: error.message,
    });
  }
};

// Atualizar produto
export const update = async (req, res) => {
  try {
    const produto = await produtoService.update(req.params.id, req.body);
    res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    res.status(500).json({
      error: "Erro ao atualizar produto",
      details: error.message,
    });
  }
};

// Deletar produto
export const destroy = async (req, res) => {
  try {
    const produto = await produtoService.destroy(req.params.id);
    res.status(200).json(produto);
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    res.status(500).json({
      error: "Erro ao deletar produto",
      details: error.message,
    });
  }
};
