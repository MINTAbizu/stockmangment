const itemcontrroller= async (req, res) => {
    const newItem = new InventoryItem(req.body);
    await newItem.save();
    res.json(newItem);
}


const getitem=async (req, res) => {
    const items = await InventoryItem.find();
    res.json(items);
}
module.exports={itemcontrroller,getitem};
