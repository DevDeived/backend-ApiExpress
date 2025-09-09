import express from "express"
import bodyParser from "body-parser";
import categoriaRoute from "./routes/categoriaRoute.js"
import transportadoraRoute from "./routes/transportadoraRoute.js"

const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use("/api",categoriaRoute)
app.use("/api",transportadoraRoute)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
