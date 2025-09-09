import express from "express"
import bodyParser from "body-parser";
import categoriaRoute from "./routes/categoriaRoute.js"
import formadePagamentoRoute from "./routes/formadePagamentoRoute.js"

const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use("/api",categoriaRoute)
app.use("/api", formadePagamentoRoute)


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
