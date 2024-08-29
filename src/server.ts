import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import { ProductModel } from './modules/product/product.model';

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    const newProduct = new ProductModel({
      name: 'Example Product',
      description: 'This is an example product',
      price: 19.99,
      category: 'Example Category',
      tags: ['example', 'product'],
      variant: [{ type: 'size', value: 'M' }],
      inventory: [{ quantity: 100, inStock: true }],
    });

    await newProduct.save();

    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
