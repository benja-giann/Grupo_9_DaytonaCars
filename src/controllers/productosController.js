const router = require("../routes/mainRoutes");

let productosController = {
    listado: function(req, res) {res.send ("vistado de listado")},
    crear: function(req, res) {res.send("creacion de productos")},
    detalle: function(req, res){
        res.send("Bienvenidos al detalle del producto" + req.params.idProducto);
    },
    detalleComentarios: function(req, res) {
        if (req.params.idComentario == undefined){
            res.send("Bienvenidos a los comentarios del producto" + req.params.idProducto );
        }else{
            res.send ("Bienvenidos a los comentarios del producto" + req.params.idProducto + "y estas enfoncado en el comentario" + req.params.idComentario);
        } 
    }
}

module.exports = productosController;