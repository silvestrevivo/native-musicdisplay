import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
import { Button } from './common'
import firebase from 'firebase'

class AlbumList extends Component {

  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({
          albums: response.data
        })
      })
      .catch(err => console.log(err))
  }

  renderAlbums = () => {
    return this.state.albums.map((album, i) => {
      return (
        <AlbumDetail key={i} album={album} />
      )
    })
  }

  logOut = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
        <Button onPress={this.logOut}>Log Out</Button>
      </ScrollView>
    )
  }
}


export default AlbumList
