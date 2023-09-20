//ServerCom.jsx
import axios from "axios";
import { message } from "antd";

import { login, logout } from "../store/actions/userAction"
// import { fetchDebtsSuccess, updateDebtSuccess, deleteDebtSuccess, addNewDebtSuccess } from './store/actions/debtAction'


const apiUrl = 'http://127.0.0.1:3000'
// const apiUrl = 'https://debtodo-api.onrender.com'

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
            showMessage('error', 'Login failed. Please try again .', 3);
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            showMessage('error', error.response.data.error);
        } else {
            showMessage('error', 'server error. Please try again later.');
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
            setTimeout(() => { navigate('/login'); }, 0)
        } else {
            showMessage('error', 'Login failed. Please try again later.');
        }
    } finally {
        loadingMessage();
    }
}

export const handleFetchDebts = (dispatch) => {
    const loadingMessage = message.loading({ content: 'Fetching debts...', duration: 0 });

    axios.get(`${endpoint}/debts`)
        .then((response) => {
            // console.log(response.data)
            dispatch(fetchDebtsSuccess(response.data));
            message.success("Fetched data");
        })
        .catch((error) => {
            message.error("Error fetching data");
            console.error('Error fetching data:', error);
        })
        .finally(() => {
            loadingMessage();
        });
};

export const handleSave = (dispatch, closeModal, newDebt, validateFields) => {
    const loadingMessage = message.loading({ content: 'Saving debts...', duration: 0 });
    const isValid = validateFields();

    if (isValid) {
        axios.post(`${endpoint}/debts`, { debt: newDebt })
            .then((r) => {
                dispatch(addNewDebtSuccess(r.data))
                closeModal()
            })
            .catch((e) => {
                console.error("error:", e)
            })
            .finally(() => {
                loadingMessage()
            })
    }
};

export const handleUpdate = (dispatch, closeModal, editableFields, debt) => {
    const loadingMessage = message.loading({ content: `Updating debt...${debt.id}`, duration: 0 });
    axios.put(`${endpoint}/debts/${debt.id}`, editableFields)
        .then((response) => {
            dispatch(updateDebtSuccess(response.data))
            closeModal()
            message.success("Debt updated successfully");
        })
        .catch((error) => {
            message.error(`Error updating debt: ${error.message}`);
            console.error('Error updating debt:', error);
        })
        .finally(() => {
            loadingMessage();
        })
};

export const handleDelete = (dispatch, closeModal, debt) => {
    const loadingMessage = message.loading({ content: `deleting debt...${debt.id}`, duration: 0 });
    axios.delete(`${endpoint}/debts/${debt.id}`)
        .then((response) => {
            message.success({ content: `Debt deleted`, duration: 2 });
            dispatch(deleteDebtSuccess(debt.id));
            closeModal()
        })
        .catch((error) => {
            message.error({ content: `Error deleting debt: ${error.message}`, duration: 3 });
            console.error('Error deleting debt:', error);
        })
        .finally(() => {
            loadingMessage();
        })
}

