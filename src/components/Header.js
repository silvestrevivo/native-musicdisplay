import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#0053B2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
})


export default Header
