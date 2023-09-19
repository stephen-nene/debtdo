// userReducer.js

const initialState = {
  loggedIn: false,
  userData: null,
  user: null,
  suppliers: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggedIn: true,
        userData: action.payload
      };
    case 'LOGOUT':
      return {
        loggedIn: false,
        userData: null
      };
    case 'FETCH_USER':
      return {
        loggedIn: true,
        user: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;