/*consume la conexion a la base de datos*/
import mysql from 'promise-mysql';
import conexion from './conexion';


const pool=mysql.createPool(conexion.database);
pool.getConnection().then(Connection=>{pool.releaseConnection(Connection);
console.log("la base de datos está conectada");
});

export default pool;