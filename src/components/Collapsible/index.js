import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

export default class Collapsible extends PureComponent {
  state = {
    isCollapsed: true,
  };

  onToggle = () => {
    this.setState(state => ({
      isCollapsed: !state.isCollapsed,
    }));
  }

  render() {
    const { isCollapsed } = this.state;
    const { children, label, labelHide } = this.props;

    return (
      <View>
        <TouchableHighlight
          activeOpacity={0.4}
          onPress={this.onToggle}
          underlayColor="#fff"
        >
          <View style={styles.button}>
            <Text>
              {!isCollapsed && labelHide ? labelHide : label}
            </Text>
            <Text style={styles.icon}>
              {!isCollapsed ? '-' : '+'}
            </Text>
          </View>
        </TouchableHighlight>
        {!isCollapsed ? (
          <View style={styles.content}>
            {children}
          </View>
        ) : null}
      </View>
    );
  }
}

Collapsible.defaultProps = {
  labelHide: '',
};

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  labelHide: PropTypes.string,
};
