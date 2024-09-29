import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Calls = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.font}>Calls</Text>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    font:{
        fontSize:24,
        fontWeight:'700'
    }
})