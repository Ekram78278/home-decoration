import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
    const [search, setSearch] = useState('')
   
   
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term ? products.filter(product => product.name.toLocaleLowerCase().includes(term)): products
    
    // implemented search Functionality
 
    return (
    <div>
      <div>
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">
            All Products{" "}
            <span className="text-sm text-gray-500">
              ({searchedProducts.length}) products found
            </span>
          </h1>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input  value={search} onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search Products" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchedProducts.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
