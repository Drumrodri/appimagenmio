import {Request, Response} from 'express';
import pool from '../database';

class UsuariosController{
    index(req:Request, res:Response){
        res.json({'message': 'estas en usuarios'});
    }

    public async create(req:Request, res:Response){
       await pool.query('INSERT INTO usuarios SET ?', [req.body]);
       res.json({'message': 'se ha insertado correctamente'}); //mensaje que sale por consola cuando se inserta un user 

       

    }

    public async read(req:Request, res:Response){
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);

        res.json(usuarios); // metemos en un objeto json lo que nos devuelve la consulta

    }

    public async update(req:Request, res:Response){
        
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);

    }

    public async delete(req:Request, res:Response){
       
        await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);

    }

    public async readone(req:Request, res:Response){
        
         const usuarios= await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);

         res.json(usuarios);

    }




}

export const usuariosController= new UsuariosController;