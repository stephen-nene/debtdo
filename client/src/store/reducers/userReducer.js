// userReducer.js

const initialState = {
  loggedIn: false,
  userData: null,
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
    case 'FETCH_SUPPLIERS':
      return {
        ...state,
        suppliers: action.payload
      };
    case 'ADD_NEW_SUPPLIER':
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload]
      };
    case 'DELETE_SUPPLIER_SUCCESS':
      return {
        ...state,
        suppliers: state.suppliers.filter((supplier) => supplier.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;