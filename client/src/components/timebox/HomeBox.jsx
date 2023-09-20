import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcPrevious, FcNext } from "react-icons/fc";

import { Navbar } from "../Navbar";
import NewDebt from "../modals/NewDebt"

export const HomeBox = (props) => {
    const [NewDebtModal, setNewDebtModal] = useState(false);
    const [currentDate, setCurrentDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    // console.log(currentDate)


    const handleDate = (operator) => {
        const dateObj = new Date(currentDate);
        dateObj.setDate(dateObj.getDate() + (operator === "-" ? -1 : 1));
        const newDate = dateObj.toISOString().split("T")[0];
        setCurrentDate(newDate);
    };

    const resetToToday = () => {
        setCurrentDate(new Date().toISOString().split('T')[0]);
    };

    const isToday = (someDate) => {
        const today = new Date();
        return (
            someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear()
        );
    };

    const handleInfoButtonClick = () => {
        setNewDebtModal(true)
    }

    const navigate = useNavigate()

    return (
        <div className="text-center -view">
            <Navbar />

            <div className="my-5 date-selector">
                <p className="mb-4">
                    {new Date(currentDate).toLocaleDateString(undefined, {
                        weekday: "long",
                    })}
                </p>
                <div className="dates flex justify-center">
                    <button
                        onClick={() => handleDate("-")}
                        className="px-3 border border-violet-600 hover:border-rose-600 text-white rounded  hover:text-black transition duration-300">
                        <FcPrevious
                            className="cursor-pointer"
                        />
                    </button>
                    <input
                        type="date"
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                        className="mx-2 bg-transparent outline-none border rounded p-1 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={() => handleDate("+")}
                        className="px-3 border border-violet-600 text-white rounded hover:border-rose-600 hover:text-black transition duration-300">
                        <FcNext
                            className="cursor-pointer"
                        />
                    </button>
                </div>

                {!isToday(new Date(currentDate)) && (

                    <button
                        onClick={resetToToday}
                        className="mt-4 py-1.5 px-3 border border-red-500 rounded  hover:border-fuchsia-700 hover:text-fuchsia-700 transition duration-300"
                    >
                        Today
                    </button>
                )}


            </div>

            <p>home box</p>

            {NewDebtModal ? (null) : (
                <button
                    className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleInfoButtonClick}
                >
                    <span className="text-xl mr-2">+</span>
                    New
                </button>
            )}

            {NewDebtModal && (
                <NewDebt
                    date={currentDate}
                    closeModal={() => setNewDebtModal(false)}
                />
            )}
        </div>
    );
}