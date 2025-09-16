const express = require("express");
const router = express.Router();

// importa al controlador 
const customer_controller = require('../controllers/customer_controller');

// redirige /customer a /customer/create
router.get('/', (req, res) => {
    res.redirect('/customer/create');
});

// ruta para mostrar el formulario de creación de un contacto (usamos siempre GET)

router.get('/create', customer_controller.render_customer_form);

// ruta para registrar un nuevo contacto (usamos siempre POST)

router.post('/create', customer_controller.create_customer);

// exportamos al router
module.exports = router;
