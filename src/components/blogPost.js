import React, { useState } from 'react';
import {  Text, TouchableOpacity, View,StyleSheet} from 'react-native';

export const initialBlogPosts = [
  { id: 1, title: 'Blog Post 1', likeCount: 0 },
  { id: 2, title: 'Blog Post 2', likeCount: 0 },
  { id: 3, title: 'Blog Post 3', likeCount: 0 },
];

export const BlogPost = ({ post, onLikePress }) => {
  const [liked, setLiked] = useState(false);
  const handleLikePress = () => {
    onLikePress(post.id, liked);
    setLiked(!liked);
  };

  return (
    <View style={styles.blogPostContainer}>
      <Text style={styles.blogPostTitle}>{post.title}</Text>
      <Text style={styles.likeCount}>{post.likeCount}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLikePress}>
        <Text style={styles.buttonText}>{liked ? 'Unlike' : 'Like'}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({

  blogPostContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  blogPostTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  likeCount: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});