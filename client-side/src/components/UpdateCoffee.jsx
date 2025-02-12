import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, details, category, photo } = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)

        // send data to server
        fetch(`https://m-56-coffee-server.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Server response:', data); // Log the server response
                if (data.modifiedCount) { // Ensure the property name matches the server response
                    Swal.fire({
                        title: "Success!",
                        text: "Your coffee updated Successfully.",
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
            <h1 className="text-3xl mb-5 font-semibold">Update coffee name: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form 1st row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span>Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" name="name" defaultValue={name} className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Available Quantity</span>
                        </label>
                        <label className="">
                            <input type="text" name="quantity" defaultValue={quantity} className="input w-full" />
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
                            <input type="text" name="supplier" defaultValue={supplier} className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Taste</span>
                        </label>
                        <label className="">
                            <input type="text" name="taste" defaultValue={taste} className="input w-full" />
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
                            <input type="text" name="category" defaultValue={category} className="input w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span>Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" defaultValue={details} className="input w-full" />
                        </label>
                    </div>
                </div>


                <div className="mb-8">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span>Photo</span>
                        </label>
                        <label className="">
                            <input type="text" name="photo" defaultValue={photo} className="input w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Now" className="btn border-black btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffee;