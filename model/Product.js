const conn = require('./connection');
const { ObjectId } = require('mongodb');

//Registra um produto
const insert = async(title, description, price, category) => {

    try {

        const db = await conn();
        const result = await db.collection('product').insertOne({ title, description, price, category });
        return result.ops[0];

    } catch (error) {
        return error = { "Error": "wrong insert product" };
    }
};

// Retorna todos os produtos
const getAll = async() => {
    try {

        const db = await conn();

        const result = await db.collection('product').find().toArray();
        return result;

    } catch (error) {
        return error = { "Error": "wrong getAll product" };
    }
}

//Retorna um produto dado o ID
const getId = async(id) => {
    try {

        const db = await conn();
        const result = await db.collection('product').findOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        return error = { "Error": "wrong find product" };
    }
}


const getNameCategory = async({ name, category }) => {
    try {

        const db = await conn();

        const result = await db.collection('product').find({ $or: [{ title: name }, { category: category }] }).toArray();
        return result;

    } catch (error) {
        return error = { "Error": "wrong find by name or category" };
    }
}

// Atualiza a Categoria dado o ID do produto
const update = async(id, body) => {
    try {
        const db = await conn();

        const result = await db.collection('product').updateOne({ _id: ObjectId(id) }, { $set: { categoria: body.categoria } });
        return result;

    } catch (error) {
        console.log(error);
        return error = { "Error": "wrong update product" };
    }
}

// Atualiza o produto dado o ID
const updateProduct = async(id, body) => {
    try {

        const db = await conn();
        const result = await db.collection('product').updateOne({ _id: ObjectId(id) }, { $set: body });
        return result;

    } catch (error) {
        console.log(error);
        return error = { "Error": "wrong update product" };
    }
}

// Deleta um produto dado o ID
const Delete = async(id) => {
    try {

        const db = await conn();
        const result = await db.collection('product').deleteOne({ _id: ObjectId(id) });
        return result;

    } catch (error) {
        return error = { "Error": "wrong delete product" };
    }
}

module.exports = { insert, getAll, getId, update, Delete, getNameCategory, updateProduct };