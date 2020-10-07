import { StyleSheet } from 'react-native'
import * as Color from '../../Define/Color'
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.FOOTER_COLOR,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    flex: 10,
    backgroundColor: Color.BGR_COLOR,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.FOOTER_COLOR,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: '#000',
  },
});

export default styles;