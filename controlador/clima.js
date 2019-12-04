const axios = require('axios');
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1a19bdfcdcec570cffb6f0e80618253`)
    return resp.data.main.temp;
}

module.exports = {
    getClima

}