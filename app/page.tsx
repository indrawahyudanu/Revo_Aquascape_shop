"use client";

import { useState } from "react";

import Header from "../components/Header";
import { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import CartSummary from "../components/CartSummary";
import { CartItem } from "../types/product";


const products: Product[] = [
  { id: 1, name: "Laptop Stand", price: 250000, in_stock: true, stock: 5, is_sale:true },
  { id: 2, name: "Keyboard", price: 450000, in_stock: false, stock: 3 },
  { id: 3, name: "Mouse", price: 150000, in_stock: true, stock: 4 },
  { id: 4, name: "CPU", price: 160000, in_stock: true, stock: 4 },
];


// const cart: CartItem[] = [
//   { product: products[0], quantity: 2 },  // Laptop Stand × 2
//   { product: products[1], quantity: 1 },  // Keyboard × 1
// ];

//fungsi cari produck
export default function Page() {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  

  return (
    <div>
      <Header />
          <div className="p-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white-500 border border-gray-700 rounded px-3 py-2 text-black"
              placeholder="Search products..."
            />
          </div>


          <div className="p-4 flex gap-4 flex-wrap">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>


          {/* <div>
            
             <CartSummary cart={cart} />
          </div> */}

         

      <Footer />
    </div>
  );
}
