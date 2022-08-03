const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5500;
const userMiddleware = require('./middlewares/userMiddleware');

app.use(session({ secret: 'Nuestro mensaje secreto' }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(userMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get("/productos/:idProducto", function(req, res){
    res.send("Bienvenido al detalle del producto" + req.params.idProducto)
});

const indexRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/users');
const productosRouter = require('./routes/productos');
const carrosRouter = require('./routes/carros');

app.use('/', indexRouter);
app.use('/api/productos', productosRouter);
app.use('/users', userRouter);
app.use('/carros', carrosRouter);

app.listen(port, () => console.log('estoy funcionando en el puerto ' + port));
