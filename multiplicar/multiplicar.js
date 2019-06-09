const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) =>{
    return new Promise((resolve, reject) => {

        if(!Number(base))
        {
            reject(`La base recibida " ${base} " no es un número`)
            return
        }

        if(base === true)
        {
            reject(`La base fue omitida`)
            return
        }

        console.log(colors.rainbow("===================="));
        console.log(`Tabla del ${base} al ${limite}`);
        console.log(colors.underline("===================="));
        for( i = 0; i<= limite ; i++) {
            console.log(` ${base} * ${i} = ${base*i} \n`);
        }
    })

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base))
        {
            reject(`La base recibida " ${base} " no es un número`)
            return
        }

        if(base === true)
        {
            reject(`La base fue omitida`)
            return
        }

        let data=""

        for( i = 0; i<= limite ; i++) {
            data += (` ${base} * ${i} = ${base*i} \n`);
        }

        fs.writeFile(`tablasArchivos/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject (err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}