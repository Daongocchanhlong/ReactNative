import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#F6CEEC',
  },
  containItem:{
    margin:10,
    padding:10,
    backgroundColor:'#FFFFFF',
    borderRadius:10
  },
  containNamePhone:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5
  },
  text:{
    fontSize:20,
  }
});

export default styles;