const express = require("express");
const path = require("path");
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname,"../", "public")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views" ));

const indexRouter = require('./routes/mainRoutes');
const userRouter = require('./routes/users');
const productosRouter = require('./routes/productos');


app.use("/", indexRouter);
app.use("/api/productos", productosRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log("estoy funcionando en el puerto " + port));
