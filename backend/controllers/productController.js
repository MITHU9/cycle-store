import multer from "multer";
import Product from "../model/Product.js";

const upload = multer({ dest: "uploads/" });
const addProduct = async (req, res) => {
  try {
    upload.single("photo")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: "File upload failed" });
      }

      const { title, description, price } = req.body;
      const imageUrl = req.file ? req.file.path : null;

      const product = new Product({
        title,
        description,
        price,
        imageUrl,
      });
      console.log(product);
      await product.save();
      res.status(201).json(product);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.deleteOne({ _id: req.params.id });

    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addProduct, deleteProduct, getProducts };
