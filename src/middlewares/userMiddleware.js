module.exports = function (req, res, next) {
  res.locals.usuario = req.session.usuario;
  next();
};
