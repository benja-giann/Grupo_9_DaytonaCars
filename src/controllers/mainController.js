const controller = {
    home: (req, res) => {
        return res.render("home");
    },
    detalle: (req, res) => {
        return res.render("detalle");
    },
    carrito: (req, res) => {
        return res.render("carrito");
    },
    servicios: (req, res) => {
        return res.render("servicios");
    },
    productos: (req, res) => {
        return res.render("productos");
    },
    ayuda: (req, res) => {
        return res.render("ayuda");
    },
}

module.exports = controller;