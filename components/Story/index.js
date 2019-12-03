import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

export default ({ userName, url }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        margin: 8
      }}
    >
      <ImageBackground
        source={require('../../assets/Gradient.png')}
        style={styles.imageContainer}
      >
        <Image source={{ uri: url }} style={styles.image} />
      </ImageBackground>
      <Text style={styles.text}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 25
  },
  text: { fontSize: 11 }
});
