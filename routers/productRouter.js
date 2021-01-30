const express = require('express');
const product = require('../controller/productController')
const router = express.Router();

router.put('/filter', product.updateProduct);
router.get('/filter', product.getNameCategory);
router.get('/', product.getAll); // Rota para obter todos produtos
router.post('/', product.add); // Rota para adicionar um produto
router.get('/:id', product.getId); // Rota para obter um produto pelo ID
router.put('/:id', product.update); // Rota para atualizar um produto(Categoria) dado o ID
router.delete('/:id', product.Delete); // Rota para deletar um produto dado o ID


module.exports = router;