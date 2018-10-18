import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  photo: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  product: {
    flex: 2,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  price: {
    paddingBottom: 4,
  },
  priceText: {
    fontWeight: '600',
  },
  priceOriginal: {
    color: '#999',
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
  quantity: {
    fontSize: 13,
  },
});
