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
                        className="w-[300px] h-[300px] mx-auto mb-4"
                    />
                    <h2 className="text-3xl font-semibold mb-4">404 - Page Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        Oops! The page you're looking for does not exist.
                    </p>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        onClick={() => navigate("/")}
                    >
                        Go back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
