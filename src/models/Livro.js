import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({ //schema é um objeto de configuração que define a estrutura e as propriedades do documento
    id: {type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String},
    preco: { type: Number},
    paginas: { type: Number},
    autor: autorSchema
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;