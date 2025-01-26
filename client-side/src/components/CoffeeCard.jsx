import { AiOutlineDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, photo } = coffee
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
                        <button className="btn join-item text-2xl"><CiEdit /></button>
                        <button className="btn join-item text-2xl"> <AiOutlineDelete /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;