const express = require('express')
const router = express.Router();

const { getItems, createItem, uploadImageForCreateItem, getItemById, getItemByUsername, updateItemById, deleteItemById} = require('../controllers/items')

router.get('/', getItems)
router.post('/',createItem)
router.post('/image', uploadImageForCreateItem)
router.get('/:id', getItemById)
router.get('/user/:username', getItemByUsername)
router.put('/:id', updateItemById)
router.delete('/:id', deleteItemById)

module.exports = router;