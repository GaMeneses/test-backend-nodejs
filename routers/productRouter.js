const express = require('express');
const product = require('../controller/productController')
const router = express.Router();

router.get('/', product.getAll);
router.post('/', product.add);
router.get('/:id', product.getId);
router.put('/:id', product.update);
router.delete('/:id', product.Delete);

module.exports = router;