const express = require("express")
const cors = require('cors')
const router = require("./router/index.js")

const app = express()
const PORT = 3000
app.use(cors())
app.use("/api", router)

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor iniciado en: http://0.0.0.0:${PORT}`);
  });
  