import { applyPromoCode } from '../../actions';
import reducer, { initialState, getCartProducts, getCartTotals } from '..';

/**
 * NOTE: Snapshot is a shortcut. One could also be more explicit, e.g.
 *
 * expect(reducer(initialState, applyPromoCode('DISCOUNT'))).toEql({
 *   ...initialState,
 *   promo: 10,
 * });
 */

describe('rootReducer', () => {
  it('should have initial cart state', () => {
    expect(reducer(initialState, {})).toMatchSnapshot();
  });

  it('should add 10% discount if promo code DISCOUNT used', () => {
    expect(reducer(initialState, applyPromoCode('DISCOUNT'))).toMatchSnapshot();
  });

  it('should not apply discount for other promo codes', () => {
    expect(reducer(initialState, applyPromoCode('INVALID'))).toMatchSnapshot();
  });
});

describe('getCartProducts()', () => {
  it('should return the array of products in cart with details', () => {
    expect(getCartProducts(initialState)).toMatchSnapshot();
  });
});

describe('getCartTotals()', () => {
  it('should return an object with the calculated cart totals', () => {
    expect(getCartTotals(initialState)).toMatchSnapshot();
  });
});
