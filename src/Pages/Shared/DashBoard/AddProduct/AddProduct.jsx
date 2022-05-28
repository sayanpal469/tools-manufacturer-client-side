import React from 'react';
import swal from 'sweetalert';

const AddProduct = () => {

    const addProduct = (e) => {
        e.preventDefault()
        const name = e.target.pName.value;
        const price = e.target.price.value;
        const picture = e.target.picture.value;
        const availableQuantity = e.target.totalItem.value;
        const minQuantity = e.target.minumQuantity.value;
        const description = e.target.productDescription.value;

        const addTools = { name, price, picture, availableQuantity, minQuantity, description}
        console.log(addTools);

        fetch(`https://hidden-sea-29105.herokuapp.com/tools`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addTools)
        })
        .then(res => res.json())
        .then(data => {
            swal("Product added", "Your product is added, check in home", "success");
        })
    }

    return (
        <div className='flex justify-center items-center mt-20'>
            <form onSubmit={addProduct} class="card max-w-lg lg:w-[35%] bg-base-100 shadow-xl h-auto">
                <div class="card-body w-full">
                    <h2 class="font-bold text-center text-4xl mb-5">Add a product</h2>
                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input name='pName' required type="text" placeholder="Enter your product name" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Price per piese</span>
                        </label>
                        <input name='price' required type="number" placeholder="Product price" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Total items</span>
                        </label>
                        <input name='totalItem' required type="number" placeholder="Total quantity" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Minimum order quantity</span>
                        </label>
                        <input name='minumQuantity' required type="number" placeholder="How many order user" class="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Product image</span>
                        </label>
                        <input name='picture' required type="text" placeholder="Product picture" class="input input-bordered w-full max-w-xs" />
                    </div>

                    <div class="form-control w-full max-w-xs mx-auto">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <textarea name='productDescription' required type="text" placeholder="Description" class="input input-bordered h-28 w-full max-w-xs" />
                    </div>

                    <div class="card-actions justify-center px-14">
                        <input type='submit' class="btn btn-warning w-full text-white font-semibold" value='Add' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;