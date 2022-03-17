
const fs = require('fs');
require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{ 

    try {
        
        let salida, consola = '';

        
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.yellow} ${base * i}\n`;

        };

        if ( listar ) {
            console.log(`==========================`.green);
            console.log(`    tabla del: ${base}`.cyan    );
            console.log(`==========================`.green);

            console.log(consola);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
        return `tabla-${base}.txt`;
            
    } catch (err) {
        throw err;
    }

}   

module.exports = {
    crearArchivo
} 