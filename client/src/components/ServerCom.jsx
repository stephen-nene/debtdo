//ServerCom.jsx
import axios from "axios";
import { message } from "antd";

import { login, logout } from "../store/actions/userAction"

// const apiUrl = 'http://127.0.0.1:3000'
const apiUrl = 'https://debtodo-api.onrender.com'

function showMessage(type, content, duration) {
    return message[type]({
        content,
        duration,
    });
}

export const handleServerLogin = async (dispatch, formData, navigate) => {
    const loadingMessage = showMessage('loading', 'Logging in ...', 0);
    try {
        const response = await axios.post(`${apiUrl}/login`, formData);
        // const response = await axios.post(`/api/login`, formData);
        if (response.status == 200) {
            dispatch(login(response.data));
            message.success('Logged in successfully');
            navigate('/');
        } else {
            showMessage('error', 'Login failed. Please try again later.', 3);
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            showMessage('error', error.response.data.error);
        } else {
            showMessage('error', 'Login failed. Please try again later.');
        }
    } finally {
        loadingMessage();
    }
};

export const handleGetCurrentUser = async (dispatch, navigate) => {
    const loadingMessage = showMessage('loading', 'Getting current user ...', 0);
    try {
        const response = await axios.get(`${apiUrl}/me`);
        // const response = await axios.get(`/api/me`);
        showMessage('success', 'current user fetched successfully', 3);
        dispatch(login(response.data));
        navigate('/');
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            showMessage('error', error.response.data.error + ' please login');
            setTimeout(() => { navigate('/login'); }, 5000)
        } else {
            showMessage('error', 'Login failed. Please try again later.');
        }
    } finally {
        loadingMessage();
    }
}

