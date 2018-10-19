import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import { Promo } from '..';

const noop = () => {};

describe('<Promo />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Promo applyPromoCode={noop} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('calls applyPromoCode function with value on submit', () => {
    const spy = jest.fn();
    const instance = renderer.create(<Promo applyPromoCode={spy} />).root;

    instance.findByType(Input).props.onChange('DISCOUNT');
    instance.findByType(Button).props.onPress();

    expect(spy).toBeCalledWith('DISCOUNT');
  });
});
