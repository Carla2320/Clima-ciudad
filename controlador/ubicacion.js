const axios = require('axios');
const getCiudadLocation = async(nombre) => {


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        timeout: 1000,
        headers: { 'X-RapiAPI-Key': '14463c5c7emsh93cb7d52017a2d2p1cc57ejsn8232c51d51f3' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados ${ciudad}`);

    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return { name, lat, lon }
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Result[0]);
    //     }).catch(err => {
    //         console.log('ERROR', err);
    //     });
}


module.exports = {
    getCiudadLocation,
    lat,
    lon

}