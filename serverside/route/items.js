const express = require('express');
const router = express.Router();

const {itemcontrroller,getitem} = require('../controller/controller');

router.post('/api/items',itemcontrroller);
app.get('/api/items', getitem);

module.exports = router;