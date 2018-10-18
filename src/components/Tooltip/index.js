import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import {
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import styles from './styles';

export default class Tooltip extends PureComponent {
  state = {
    visible: false,
  };

  onToggle = () => {
    this.setState(state => ({ visible: !state.visible }));
  }

  render() {
    const { children, text } = this.props;
    const { visible } = this.state;

    return (
      <>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={this.onToggle}
          underlayColor="#fff"
        >
          {children}
        </TouchableHighlight>
        <Modal
          animationType="fade"
          transparent
          visible={visible}
        >
          <TouchableWithoutFeedback onPress={this.onToggle}>
            <View style={styles.overlay}>
              <View style={styles.modal}>
                <Text>
                  {text}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
