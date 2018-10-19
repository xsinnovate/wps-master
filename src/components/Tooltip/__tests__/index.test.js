import React from 'react';
import renderer from 'react-test-renderer';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Tooltip from '..';

const content = <Text>Text</Text>;

describe('<Tooltip />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Tooltip text="Tip">{content}</Tooltip>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display modal when pressed', () => {
    const instance = renderer.create(<Tooltip text="Tip">{content}</Tooltip>).root;

    instance.findByType(TouchableHighlight).props.onPress();

    expect(instance.findByType(Modal).props.visible).toBe(true);
  });

  it('should hide modal when overlay pressed', () => {
    const instance = renderer.create(<Tooltip text="Tip">{content}</Tooltip>).root;

    instance.findByType(TouchableHighlight).props.onPress();
    instance.findByType(TouchableWithoutFeedback).props.onPress();

    expect(instance.findByType(Modal).props.visible).toBe(false);
  });
});
