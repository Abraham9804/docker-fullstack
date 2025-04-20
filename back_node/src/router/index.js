const express = require("express")
const userController = require("./../controllers/user.controller")
const Route = express.Router()

Route.get("/user", userController.funcListar)
Route.post("/user", userController.funcGuardar)
Route.get("/user/:id", userController.funcMostrar)
Route.put("/user/:id", userController.funcModificar)
Route.delete("/user/:id", userController.functEliminar)

module.exports = Route