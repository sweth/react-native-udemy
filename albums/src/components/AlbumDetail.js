import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumData }) => {
  const { title, artist, thumbnail_image } = albumData;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.albumSummary}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  albumSummary: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnail: {
    height: 50,
    width: 50,
  }
};

export default AlbumDetail;
