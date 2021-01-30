const product = require('../model/Product')


// adiciona um produto 
const add = async(req, res) => {
    try {
        const { title, description, price, category } = req.body;

        const result = await product.insert(title, description, price, category);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong' });
    }
};

const getNameCategory = async(req, res) => {
    try {
        const result = await product.getNameCategory(req.query);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong Name or Category !!' });
    }
};

// Retorna todos os produtos
const getAll = async(req, res) => {
    try {

        const result = await product.getAll();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong !!' });
    }
};

// deleta um produto
const Delete = async(req, res) => {
    try {

        const result = await product.Delete(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong !!' });
    }
};


//Atualiza a categoria do produto
const update = async(req, res) => {
    try {
        const result = await product.update(req.params.id, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong !!' });
    }
};

// Retorna um produto dado o ID
const getId = async(req, res) => {
    try {

        const result = await product.getId(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'wrong !!' });
    }
};
module.exports = {
    add,
    getAll,
    Delete,
    update,
    getId,
    getNameCategory

};