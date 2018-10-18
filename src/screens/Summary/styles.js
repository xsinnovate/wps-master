import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingTop: 75,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  lineLabel: {
    fontSize: 16,
    lineHeight: 22,
  },
  lineSavings: {
    color: 'red',
  },
  lineTooltip: {
    textDecorationLine: 'underline',
  },
  lineValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  total: {
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 24,
    fontWeight: '600',
  },
  totalValue: {
    fontSize: 28,
    fontWeight: '600',
  },
});
