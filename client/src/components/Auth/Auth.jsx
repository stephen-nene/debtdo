import React from "react";
import axios from "axios"
import { message } from "antd";

export default function Auth(props) {

    const [user, setUser] = React.useState('');

    const handleLogin = (e) => {
        if (!user || user === '') {
            message.error(`Please select a user`);
            return;
        }

        message.info(`Logging in as ${user}`);
    }

    const handleSelectChange = (e) => {
        setUser(e.target.value);
    }

    return (
        <div className="-view">
            <p>Not logged in</p>
            <select name="loginas" id="" onChange={handleSelectChange}>
                <option value="">-- select a user --</option>
                <option value="1">stevo_nene1</option>
                <option value="2">stevo_nene2</option>
                <option value="3">stevo_nene3</option>
                <option value="4">stevo_nene4</option>
            </select>
            <button onClick={e=>handleLogin(e)} >Login</button>
        </div>
    );
}
