const commonOptions = {
    base:{
        demand: true, // El comando base es obligatorio
        alias: 'b'
    },
    limite:{
        alias:'l',
        default: 10
    }
}

const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar',commonOptions)
            .command('crear', 'Crea un archivo con la tabla de multiplicar',commonOptions)
            .help()
            .argv

module.exports = {
    argv
}

/*
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar',{
                base:{
                    demand: true, // El comando base es obligatorio
                    alias: 'b'
                },
                limite:{
                    alias:'l',
                    default: 10
                }
            })
            .command('crear', 'Crea un archivo con la tabla de multiplicar',{
                base:{
                    demand: true, // El comando base es obligatorio
                    alias: 'b'
                },
                limite:{
                    alias:'l',
                    default: 10
                }
            })
            .help()
            .argv



*/