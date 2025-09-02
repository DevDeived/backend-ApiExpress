import prisma from "../config/prisma.js"

export const index = async() => {
    let results = await prisma.categoria.findMany()
    return results
}
