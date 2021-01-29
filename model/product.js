const conn = require('../model/connection');
const { ObjectId } = require('mongodb');

const insert = async(titulo, descricao, preco, categoria) => {

    try {

        const db = await conn();

        const result = await db.collection('produto').insertOne({ titulo, descricao, preco, categoria });
        return result.ops[0];

    } catch (error) {
        return error = { "Error": "Erro ao inserir o produto" };
    }
};

const getAll = async() => {
    try {

        const db = await conn();

        const result = await db.collection('produto').find().toArray();
        return result;

    } catch (error) {
        return error = { "Error": "Erro ao trazer todos os produtos" };
    }
}

const getId = async(id) => {
    try {

        const db = await conn();
        const result = await db.collection('produto').findOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        return error = { "Error": "Erro ao procurar o produto" };
    }
}


const getNameCategory = async(pesquisa) => {
    try {

        const db = await conn();
        const result = await db.collection('produto').findOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        return error = { "Error": "Erro ao procurar o produto" };
    }
}

const update = async(id, body) => {
    try {

        const db = await conn();

        const result = await db.collection('produto').updateOne({ _id: ObjectId(id) }, { $set: { categoria: body.categoria } });
        return result;

    } catch (error) {
        console.log(error);
        return error = { "Error": "Erro ao atualizar o produto" };
    }
}

const Delete = async(id) => {
    try {

        const db = await conn();
        const result = await db.collection('produto').deleteOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        return error = { "Error": "Erro ao Deletar o produto" };
    }
}

module.exports = { insert, getAll, getId, update, Delete, getNameCategory };