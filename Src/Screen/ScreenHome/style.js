import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#F6CEEC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containBox: {
    width: '60%',
    margin: 10,
    padding:10,
    borderRadius: 10,
    borderBottomWidth:2
  },
  containText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight:'700',
    paddingTop:20,
  },
});

export default styles;