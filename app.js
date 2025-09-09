import express from "express"
import bodyParser from "body-parser";
import categoriaRoute from "./routes/categoriaRoute.js"
import marcaRoute from "./routes/marcaRoute.js"

const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use("/api",categoriaRoute)
app.use("/api",marcaRoute)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
