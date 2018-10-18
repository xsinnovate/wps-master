import PropTypes from 'prop-types';
import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './styles';

export default function Button({ children, onPress }) {
  return (
    <TouchableHighlight
      activeOpacity={0.5}
      onPress={onPress}
      underlayColor="#fff"
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
