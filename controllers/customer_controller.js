const customer = require("../models/customer");

// controlador que renderiza el form para registrar un cliente
module.exports.render_customer_form = (request, response) => {
    response.render('customer/create');
}

// controlador que inserta un nuevo cliente en la bd

module.exports.create_customer = async(request, response) => {
   const {last_name, name, dni, city, gender} = request.body;
   await customer.create({last_name, name, dni, city, gender});
   response.redirect('/customer')
}

