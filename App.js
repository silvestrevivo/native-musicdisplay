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
import LoginForm from './src/components/LoginForm';

import firebase from 'firebase';
import firebaseObject from './firebase';

export default class App extends Component {

  componentDidMount() {
    firebase.initializeApp(firebaseObject);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.containerLogin}>
          <LoginForm />
        </View>
        {/* <View style={styles.containerApp}>
          <Header headerText="Albums" />
          <AlbumList />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center'
  }
});
