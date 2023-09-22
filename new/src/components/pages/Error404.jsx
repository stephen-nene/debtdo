import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex w-full -view">
            <div className="w-full text-center">
                <div className="p-6 bg-gray-30 shadow-md rounded-md">
                    <img
                        src="https://bitly.com/static/graphics/meditation.png"
                        alt="Not Found"
                        className="w-[250px] h-[250px] mx-auto mb-4"
                    />
                    <h2 className="text-rose-500 text-3xl font-semibold mb-4">404 - Page Not Found</h2>
                    <p className="text-yellow-600 mb-6">
                        Oops! The page you're looking for does not exist.
                    </p>
                    <button
                        className="bg-gradient-to-r from-rose-900 to-rose-500 hover:from-rose-600 hover:to-rose-700 text-white py-2 px-4 rounded-lg "
                        onClick={() => navigate("/")}
                    >
                        Go back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
