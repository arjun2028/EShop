require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();
const importData = async () => {
  try {
    await Product.remove({});
    await Product.insertMany(productsData);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

importData();
