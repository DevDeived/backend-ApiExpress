import * as produtoService from "../services/produtoService.js";

export const index = async (req, res) => {
  try {
    const produto = await produtoService.index();
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const find = async (req, res) => {
  try {
    let { id } = req.params;
    const produto = await produtoService.find(id);

    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    let { id } = req.params;
    const produto = await produtoService.destroy(id);

    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const create = async (req, res) => {
  try {
    let {
      nome,
      descricao,
      avaliacao,
      tamanho,
      cor,
      preco,
      genero,
      categoria_id,
      estado_id,
      marca_id,
      promocao_id,
    } = req.body;
    const produto = await produtoService.create(
      nome,
      descricao,
      avaliacao,
      tamanho,
      cor,
      preco,
      genero,
      categoria_id,
      estado_id,
      marca_id,
      promocao_id
    );

    res.status(200).send("Produto cadastrado com sucesso");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req, res) => {
  try {
    let { id } = req.params;
    let {
      nome,
      descricao,
      avaliacao,
      tamanho,
      cor,
      preco,
      genero,
      categoria_id,
      estado_id,
      marca_id,
      promocao_id,
    } = req.body;
    const produto = await produtoService.update(
      id,
      nome,
      descricao,
      avaliacao,
      tamanho,
      cor,
      preco,
      genero,
      categoria_id,
      estado_id,
      marca_id,
      promocao_id
    );

    res.status(200).json("Produto atualizado com sucesso");
  } catch (error) {
    console.error(error); // log no terminal
    res
      .status(500)
      .json({ error: "Erro ao atualizar produto", details: error.message });
  }
};
