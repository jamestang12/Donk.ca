const express = require('express')
const router = express.Router();

const { getItems, createItem, uploadImageForCreateItem } = require('../controllers/items')

router.get('/', getItems)
router.post('/',createItem)
router.post('/image', uploadImageForCreateItem)

module.exports = router;