import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    containLogo:{
        width:150,
        height:150,
        resizeMode:'center'
    },
    containText:{
        fontSize: 40,
        fontWeight:'bold',
        color:'#ffffff',
        margin:10,
        padding:10
    }
})

export default styles;