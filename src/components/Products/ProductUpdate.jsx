import React from 'react';
import Header from '../Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductUpdate = () => {

  const productData = useLoaderData()

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        // product variable
        const coffeName = form.cname.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const priceInt = parseInt(price)
        const category = form.category.value;
        const details = form.details.value;
        const phUrl = form.purl.value;
        const CoffeData = {coffeName, chef, supplier, taste,priceInt, category, details, phUrl}
        console.log(CoffeData);

        fetch(`https://coffee-server-navy.vercel.app/products/${productData._id}`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(CoffeData)
          })
          .then(res => res.json())
          .then (data => {
            console.log(data);

            if(data.modifiedCount > 0){
              toast.success("Product updated successfully")
            }
            else if(data.modifiedCount == 0){
                toast.warning("Product Already updated")
            }
          })
    }


    return (
        <div className='max-w-7xl mb-3 mx-auto font-fontRancho '>
            <Header></Header>
            <div className='text-left my-5 '>
                <Link className='bg-blend-color-burn' to="/">Back to Home</Link>
            </div>
            <div className=" border outline-none shadow-2xl rounded-lg  ">
  <div className=" flex-col py-2 my-5 ">
    <div className="text-center my-4 ">
      <h1 className="text-5xl font-bold text-center mb-2">Update Coffee Details</h1>
    </div>
    <div className="card  w-full bg-base-100">
      <form onSubmit={handleUpdateProduct} className="card-body">
        <div className='grid grid-cols-2 gap-4'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={productData?.coffeName} placeholder="Enter coffee Name" name='cname' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" defaultValue={productData?.chef} placeholder="Enter coffee chef" name='chef' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" defaultValue={productData?.supplier} placeholder="Enter Coffee Supplier" name='supplier' className="input input-bordered outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" defaultValue={productData?.taste} placeholder="Enter coffee Taste" name='taste' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" defaultValue={productData?.category} placeholder="Enter coffee category" name='category' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" defaultValue={productData?.priceInt}  placeholder="Enter Coffee Price..." name='price' className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" defaultValue={productData?.phUrl} placeholder="Enter Photo URL" name='purl' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea className="textarea textarea-bordered" defaultValue={productData?.details} name='details' placeholder="Emter Coffee Details..."></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D2B48C] capitalize text-lg">Update Coffee</button>
        </div>
      </form>
    </div>
  </div>
</div>
  <Footer></Footer>
  <ToastContainer />
    </div>
    
    );
};

export default ProductUpdate;