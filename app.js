const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.red(archivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}