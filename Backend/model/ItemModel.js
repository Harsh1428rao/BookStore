import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
