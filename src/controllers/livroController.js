import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {//static permite usar os métodos dessa classe sem precisar estanciar uma nova classe
        try{
            const listaLivros = await livro.find({}); //find método do moongose
            res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - 
                falha na requisição`})
        }            
    };

    static async listarLivroPorId(req, res) {//static permite usar os métodos dessa classe sem precisar estanciar uma nova classe
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id); //find método do moongose
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - 
                falha na requisição do livro`})
        }            
    };

    

    static async cadastrarLivros(req, res){
        try{
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro })
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha 
                ao cadastrar livro`});
        }
    }    
     
    
    static async atualizarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body); 
            res.status(200).json({ message: "Livro atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - 
                falha na atualização do livro`})
        }            
    };

    static async excluirLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id); 
            res.status(200).json({ message: "Livro Excluído"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - 
                falha na exclusão do livro`})
        }            
    };


    };

    

export default LivroController;