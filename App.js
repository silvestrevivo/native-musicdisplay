/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums" />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //....
  }
});
