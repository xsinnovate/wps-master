import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default function ProductRow({ product }) {
  const {
    image,
    name,
    price,
    pickup,
    quantity,
  } = product;

  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      </View>
      <View style={styles.product}>
        <Text>
          {name}
        </Text>
        <View style={styles.details}>
          <View>
            <View style={styles.price}>
              <Text style={styles.priceText}>
                {`$${(price - pickup)}`}
              </Text>
            </View>
            <View>
              <Text style={styles.priceOriginal}>
                {`$${price}`}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.quantity}>
              {`Qty: ${quantity}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pickup: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
