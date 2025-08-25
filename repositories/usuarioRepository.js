import db from "../config/db.js"

export const index = async(req,res) => {
    let [results] = await db.query('SELECT * FROM usuarios')
    return results
}