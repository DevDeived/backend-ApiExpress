import mysql from "mysql2/promise"

const db = mysql.createPool({
    user:"root",
    host:"localhost",
    database:"dripstore",
    password:"1234",
    port:"3307"
})

export default db