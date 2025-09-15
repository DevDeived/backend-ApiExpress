-- CreateTable
CREATE TABLE `End_de_entrega` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` VARCHAR(255) NOT NULL,
    `cidade` VARCHAR(255) NOT NULL,
    `rua` VARCHAR(2) NOT NULL,
    `cep` VARCHAR(50) NOT NULL,
    `numero` VARCHAR(50) NOT NULL,
    `complemento` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarios_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `End_de_entrega` ADD CONSTRAINT `End_de_entrega_usuarios_id_fkey` FOREIGN KEY (`usuarios_id`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
