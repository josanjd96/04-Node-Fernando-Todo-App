
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripciçon de la tarea por hacer'
};
const completado = {
    demand: true,
    alias: 'c',
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
};
const titulo = {
    alias: 't',
    demand: true,
    desc: 'Nombre del todo por hacer'
}


const argv = require('yargs')

    .command('crear', 'Crear una nueva todo', {
        descripcion,
        titulo
    })
    .command('listar', 'Lista las tareas', {
        listar: {}
    })
    .command('actualizar', 'Actualiza el estado completdo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion,
    })
    .command('filtrar', 'Filtrar por completados o no cmpletados', {
        completado,
    })
    .help()
    .argv;


module.exports = {
    argv,
}