import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const CardSection = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

export { CardSection }
