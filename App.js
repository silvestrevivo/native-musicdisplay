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
import { Spinner } from './src/components/common';

export default class App extends Component {

  state = {
    loggedIn: null
  }

  componentDidMount() {
    firebase.initializeApp(firebaseObject);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    const { loggedIn } = this.state
    switch (loggedIn) {
      case true:
        return (
          <View style={styles.containerApp}>
            <Header headerText="Albums" />
            <AlbumList />
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1
  }
});
