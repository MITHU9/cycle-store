import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

import { addProduct } from "../controllers/productController.js";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
});

router.post("/add", addProduct);

export default router;
