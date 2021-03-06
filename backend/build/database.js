"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*consume la conexion a la base de datos*/
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const conexion_1 = __importDefault(require("./conexion"));
const pool = promise_mysql_1.default.createPool(conexion_1.default.database);
pool.getConnection().then(Connection => {
    pool.releaseConnection(Connection);
    console.log("la base de datos está conectada");
});
exports.default = pool;
