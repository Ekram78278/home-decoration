import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../hooks/useProducts';


const home = () => {

    // const products = useLoaderData()
    const {products, loading, error} = useProducts()
    const featuredProduct = products.slice(0,6)
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <Link  className='btn btn-outline' to='/products'> See All Products </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                featuredProduct.map( product =>(
                    <ProductCard key={product.id} product={product} ></ProductCard>
                 ) )
            } 
            </div>
        </div>
    );
};

export default home;