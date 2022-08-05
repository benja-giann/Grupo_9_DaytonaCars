<<<<<<< HEAD
const { application } = require("express");

module.exports = function (req, res, next) {
=======


const funcionesMDW={
 validacionUsuario:(req, res, next)=>{
 
    if (req.session.usuario!=undefined) { 
      console.log("estoy adentro")
      next() 
      }
      res.redirect('/users/login')
},
pasandoinfoVistas:function (req, res, next) {
>>>>>>> 7c963619326a8fae6f1c6907675700f1931311d2
  res.locals.usuario = req.session.usuario;
  next();
},

}

module.exports= funcionesMDW;