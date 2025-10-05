-- CreateIndex
CREATE INDEX `Produto_genero_idx` ON `Produto`(`genero`);

-- CreateIndex
CREATE INDEX `Produto_preco_idx` ON `Produto`(`preco`);

-- CreateIndex
CREATE INDEX `Produto_createdAt_idx` ON `Produto`(`createdAt`);

-- RedefineIndex
CREATE INDEX `Produto_categoria_id_idx` ON `Produto`(`categoria_id`);


-- RedefineIndex
CREATE INDEX `Produto_marca_id_idx` ON `Produto`(`marca_id`);

