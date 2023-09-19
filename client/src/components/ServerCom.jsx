//ServerCom.jsx
import axios from "axios";
import { message } from "antd";

import {login, logout} from "../store/actions/userAction"

const apiUrl = 'https://debtodo-api.onrender.com'

function showMessage(type, content, duration) {
    return message[type]({
      content,
      duration,
    });
  }

  export const handleServerLogin = async (dispatch, formData) => {
      const loadingMessage = showMessage('loading', 'Logging in ...', 0);
    try {
      
      const response = await axios.post(`${apiUrl}/login`, formData);
  
      dispatch(login(response.data));
      message.success('Logged in successfully');
    //   showMessage('success', `Logged in as ${userData.email}`);
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            showMessage('error', error.response.data.error);
          } else {
            showMessage('error', 'Login failed. Please try again later.');
          }
        // console.log(error.response.data)
        // message.error(error.response.data.error)
    }finally{
        loadingMessage();
    }


  };