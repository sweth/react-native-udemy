import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumData }) => {
  const {
    title,
    artist,
    thumbnail_image: artistThumbnail,
    image: albumImage,
  } = albumData;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: artistThumbnail }}
          />
        </View>
        <View style={styles.albumSummary}>
          <Text style={styles.albumTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.image}
          source={{ uri: albumImage }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  albumSummary: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  albumTitle: {
    fontSize: 18,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 300,
    width: null,
    flex: 1,
  },
};

export default AlbumDetail;
