const axios = require('axios');
const ubicacion = require('./controlador/ubicacion')
const clima = require('./controlador/clima')
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = (ciudad) => {
    ubicacion.getCiudadLocation(argv.nombre)
        .then(console.log);
    clima.getClima(ubicacion.log, ubicacion.lat)
        .then(console.log);

}
getInfo(argv.nombre)
    .then(console.log);