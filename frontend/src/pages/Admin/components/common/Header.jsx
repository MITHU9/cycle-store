import React from "react";

export default function Header({ title }) {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg  border-b border-gray-700 ">
      <div className="max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-gray-100 font-semibold text-2xl">{title}</h1>
      </div>
    </header>
  );
}
