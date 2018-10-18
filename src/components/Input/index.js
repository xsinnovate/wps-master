import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

export default function Input({
  label,
  onChange,
  value,
  ...rest
}) {
  return (
    <View>
      <View style={styles.label}>
        <Text style={styles.labelText}>
          {label}
        </Text>
      </View>
      <View>
        <TextInput
          {...rest}
          onChangeText={onChange}
          value={value}
          style={styles.input}
        />
      </View>
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
