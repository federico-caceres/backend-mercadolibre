const mercadolibreCtrl = {};
const axios = require('axios');

mercadolibreCtrl.searchProducts = async (req, res) => {
    const text = req.query.text;
    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${text}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al obtener información del servidor.'});
    }
};

mercadolibreCtrl.viewProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al obtener información del servidor.'});        
    }
}

module.exports = mercadolibreCtrl;