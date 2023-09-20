import React, { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";

import { handleSave } from "../ServerCom";

const NewDebt = ({ closeModal, date }) => {
    const dispatch = useDispatch()
    const [newDebt, setNewDebt] = useState({
        name: "",
        location: "",
        amount: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        location: "",
        amount: "",
    });

    const validateFields = () => {
        const newErrors = {};

        if (newDebt.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (newDebt.location === "") {
            newErrors.location = "Location is required";
        }

        if (newDebt.amount === "") {
            newErrors.amount = "Amount is required";
        } else if (isNaN(newDebt.amount)) {
            newErrors.amount = "Amount must be a positive number";
        }


        setErrors(newErrors);

        // Return true if there are no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };
    // console.log(date, new Date(date).toLocaleDateString(undefined, {
    //     weekday: "long",
    // }))


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDebt((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", // Clear the error message when input changes
        }));
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-800 w-[80%] p-4 shadow-md rounded-md">
                <div className="header flex items-center justify-between px-4 py-2 bg-gray-700 text-white">
                    <h2 className="text-lg font-semibold">
                        Creating Debt on{" "}
                        <span className="text-rose-600">
                            {new Date(date).toLocaleDateString(undefined, {
                                weekday: "long",
                            })}{" "}
                            {date}
                        </span>
                    </h2>


                    <AiOutlineClose onClick={closeModal}
                        className="text-xl cursor-pointer hover:text-red-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="text-white">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        className={`border bg-transparent rounded-md px-2 py-1 w-full ${errors.name ? "border-red-500" : ""
                            }`}
                        value={newDebt.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && (
                        <p className="text-red-500 mt-1">{errors.name}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="text-white">
                        Location:
                    </label>
                    <select
                        name="location"
                        className={`border rounded-md bg-transparent px-2 py-1 w-full ${errors.location ? "border-red-500" : ""
                            }`}
                        value={newDebt.location}
                        onChange={handleInputChange}
                    >
                        <option className="bg-gray-900 text-center" value="">------ Select a place ------</option>
                        <option className="bg-gray-700" value={0}>Home</option>
                        <option className="bg-gray-700" value={parseInt(1)}>Chura</option>
                        <option className="bg-gray-700" value={2}>Apic</option>
                        <option className="bg-gray-700" value={3}>King'eero</option>
                    </select>
                    {errors.location && (
                        <p className="text-red-500 mt-1">{errors.location}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="amount" className="text-white">
                        Amount:
                    </label>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter amount..."
                        className={`border bg-transparent rounded-md px-2 py-1 w-full ${errors.amount ? "border-red-500" : ""
                            }`}
                        value={newDebt.amount}
                        onChange={handleInputChange}
                    />
                    {errors.amount && (
                        <p className="text-red-500 mt-1">{errors.amount}</p>
                    )}
                </div>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handleSave(dispatch, closeModal, newDebt, validateFields)}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default NewDebt;
