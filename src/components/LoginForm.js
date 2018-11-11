import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { Button, Card, CardSection, Input } from './common'

import firebase from 'firebase'

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    error: ''
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '' })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' })
          })
      })
  }

  render() {
    const { email, password, error } = this.state;
    return (
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
          <Button onPress={this.onButtonPress}>LogIn</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default LoginForm
