import express from "express"
import bodyParser from "body-parser";
import categoriaRoute from "./routes/categoriaRoute.js"
import produtoRoute from "./routes/produtoRoute.js"

const app = express()
const PORT = 3000


app.use(bodyParser.json());

app.use("/api",categoriaRoute)
app.use("/api",produtoRoute)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
