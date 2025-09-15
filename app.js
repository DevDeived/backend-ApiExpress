import express from "express";
import bodyParser from "body-parser";
import categoriaRoute from "./routes/categoriaRoute.js"
import marcaRoute from "./routes/marcaRoute.js"
import pedidosRoute from "./routes/pedidosRoute.js";
import promocaoRoute from "./routes/promocaoRoute.js"
import enderecoentregaRoute from "./routes/enderecoentregaRoutes.js"
import formadePagamentoRoute from "./routes/formadePagamentoRoute.js"
import produtoRoute from "./routes/produtoRoute.js"
import transportadoraRoute from "./routes/transportadoraRoute.js"
import usuariosRoute from "./routes/usuariosRoutes.js"
import estoqueRoute from "./routes/estoqueRoute.js"
const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use("/api",categoriaRoute)
app.use("/api",marcaRoute)
app.use("/api",promocaoRoute)
app.use("/api",enderecoentregaRoute)
app.use("/api", formadePagamentoRoute)
app.use("/api",produtoRoute)
app.use("/api",transportadoraRoute)
app.use("/api",estoqueRoute)
app.use("/api",usuariosRoute)


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})


