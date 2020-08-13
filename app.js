


const { argv }  = require("./config/yargs");
const { crear, getListado, actualizar, borrar, filtrar } = require("./por-hacer/por-hacer");

var colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});


let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        let tarea = crear( argv.descripcion, argv.titulo )
            console.log( tarea );
        break;

    case 'listar':
        let listado = getListado();
        for ( let tarea of listado ) {
            console.log( '===========Por Hacer============='.magenta );
            console.log( (tarea.titulo).blue );
            console.log( (tarea.descripcion) );
            console.log( 'Estado: ', tarea.completado );
            console.log( '=================================='.magenta );
        }
        break;

    case 'actualizar':
        let actualizado = actualizar( argv.descripcion, argv.completado )
        console.log( actualizado );
        break;

    case 'borrar':
        let borrado = borrar( argv.descripcion );
        console.log( borrado );
        break;

    case 'filtrar':
        let filtrados = filtrar( argv.completado );
        console.log( filtrados )
        break;

    default: console.log('comando no reconocido');
}