import React from 'react';
import renderer from 'react-test-renderer';
import Products from '../../../Products.json';
import { Summary } from '..';

describe('<Summary />', () => {
  it('renders correctly', () => {
    const tree = renderer.create((
      <Summary
        products={[{
          ...Products.prod1,
          id: 'prod1',
          quantity: 1,
        }]}
        subtotal={100}
        savings={10}
        promo={0}
        taxes={10}
        total={100}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders promo discount line if provided', () => {
    const tree = renderer.create((
      <Summary
        products={[{
          ...Products.prod1,
          id: 'prod1',
          quantity: 1,
        }]}
        subtotal={100}
        savings={10}
        promo={10}
        taxes={10}
        total={90}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
