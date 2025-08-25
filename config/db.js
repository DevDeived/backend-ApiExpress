import mysql from "mysql2/promise"

const db = mysql.createPool({
    user:"root",
    host:"localhost",
    database:"usuarios",
    password:"1234",
    port:"3306"
})

export default db