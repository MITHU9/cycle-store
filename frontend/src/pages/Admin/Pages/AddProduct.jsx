import axios from "axios";
import { FileText, ShoppingCart, Text, Upload } from "lucide-react";
import React, { useState } from "react";
import taka from "../../../assets/images/taka.png";
const AddProduct = () => {
  const handleAddReview = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const reviewData = {
      photo,
      title,
      review,
      rating,
      year,
      genre,
      email,
      username,
    };
    console.log(reviewData);

    // fetch("https://chill-gamer-server-nu.vercel.app/reviews", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(reviewData),
    // })
  };
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const productData = Object.fromEntries(formData.entries());
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const photo = e.target.photo.files[0].name;

    const productData = {
      title,
      description,
      price,
      photo,
    };
    console.log(productData);

    axios
      .post("http://localhost:5000/api/products/add", productData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Product</h1>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddProduct} className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <label className="cursor-pointer flex flex-col items-center justify-center w-full border border-dashed border-gray-400 rounded-lg p-4 bg-gray-100 hover:bg-gray-200">
              <Upload className="w-10 h-10 text-gray-600 mb-2" />
              <span className="text-sm text-gray-600">
                Click to upload product image
              </span>
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 w-32 h-32 object-cover rounded-lg border"
              />
            )}
          </div>

          <div className="relative">
            <Text className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              required
              className="pl-10 w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="relative">
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <textarea
              name="description"
              rows="3"
              placeholder="Product Description"
              required
              className="pl-10 w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <div className="relative">
            <img
              src={taka}
              className="absolute ml-1 top-1/2 transform -translate-y-1/2 w-8 text-gray-500"
            />
            <input
              type="number"
              name="price"
              placeholder="Price (BDT)"
              required
              className="pl-10 w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            <ShoppingCart className="mr-2" /> Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
