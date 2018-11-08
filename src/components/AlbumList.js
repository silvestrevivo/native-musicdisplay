import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

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

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}


export default AlbumList
