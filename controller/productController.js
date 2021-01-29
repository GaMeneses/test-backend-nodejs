const product = require('../model/product')

const add = async(req, res) => {
    try {
        const { titulo, descricao, preco, categoria } = req.body;

        const result = await product.insert(titulo, descricao, preco, categoria);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
    }
};

const getNameCategory = async(req, res) => {
    try {

        const result = await product.getNameCategory(req.params.search);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
    }
};

const getAll = async(req, res) => {
    try {

        const result = await product.getAll();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
    }
};

const Delete = async(req, res) => {
    try {

        const result = await product.Delete(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
    }
};


//update a categoria do produto
const update = async(req, res) => {
    try {
        const result = await product.update(req.params.id, req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
    }
};


const getId = async(req, res) => {
    try {

        const result = await product.getId(req.params.id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Houve um problema !!' });
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