import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { initialBlogPosts ,BlogPost } from '../components/blogPost';


const Senaryo1 = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const handleLikePress = (postId, liked) => {
    setBlogPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, likeCount: liked ? post.likeCount - 1 : post.likeCount + 1 };
        }
        return post;
      });
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlogPost post={item} onLikePress={handleLikePress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  }
});

export default Senaryo1;
