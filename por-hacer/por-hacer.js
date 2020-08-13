

const fs = require('fs');


let listadoPorHacer = []

let guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer )
    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) {
            throw new Error( err )
        }
    })
    return listadoPorHacer;
};

let cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch ( err ) {
        listadoPorHacer = [];
    }

};

let crear = ( descripcion, titulo ) => {

    cargarDB();

    let porHacer = {
        titulo,
        descripcion,
        completado: false
    }
    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

};

let getListado = () => {

    cargarDB();
    return listadoPorHacer;

};

let actualizar = ( descripcion, completado = true ) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return 'Se ha conseguido actualizar con exito';
    } else {
        return 'No se ha conseguido actualizar';
    }

};

let borrar = ( descripcion ) => {

    cargarDB()
    // --------------------FORMA DE HACERLO JOSE-------------------------------
    // let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    //
    // if ( index >= 0 ) {
    //     listadoPorHacer.splice(index, 1);
    //     guardarDB()
    //     return 'Se ha conseguido eliminar con exito';
    // } else {
    //     return 'No se ha conseguido eliminar'
    // }
    // ---------------------FORMA DE HACERLO PROFESOR---------------

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );

    if ( listadoPorHacer.length === nuevoListado.length ) {
        return 'No se ha conseguido eliminar'
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB(  );
        return 'Se ha conseguido eliminar con exito'
    }
};

let filtrar = ( completado ) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.completado === completado )
    return listadoPorHacer = nuevoListado;


};



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtrar
}