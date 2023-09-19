// productReducer.js

const initialState = {
  homeSliders: [],
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_HOME_SLIDERS_SUCCESS':
      return {
        ...state,
        homeSliders: action.payload,
      };

    case 'ADD_PRODUCT_TO_SLIDER_SUCCESS':
      const {
        sliderId, product
      } = action.payload;
      const updatedSlidersArray = state.homeSliders.map(slider => {
        if (slider.id === sliderId) {
          const updatedSliderProducts = [...slider.slider_products, product.data];
          return {
            ...slider,
            slider_products: updatedSliderProducts,
          };
        }
        return slider;
      });

      return {
        ...state,
        homeSliders: updatedSlidersArray,
      };

    case 'DELETE_SLIDER_PRODUCT_SUCCESS':
      const productId = action.payload;
      // Map through homeSliders array and update slider_products for each slider
      const updatedHomeSliders = state.homeSliders.map((slider) => ({
        ...slider,
        slider_products: slider.slider_products.filter(
          (product) => product.id !== productId
        ),
      }));
      return {
        ...state,
        homeSliders: updatedHomeSliders,
      };

    case 'NEW_HOME_SLIDERS_SUCCESS':
      const newSlider = action.payload;
      const sliderExists = state.homeSliders.some(slider => slider.id === newSlider.id);
      if (!sliderExists) {
        return {
          ...state,
          homeSliders: [...state.homeSliders, newSlider],
        };
      }
      return state;

    case 'DELETE_HOME_SLIDER_SUCCESS':
      const deletedSliderId = action.payload;
      const deletedHomeSliders = state.homeSliders.filter(slider => slider.id !== deletedSliderId);
      return {
        ...state,
        homeSliders: deletedHomeSliders,
      };

    case 'FETCH_PRODUCTS_SUCCESS': 
      return {
        ...state,
        products: action.payload,
      };

    case 'DELETE_PRODUCT_SUCCESS':
        const deletedProductId = action.payload;
        const updatedProducts = state.products.filter(product => product.id!== deletedProductId);
      return {
        ...state,
        products: updatedProducts,
      }

      case "ADD_PRODUCT_SUCCESS":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      
    

    default:
      return state;
  }
};

export default productReducer;