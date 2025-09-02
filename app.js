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
