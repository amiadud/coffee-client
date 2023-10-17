import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const Products = () => {

    const products = useLoaderData()

    const {user} = useAuth()
    
    const [Data, setData] = useState(products);

       
 const handleDelete = _id => {
    console.log("id",_id);
    fetch(`https://coffee-server-navy.vercel.app/products/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log('objects deleted',data);
        if( data.deletedCount > 0 ) {
            toast.success('Product successfully deleted')
            const remaining = Data.filter(product => product._id !== _id)
            setData(remaining);
        }
    })

}

    return (
        <>
        <div>
            <h2 className='text-6xl mb-4 text-center'>Our Products : {Data.length ? Data.length : <> Not Available</> } </h2>
            {
                user ? <Link className='flex justify-center ' to="/add-products"><button className='bg-yellow-400 py-1 mb-4 px-4 rounded'>Add Coffee</button></Link>: <>s</>
            }
            <div className='grid md:grid-cols-2 gap-4 my-4'>
            {
                Data.map ( product => 
                
                    <div className='flex items-center border border-red-400 rounded-lg'>
                    <div className='flex-1'>
                        <img src={product.phUrl} alt="" />
                    </div>
                    <div className='flex-1 space-y-2'>
                        <h2 className='text-xl'>Name: <small>{product?.coffeName}</small></h2>
                        <h2 className='text-xl'>Chef: <small>{product?.chef}</small></h2>
                        <h2 className='text-xl'>Price: <small>{product?.priceInt}</small></h2>
                    </div>
                    <div className='flex-1 space-y-4 flex flex-col '>
                        <Link className='btn ml-9 w-24 bg-gray-500 text-white' to={`/products-details/${product?._id}`}><h2 >View</h2></Link>
                        <Link  className='btn ml-9 w-24 bg-gray-500 text-white' to={`/update-products/${product?._id}`}><h2>Edit</h2></Link>
                        <h3 onClick={()=> handleDelete(product?._id)} className='btn ml-9 w-24 bg-red-600 text-white '>Delete</h3>
                    </div>
                </div>
                
                
                )
            }
            </div>
            <ToastContainer />
        </div>
        </>
    );
};

export default Products;