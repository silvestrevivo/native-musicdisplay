import React from 'react'
import { Text, StyleSheet, View, Image, Linking } from 'react-native'
import { Card } from './common'
import { CardSection } from './common'
import { Button } from './common';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{ uri: album.thumbnail_image }}
            style={styles.thumbnailStyle} />
        </View>
        <View style={styles.headerContenStyle}>
          <Text style={styles.headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: album.image }}
          style={styles.imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>Buy now!</Button>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContenStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
})


export default AlbumDetail
