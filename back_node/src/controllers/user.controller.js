function funcListar(req, res){
    const users = [{nombre: "Abraham", correo: "romero9804@hotmail.com"}, {nombre: "Juan", correo: "juan@hotmail.com"}]
    return res.status(200).json(users)
}

function funcGuardar(req, res){
    
}

function funcMostrar(req, res){
    
}

function funcModificar(req, res){
    
}

function functEliminar(req, res){
    
}

module.exports = {
    funcListar,
    funcGuardar,
    funcMostrar,
    funcModificar,
    functEliminar
}