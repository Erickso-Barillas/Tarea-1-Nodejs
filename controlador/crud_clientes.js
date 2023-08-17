import express from "express";
import { conectar } from "../modelo/db_conectar.js"; 

var crud_cliente = {};

crud_cliente.leer = (req, res) => {
    conectar.query('select * from clientes', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error de base de datos');
        } else {
            res.render('clientes/index', { resultado: results });
        }
    });
};
crud_cliente.cud = (req,res) =>{
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id_cliente = req.body.txt_id;
    const Nit = req.body.txt_Nit;
    const Nombres = req.body.txt_Nombres;
    const Apellidos = req.body.txt_Apellidos;
    const Dirección = req.body.txt_Dirección;
    const Telefono = req.body.txt_Telefono;
    const Fecha_Nacimiento = req.body.txt_Fn;
    if (btn_crear){
        conectar.query('insert into clientes set ?', {nit:Nit,nombres:Nombres,apellidos:Apellidos,Dirección:Dirección,Telefono:Telefono,Fecha_Nacimiento:Fecha_Nacimiento},(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
    }
    if (btn_actualizar){

        conectar.query('update clientes set ? where id_clientes = ?',[{nit:Nit,nombres:Nombres,apellidos:Apellidos,Dirección:Dirección,Telefono:Telefono,Fecha_Nacimiento:Fecha_Nacimiento},id_cliente],(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });

    }
    if (btn_borrar){

        conectar.query('delete from clientes where id_clientes = ?',[id_cliente],(error,results)=>{
            if (error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });

    }
} 
export { crud_cliente };
