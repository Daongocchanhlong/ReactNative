import { StyleSheet } from 'react-native'
import * as Color from '../../Define/Color'
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: Color.BGR_COLOR,
  },
  logo: {
    margin: 50,
    padding: 10,
    alignSelf: 'center',
  },
  containOptionMenu: {
    height: 400,
    marginTop: 50,
    padding: 10,
  },
  containOptionItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  textItem: {
    fontSize: 30,
    fontWeight: '700',
    color: Color.TEXT_COLOR,
    marginTop: 30,
    marginLeft: 20,
  },
});

export default styles;