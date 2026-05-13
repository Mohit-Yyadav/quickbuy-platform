const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear Old Data
    await User.deleteMany();
    await Product.deleteMany();

    // Create Admin User
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Mohit@123', salt);

    await User.create({
      name: 'Mohit Yadav',
      email: 'admin@quickbuy.com',
      password: hashedPassword,
      role: 'admin'
    });

    // Product Data
    const products = [
      {
        name: 'Apple iPhone 15 Pro',
        description:
          'Experience the power of Apple A17 Pro chip with stunning camera quality and titanium design.',
        price: 149999,
        category: 'Electronics',
        stock: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.9,
        numReviews: 125
      },

      {
        name: 'Gaming RGB Laptop',
        description:
          'High-performance gaming laptop with RTX graphics and ultra-fast refresh rate display.',
        price: 89999,
        category: 'Electronics',
        stock: 7,
        imageUrl:
          'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.7,
        numReviews: 86
      },

      {
        name: 'Wireless Bluetooth Headphones',
        description:
          'Premium sound quality with active noise cancellation and long battery life.',
        price: 5999,
        category: 'Accessories',
        stock: 25,
        imageUrl:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.8,
        numReviews: 210
      },

      {
        name: 'Smart Watch Series X',
        description:
          'Track fitness, heart rate, calls, and notifications with stylish design.',
        price: 7999,
        category: 'Wearables',
        stock: 18,
        imageUrl:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.6,
        numReviews: 98
      },

      {
        name: 'Nike Air Sneakers',
        description:
          'Comfortable and stylish sneakers perfect for casual and sports wear.',
        price: 4999,
        category: 'Footwear',
        stock: 35,
        imageUrl:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.5,
        numReviews: 174
      },

      {
        name: 'Modern Office Chair',
        description:
          'Ergonomic office chair with lumbar support for maximum comfort.',
        price: 10999,
        category: 'Furniture',
        stock: 10,
        imageUrl:
          'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.4,
        numReviews: 54
      },

      {
        name: 'Canon DSLR Camera',
        description:
          'Professional DSLR camera with ultra HD video recording and powerful zoom.',
        price: 65999,
        category: 'Electronics',
        stock: 6,
        imageUrl:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.9,
        numReviews: 112
      },

      {
        name: 'Premium Hoodie',
        description:
          'Soft cotton hoodie with modern fit and premium fabric quality.',
        price: 1999,
        category: 'Clothing',
        stock: 40,
        imageUrl:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
        ratings: 4.3,
        numReviews: 67
      }
    ];

    // Insert Products
    await Product.insertMany(products);

    process.exit();

  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();