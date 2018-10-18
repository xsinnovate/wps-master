import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Collapsible from '../../components/Collapsible';
import Divider from '../../components/Divider';
import ProductRow from '../../components/ProductRow';
import Tooltip from '../../components/Tooltip';
import Promo from './components/Promo';
import { getCartProducts, getCartTotals } from '../../reducers';
import styles from './styles';

function Summary({
  products,
  subtotal,
  savings,
  promo,
  taxes,
  total,
}) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.wrapper}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View style={styles.row}>
            <Text style={styles.lineLabel}>
              Subtotal
            </Text>
            <Text style={styles.lineValue}>
              {`$${subtotal}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Tooltip text="Picking up your order in the store helps cut costs, and we pass the savings on to you.">
              <Text style={[styles.lineLabel, styles.lineTooltip]}>
                Pickup Savings
              </Text>
            </Tooltip>
            <Text style={[styles.lineValue, styles.lineSavings]}>
              {`-$${savings}`}
            </Text>
          </View>
          {promo ? (
            <View style={styles.row}>
              <Text style={styles.lineLabel}>
                Promo
              </Text>
              <Text style={[styles.lineValue, styles.lineSavings]}>
                {`-$${promo}`}
              </Text>
            </View>
          ) : null}
          <View style={styles.row}>
            <Text style={styles.lineLabel}>
              Est. taxes & fees
              {'\n'}
              (Based on 94085)
            </Text>
            <Text style={styles.lineValue}>
              {`$${taxes}`}
            </Text>
          </View>
        </View>
        <Divider />
        <View>
          <View style={[styles.row, styles.total]}>
            <Text style={styles.totalLabel}>
              Est. total
            </Text>
            <Text style={styles.totalValue}>
              {`$${total}`}
            </Text>
          </View>
          <Collapsible
            label="See item details"
            labelHide="Hide item details"
          >
            {products.map(product => (
              <ProductRow
                key={product.id}
                product={product}
              />
            ))}
          </Collapsible>
          <Divider />
          <Collapsible
            label="Apply promo code"
            labelHide="Hide promo code"
          >
            <Promo />
          </Collapsible>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

Summary.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtotal: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired,
  promo: PropTypes.number.isRequired,
  taxes: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(state => ({
  products: getCartProducts(state),
  ...getCartTotals(state),
}), {

})(Summary);
