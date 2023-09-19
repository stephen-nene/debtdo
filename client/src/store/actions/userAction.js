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

  export const fetchSuppliers = (suppliers) => ({
    type: 'FETCH_SUPPLIERS',
    payload: suppliers,
  });

  export const addNewSupplier = (supplier) => ({
    type: 'ADD_NEW_SUPPLIER',
    payload:  supplier ,
  });
  
  export const deleteSupplierSuccess = (supplierId) => ({
    type: 'DELETE_SUPPLIER_SUCCESS',
    payload: supplierId,
  });