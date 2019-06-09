const argv = require('./config/yargs').argv
const colors = require('colors/safe');
const multiplicar = require('./multiplicar/multiplicar')
//const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
//multiplicar.crearArchivo(base)

let comando = argv._[0]

switch(comando) {
    case 'listar':
        console.log('Listar');
        multiplicar.listarTabla(argv.base, argv.limite)
        .catch(e => console.log(e))
    break;
    case 'crear':
        console.log('crear');
        multiplicar.crearArchivo(argv.base, argv.limite)
        .then(fileName => console.log('Archivo: ', colors.green(`"${fileName}"`), " ha sido creado" ))
        .catch(e => console.log(e))
    break;
    default:
        console.log('Comando no reconocido');
    break;
}

//console.log('Base ', argv.base);
//console.log('Limite ', argv.limite);


/*

*/