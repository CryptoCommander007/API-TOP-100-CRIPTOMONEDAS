const axios = require('axios');
const fs = require('fs');

async function fetchTop100Cryptocurrencies() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=clp&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        // Guardar el resultado en un archivo JSON con formato ordenado
        fs.writeFileSync('top100_cryptocurrencies.json', JSON.stringify(response.data, null, 2));
        
        console.log('Datos guardados en top100_cryptocurrencies.json');
    } catch (error) {
        console.error('Error al consultar la API:', error);
    }
}

// Llamar a la función para obtener y guardar los datos
fetchTop100Cryptocurrencies();
