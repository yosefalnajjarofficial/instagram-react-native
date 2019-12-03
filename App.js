import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Story from './components/Story';
import Post from './components/Post';
import { posts, stories } from './data.js';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <SimpleLineIcons name="camera" size={32} />
          <Image source={require('./assets/instagram.png')} />
          <Ionicons name="ios-send" size={32} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <View style={styles.stories}>
            <View style={styles.legends}>
              <Text>Stories</Text>
              <View style={styles.watchAll}>
                <Ionicons name="md-arrow-dropright" size={20} />
                <Text style={{ paddingLeft: 5 }}>Watch All</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {stories.map((story, index) => (
                <Story key={index} userName={story.userName} url={story.url} />
              ))}
            </ScrollView>
          </View>
          {/* handling the posts */}
          {posts.map((post, index) => (
            <Post
              key={index}
              avatar={post.avatar}
              userName={post.username}
              location={post.location}
              postPic={post.postPic}
              description={post.description}
              likes={post.likes}
              comments={post.comments}
              time={post.time}
            />
          ))}
        </ScrollView>
        <View style={styles.navigationBar}>
          <Ionicons name="md-home" size={32} />
          <Ionicons name="ios-search" size={32} />
          <SimpleLineIcons name="plus" size={32} />
          <SimpleLineIcons name="heart" size={32} />
          <Ionicons name="md-person" size={32} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  topBar: {
    height: 50,
    marginTop: 24,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#c3c3c3',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
  stories: {
    height: 125,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  },
  watchAll: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navigationBar: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#c3c3c3',
    borderTopWidth: 0.5
  },
  legends: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between'
  }
});
