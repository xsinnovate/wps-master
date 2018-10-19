import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { applyPromoCode } from '../../../../actions';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import styles from './styles';

export class Promo extends PureComponent {
  state = {
    value: '',
  };

  onChange = (value) => {
    this.setState({ value });
  }

  onSubmit = () => {
    this.props.applyPromoCode(this.state.value);

    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            label="Promo code"
            onChange={this.onChange}
            value={value}
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>
        <View style={styles.button}>
          <Button onPress={this.onSubmit}>
            Apply
          </Button>
        </View>
      </View>
    );
  }
}

Promo.propTypes = {
  applyPromoCode: PropTypes.func.isRequired,
};

export default connect(null, {
  applyPromoCode,
})(Promo);
