import React from 'react';
import renderer from 'react-test-renderer';
import { TextInput } from 'react-native';
import Input from '..';

const noop = () => {};

describe('<Input />', () => {
  it('renders correctly', () => {
    const tree = renderer.create((
      <Input
        label="Label"
        onChange={noop}
        value="value"
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onChange prop with new text values', () => {
    const spy = jest.fn();
    const instance = renderer.create((
      <Input
        label="Label"
        onChange={spy}
        value="value"
      />
    )).root;

    instance.findByType(TextInput).props.onChangeText('newValue');

    expect(spy).toBeCalledWith('newValue');
  });
});
