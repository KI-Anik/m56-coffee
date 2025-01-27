/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, details, photo } = coffee

    const handleDelete = id => {
        console.log('Deleting id :', id)
        console.log('before filter :', coffees)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                            console.log('after filter : ', remaining)
                            
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn join-item text-2xl"> <FaEye /> </button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item text-2xl"><CiEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item text-2xl bg-orange-500"> <AiOutlineDelete /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;