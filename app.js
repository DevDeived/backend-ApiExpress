import express from "express"
import bodyParser from "body-parser";
import usuarioRoutes from "./routes/usuarioRoute.js"
const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use("/api",usuarioRoutes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})

// app.get("/usuarios", async (req,res) => {
//     try {
//         let [results] = await db.query('SELECT * FROM usuarios')
//         res.status(200).send(results)
//     } catch (error) {
//         res.status(500).send("Internal Server Error")
//     }
// })

// app.get("/usuarios/:id", async (req,res) => {
//     try {
//         let {id} = req.params
//         let [results] = await db.query('SELECT * FROM usuarios WHERE id = ?',[id])
//         res.status(200).send(results)
//     } catch (error) {
//         res.status(500).send("Internal Server Error")
//     }
// })

// app.post("/usuarios", async (req,res) => {
//     try {
//         let { nome, email, senha, telefone }  = req.body
//         console.log(nome,email)
//         let [usuario] = await db.query('INSERT INTO usuarios(nome,email,senha,telefone) VALUES(?,?,?,?)',[nome,email,senha,telefone])
//         res.status(201).send({
//             message:"Usuário criado com sucesso"
//         })
//     } catch (error) {
//         res.status(500).send("Internal Server Error")
//     }
// })

// app.delete("/usuarios/:id", async (req,res) => {
//     try {
//         let {id} = req.params
//         let [results] = await db.query('DELETE from usuarios WHERE id = ?',[id])
//         res.status(204).send("Usuario deletado com sucesso")
//     } catch (error) {
//         res.status(500).send("Internal Server Error")
//     }
// })

// app.put("/usuarios/:id", async (req,res) => {
//     try {
//         let {id} = req.params
//         let { nome, email, senha, telefone }  = req.body
//         console.log(nome, email, senha, telefone);
        
//         let [results] = await db.query('UPDATE usuarios SET nome = ?, email = ?, senha =? ,telefone =? WHERE id = ?',[nome, email, senha, telefone,id])
//         if(results.affectedRows === "0") {
//             res.status(404).send("Usuario não encontrado")
//         }
//         res.status(200).send("Usuario atualizado com sucesso")
//     } catch (error) {
//         res.status(500).send("Internal Server Error")
//     }
// })



