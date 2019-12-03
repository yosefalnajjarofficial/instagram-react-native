import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default ({
  avatar,
  userName,
  location,
  postPic,
  likes,
  description,
  comments,
  time
}) => {
  return (
    <View>
      <View style={styles.postInfo}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: avatar
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{userName}</Text>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <Ionicons name="md-more" size={28} />
      </View>
      <View>
        <TouchableWithoutFeedback onPress={() => alert('Image Liked!')}>
          <Image
            source={{
              uri: postPic
            }}
            style={styles.postImage}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.iconsBar}>
        <View style={styles.groupIcons}>
          {/* like/heart icon */}
          <Ionicons name="md-heart" size={28} style={{ marginRight: 15 }} />
          {/*  comments icon */}
          <Ionicons name="md-chatboxes" size={28} style={{ marginRight: 15 }} />
          {/* iso send icon */}
          <Ionicons name="ios-send" size={28} style={{ marginRight: 15 }} />
        </View>
        {/* bookmark icon */}
        <Ionicons name="md-bookmark" size={28} />
      </View>
      {/* number of likes */}
      <Text style={styles.likes}>{likes} Likes</Text>
      <View style={styles.postContent}>
        {/* username */}
        <Text style={styles.postUsername}>
          {userName}
          {/* description */}
          <Text style={styles.postDescription}>{description}</Text>
        </Text>
      </View>
      {/* view all comments */}
      <Text style={styles.comments}>View all {comments} comments</Text>
      <Text style={styles.time}>{time} hours ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postInfo: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    borderColor: '#ccc',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderColor: '#242424',
    marginRight: 10
  },
  username: { fontSize: 14, color: '#242424', fontWeight: '500' },
  location: { fontSize: 12, color: '#242424', fontWeight: '300' },
  postImage: { height: 300 },
  iconsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
  groupIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likes: {
    fontSize: 13,
    color: '#242424',
    fontWeight: '700',
    paddingLeft: 10,
    paddingBottom: 10
  },
  postContent: { paddingLeft: 10, paddingRight: 10, marginBottom: 5 },
  postUsername: { fontSize: 14, color: '#242424', fontWeight: '700' },
  postDescription: { fontSize: 14, color: '#242424', fontWeight: '400' },
  comments: {
    fontSize: 13,
    color: '#ccc',
    fontWeight: '700',
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10
  },
  time: {
    fontSize: 11,
    color: '#ccc',
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12
  }
});
