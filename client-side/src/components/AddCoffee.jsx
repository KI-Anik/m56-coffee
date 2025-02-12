import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)


        // send data to server
        fetch('https://m-56-coffee-server.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Server response:', data); // Log the server response
                if (data.insertedId) { // Ensure the property name matches the server response
                    Swal.fire({
                        title: "Success!",
                        text: "Your coffee has been added.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an issue adding your coffee.",
                        icon: "error"
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: "Error!",
                    text: "There was an issue adding your coffee.",
                    icon: "error"
                });
            });
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