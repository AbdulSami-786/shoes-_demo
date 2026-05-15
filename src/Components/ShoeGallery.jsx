import React from "react";
import ProductCard from "./ProductCard";

const ShoeGallery = () => {
  const products = [
    {
      id: 1,
      image: "pro1.jpeg",
      price: "120",
      title: "Miami Hurricanes S2G 26 Textile Spikeless Golf Shoes",
      category: "Men Performance",
      colors: "9",
    },
    {
      id: 2,
      image: "pro2.jpeg",
      price: "120",
      title: "Texas Tech Red Raiders S2G 26 Textile Spikeless Golf Shoes",
      category: "Men Performance",
      colors: "9",
    },
    {
      id: 3,
      image: "pro3.jpeg",
      price: "120",
      title: "Florida State Seminoles S2G 26 Textile Spikeless Golf Shoes",
      category: "Men Performance",
      colors: "9",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ShoeGallery;