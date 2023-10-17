import React from 'react';
import Header from '../Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const ProductDetails = () => {
    const productSingle = useLoaderData()
    console.log(productSingle);
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <div className='text-left my-5 '>
                <Link className='bg-blend-color-burn' to="/">Back to Home</Link>
            </div>
            <div className=' w-7/12 mx-auto flex items-center border border-red-400 rounded-lg'>
                    <div className='flex-1'>
                        <img src={productSingle?.phUrl} alt="" />
                    </div>
                    <div className='flex-1 space-y-2'>
                        <h2 className='text-xl'>Name: <small>{productSingle?.coffeName}</small></h2>
                        <h2 className='text-xl'>Chef: <small>{productSingle?.chef}</small></h2>
                        <h2 className='text-xl'>Price: <small>{productSingle?.priceInt} BDT</small></h2>
                    </div>
                </div>
        <Footer></Footer>
        </div>
    );
};

export default ProductDetails;