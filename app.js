const express = require('express');
const app = express();
require("dotenv").config();
const session = require("express-session");
const flash = require("connect-flash");

// Handlebars
const { create } = require("express-handlebars");
const home_controller = require("./controllers/home_controller");

const customer_routes = require("./routes/customer_routes");

// Configuración Handlebars
const handlebars_instance = create({
  extname: ".hbs",
  defaultLayout: "main"
});
app.engine(".hbs", handlebars_instance.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.COD_ENCRIPTACION,
  resave: false,
  saveUninitialized: false,
  name: "secret-name",
  cookie: { expires: 600000 }
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.varEstiloMensaje = req.flash("varEstiloMensaje");
  res.locals.varMensaje = req.flash("varMensaje");
  next();
});
app.use(express.static(__dirname + "/assets"));

// Rutas home
app.get("/", home_controller.home);

// Rutas clientes
app.use("/customer", customer_routes);

// Sincronización BD
const { con_sequelize, ensureDatabase } = require("./database/conexion_mysql_db");
(async () => {
  try {
    await ensureDatabase();
    await con_sequelize.sync();
    console.log("✅ Base de datos y tablas listas");

    app.listen(process.env.PORT, () => {
      console.log("🚀 Servidor corriendo en el puerto: " + process.env.PORT);
    });
  } catch (error) {
    console.error("❌ Error al inicializar la BD:", error);
  }
})();