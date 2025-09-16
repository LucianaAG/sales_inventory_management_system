// Controlador general para vistas del sistema
module.exports = {
    // Home
    home: (req, res) => {
        res.render("home.hbs"); // home.hbs dentro de views/
    },

    // Clientes
    customer: {
        create: (req, res) => res.render("customer/create"),
        list: (req, res) => res.render("customer/list")
    },

    // Proveedores
    supplier: {
        create: (req, res) => res.render("supplier/create"),
        list: (req, res) => res.render("supplier/list")
    },

    // Categorías
    category: {
        create: (req, res) => res.render("category/create"),
        list: (req, res) => res.render("category/list")
    },

    // Productos
    product: {
        create: (req, res) => res.render("product/create"),
        list: (req, res) => res.render("product/list")
    },

    // Ventas
    sale: {
        create: (req, res) => res.render("sale/create"),
        list: (req, res) => res.render("sale/list")
    },

    // Detalle de ventas
    sale_detail: {
        create: (req, res) => res.render("sale_detail/create"),
        list: (req, res) => res.render("sale_detail/list")
    }
};

