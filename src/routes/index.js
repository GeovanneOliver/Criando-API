import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Curso de Node.js"));

    app.use(express.json(), livros, autores);
    //middleware = é utilizado para ter acesso as requisições e respostas da API
//e realizar ações como alteração ou passar informações adicionais
//no caso acima qualquer requisição que seja parcialmente identifical como Json
//vai ser tratado e convertido para Json
};

export default routes;