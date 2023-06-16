import express from "express"
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
const port = 4000
app.use(bodyParser.urlencoded({ extended: false, limit: '25mb' }))
app.use(bodyParser.json({ limit: '25mb' }))
app.use(morgan("dev"))
app.use(cors())
app.use("/public", express.static("/tmp"))

app.get("/", (_req, res) => res.status(200).json({message: "Hello from root!"}))

app.use(route)

app.set("port", port)

app.listen(port)
  .then(() => console.log("server abierto en puerto", port))
  .catch(error => console.error(error))
