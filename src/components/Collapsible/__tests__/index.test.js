import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';
import Collapsible from '..';

describe('<Collapsible />', () => {
  it('renders correctly', () => {
    const tree = renderer.create((
      <Collapsible label="Label">
        Content
      </Collapsible>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('expands when label is pressed', () => {
    const rendered = renderer.create((
      <Collapsible label="Label">
        Content
      </Collapsible>
    ));
    const instance = rendered.root;

    instance.findByType(TouchableHighlight).props.onPress();

    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('displays labelHide prop when expanded', () => {
    const rendered = renderer.create((
      <Collapsible
        label="Label"
        labelHide="Hide"
      >
        Content
      </Collapsible>
    ));
    const instance = rendered.root;

    instance.findByType(TouchableHighlight).props.onPress();

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
