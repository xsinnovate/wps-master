import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';
import Button from '..';

const noop = () => { };

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button onPress={noop}>Label</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('calls onPress prop when pressed', () => {
    const spy = jest.fn();
    const instance = renderer.create(<Button onPress={spy}>Label</Button>).root;

    instance.findByType(TouchableHighlight).props.onPress();

    expect(spy).toBeCalled();
  });
});
