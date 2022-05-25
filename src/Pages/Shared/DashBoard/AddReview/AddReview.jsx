import React from 'react';

const AddReview = () => {
    const handelSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const rating = e.target.rating.value;
        const picture = e.target.picture.value;
        const comment = e.target.comment.value;

        const reviewInfo = {name, rating, picture, comment}

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewInfo)
            })
            .then(res => res.json())
            .then(data => {
                alert('Review Added')
                console.log(data);
            })
    }
    return (
        <div className='flex justify-center items-center mt-20'>
            <form onSubmit={handelSubmit} class="card max-w-lg lg:w-[35%] bg-base-100 shadow-xl h-auto">
                    <div class="card-body w-full">
                        <h2 class="font-bold text-center text-4xl mb-5">Add a review</h2>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Please enter your name</span>
                            </label>
                            <input  name='name' required type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Please type 1 to 5</span>
                            </label>
                            <input name='rating' required type="number" placeholder="Add Review" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Add your any photo link</span>
                            </label>
                            <input name='picture' required type="text" placeholder="Your picture" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="form-control w-full max-w-xs mx-auto">
                            <label class="label">
                                <span class="label-text">Comment</span>
                            </label>
                            <textarea name='comment' required type="text" placeholder="Comment" class="input input-bordered h-28 w-full max-w-xs" />
                        </div>

                        <div class="card-actions justify-center px-14">
                            <input type='submit' class="btn btn-warning w-full text-white font-semibold" value='Add' />
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default AddReview;