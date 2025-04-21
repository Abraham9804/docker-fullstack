const express = require("express")
const cors = require('cors')
const router = require("./router/index.js")

const app = express()
const PORT = 3000
app.use(cors())
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log("servidor iniciado en: http://localhost:3000")
})