import { s, ScaledSheet, vs } from 'react-native-size-matters';

import Colors from '../../../constant/Colors';

export default ScaledSheet.create({
  image: {
    width: vs(120),
    height: vs(110),
    resizeMode: 'contain',
  },
  item: {
    margin: vs(5),
    padding: vs(2),
    paddingLeft: s(6),
    paddingBottom: vs(8),
    paddingTop: vs(4),
    backgroundColor: Colors.gray.lightgray,
    borderRadius: 10,
  },
  content: {
    padding: vs(4),
  },
  title: {
    marginTop: vs(2),
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'semibold',
  },
  icon: {
    padding: s(8),
    backgroundColor: 'black',
    marginTop: vs(16),
    borderRadius: 9999,
    width: s(36),
    height: s(36),
  },
});
