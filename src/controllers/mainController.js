
const productos = require('../../data/productos.json');



const controller = {
home: (req, res) => {        
        return res.render("home");        
    },
    detalle: (req, res) => {
        return res.render("detalle");
    },
    detalle2: (req, res) => {
        return res.render("detalle2", {productos});
    },
    detalle3: (req, res) => {
        return res.render("detalle3");
    },
    detalle4: (req, res) => {
        return res.render("detalle4");
    },
    detalle5: (req, res) => {
        return res.render("detalle5");
    },
    detalle6: (req, res) => {
        return res.render("detalle6");
    },
    detalle7: (req, res) => {
        return res.render("detalle7");
    },
    detalle8: (req, res) => {
        return res.render("detalle8");
    },
    detalle9: (req, res) => {
        return res.render("detalle9");
    },

    pago: (req, res)=> {
        return res.render("pago");
    },

    carrito: (req, res) => {
        return res.render("carrito");
    },
    servicios: (req, res) => {
        return res.render("servicios");
    },
    productos: (req, res) => {
        return res.render("productos", {productos});
    },
    crearProductos: (req, res) => {
        return res.render('crear');
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    },
}



module.exports = controller;