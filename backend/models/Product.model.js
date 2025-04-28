import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter product name']
  },
  price: {
    type: Number,
    required: [true, 'Please enter product price']
  },
  image: {
    type: String,
    required: [true, 'Please enter product image']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;