import mysql from 'mysql' 
var conectar = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '1234',
 database: 'bd_empresa',
});
conectar.connect( function(err){
    if(err){
        console.error('Error en la conexion ' + err.stack)
        return;
    }
    console.log('conexion exitosa ID:' + conectar.threadId);
});
export {conectar}