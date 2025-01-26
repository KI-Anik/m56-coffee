/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee

    const handleDelete = id => {
        console.log(id)

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