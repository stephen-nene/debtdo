// productsAction.js

export const fetchHomeSlidersSuccess = (homeSliders) => ({
  type: 'FETCH_HOME_SLIDERS_SUCCESS',
  payload: homeSliders,
});

export const addProductToSliderSuccess = (sliderId, product) => ({
  type: 'ADD_PRODUCT_TO_SLIDER_SUCCESS',
  payload: { sliderId, product },
});

export const deleteSliderProductSuccess = (productId) => ({
  type: 'DELETE_SLIDER_PRODUCT_SUCCESS',
  payload: productId,
});

export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products,
});

export const newHomeSlidersSuccess = (homeSlider) => ({
  type: 'NEW_HOME_SLIDERS_SUCCESS',
  payload: homeSlider,
})

export const deleteProductSuccess = (productId) => ({
  type: 'DELETE_PRODUCT_SUCCESS',
  payload: productId,
})

export const addProductSuccess = (product) => ({
  type: 'ADD_PRODUCT_SUCCESS',
  payload: product,
})



