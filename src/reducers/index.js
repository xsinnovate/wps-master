import { PROMO_CODE } from '../actions';
import Products from '../Products.json';

export const initialState = {
  cart: [{
    id: 'prod1',
    quantity: 1,
  }],
  promo: 0,
  products: Products,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      if (action.code.toUpperCase() === 'DISCOUNT') {
        return {
          ...state,
          promo: 10,
        };
      }

      return state;
    default:
      return state;
  }
}

export const getCartProducts = state => state.cart.map(({ id, quantity }) => ({
  id,
  quantity,
  ...Products[id],
}));

export const getCartTotals = (state) => {
  const products = getCartProducts(state);

  const subtotal = products.reduce((total, product) => (
    total + product.price
  ), 0);
  const savings = products.reduce((total, product) => (
    total + product.pickup
  ), 0);
  const promo = Math.round((subtotal - savings) * state.promo) / 100;
  const taxes = Math.round((subtotal - savings - promo) * 0.09 * 100) / 100;
  const total = subtotal - savings - promo + taxes;

  return {
    subtotal,
    savings,
    promo,
    taxes,
    total,
  };
};
