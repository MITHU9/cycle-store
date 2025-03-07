import { motion } from "framer-motion";
import React from "react";
export default function StatCard({ name, icon: Icon, value, color }) {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg  border-b border-gray-700 ">
      <div className="px-5 py-4">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <h1 className="text-3xl font-semibold mt-1 text-gray-400">{value}</h1>
      </div>
    </motion.div>
  );
}
