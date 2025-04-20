const express = require("express")
const router = require("./router/index.js")

const app = express()
const PORT = 3000
app.use("/api", router)

app.listen(PORT, ()=>{
    console.log("servidor iniciado en: http://localhost:3000")
})