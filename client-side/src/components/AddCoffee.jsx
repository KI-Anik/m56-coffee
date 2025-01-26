const AddCoffee = () => {
    const handleAddCoffee = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        console.log(name,quantity,supplier, taste, category, photo)
    }
    return (
        <div className="bg-[#f4f3f0] p-24">
            <form onSubmit={handleAddCoffee}>
                {/* form 1st row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" id="" className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Available Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" id="" className="input w-full" />
                        </label>
                    </div>
                </div>

                {/* form 2nd row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Supplier</span>
                        </label>
                        <label className="">
                            <input type="text" name="supplier" id="" className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" id="" className="input w-full" />
                        </label>
                    </div>
                </div>

                {/* form 3rd row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Category</span>
                        </label>
                        <label className="">
                            <input type="text" name="category" id="" className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" id="" className="input w-full" />
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span>Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" id="" className="input w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn border-black btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;