
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    category: String,
    unit: String,
    cost: Number,
    quantity: Number,
    
});

const InventoryItem = mongoose.model('InventoryItem', inventorySchema);
module.exports = InventoryItem;