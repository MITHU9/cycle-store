import axios from "axios";
import { Edit3, Trash2, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
          setAllProducts(allProducts.filter((product) => product._id !== id));
        }
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  // Open modal and set selected product data
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle input changes
  const handleChange = (e) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
  };

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/products/${selectedProduct._id}`,
        selectedProduct
      )
      .then(() => {
        setAllProducts(
          allProducts.map((product) =>
            product._id === selectedProduct._id ? selectedProduct : product
          )
        );
        closeModal();
      })
      .catch((err) => {
        console.error("Error updating product:", err);
      });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="flex flex-col items-center justify-center mt-9 relative overflow-x-auto shadow-md sm:rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-3">
          Manage Products
        </h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sl No
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {product.title}
                </td>
                <td className="px-6 py-4">{product.description || "N/A"}</td>
                <td className="px-6 py-4">{product.price} BDT</td>
                <td className="px-6 py-4 flex gap-3">
                  <Link
                    onClick={() => openModal(product)}
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <Edit3 className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded ${
              currentPage === 1
                ? "bg-emerald-600 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" p-6 rounded-lg shadow-lg bg-indigo-950 max-w-xl w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Edit Product</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleUpdate} className="mt-4 space-y-4">
              <div>
                <label className="block text-white mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={selectedProduct.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Description</label>
                <textarea
                  name="description"
                  value={selectedProduct.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
