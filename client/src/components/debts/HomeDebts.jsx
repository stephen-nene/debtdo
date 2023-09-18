import React from "react";

import { useNavigate } from "react-router-dom";

export const HomeDebt = (props) => {
    const navigate = useNavigate()
    return (
        <div className="-view">

            <button onClick={() => { navigate("/") }}>home</button>
            <p>debts</p>
        </div>
    );
}