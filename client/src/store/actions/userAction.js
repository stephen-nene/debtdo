// UserAction.js

export const login = (userData) => {
    return {
      type: 'LOGIN',
      payload: userData
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };

  export const fetchUser = (user) => ({
    type: 'FETCH_USER',
    payload: user,
  });

