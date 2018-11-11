import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

import firebase from 'firebase'

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  renderButton = () => {
    const { loading } = this.state
    if (loading) {
      return <Spinner />
    }

    return <Button onPress={this.onButtonPress}>LogIn</Button>
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <View style={styles.containerLogin}>
        <Card>
          <CardSection>
            <Input
              value={email}
              onChangeText={email => this.setState({ email })}
              label="Email"
              placeholder="user@gmail.com"
            />
          </CardSection>
          <CardSection>
            <Input
              value={password}
              onChangeText={password => this.setState({ password })}
              label="Password"
              placeholder="here your password"
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>{error}</Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  containerLogin: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaeaea'
  }
})

export default LoginForm
