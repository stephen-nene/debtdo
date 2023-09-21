// productReducer.js

const initialState = {
  count: 0,
  darkMode: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {


    case 'ADD_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'SUB_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };

    case 'SET_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };




    default:
      return state;
  }
};

export default productReducer;