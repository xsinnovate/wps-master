import React from 'react';
import renderer from 'react-test-renderer';
import Products from '../../../Products.json';
import ProductRow from '..';

describe('<ProductRow />', () => {
  it('renders correctly', () => {
    const tree = renderer.create((
      <ProductRow
        product={{
          ...Products.prod1,
          quantity: 1,
        }}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
