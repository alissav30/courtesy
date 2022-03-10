import React, { useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MessageModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: '',
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `courtesy | ${this.props.post.title}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { post } = this.props;
    const { voted } = this.state;

    return (
      <TouchableOpacity style={styles.messageModule} key={post.title} onPress={() => this.props.setPostToDisplay(post)}>
        <View style={{ width: '12%', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name={'md-chevron-up'} color={ voted === 'up' ? 'white' : '#768A89' } size={26} onPress={() => {
            if (voted === 'up') {
              this.setState({ voted: '' });
              post.upvotes--;
            } else if (voted === 'down') {
              this.setState({ voted: 'up' });
              post.upvotes += 2;
            } else {
              this.setState({ voted: 'up' });
              post.upvotes++;
            }
          }}/>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}> {post.upvotes} </Text>
          <Ionicons name={'md-chevron-down'} color={ voted === 'down' ? 'white' : '#768A89' } size={26} onPress={() => {
            if (voted === 'down') {
              this.setState({ voted: '' });
              post.upvotes++;
            } else if (voted === 'up') {
              this.setState({ voted: 'down' });
              post.upvotes -= 2;
            } else {
              this.setState({ voted: 'down' });
              post.upvotes--;
            }
          }}/>
        </View>
        <View style={{ padding: 5, width: '85%', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white' }}>{post.title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name={'md-chatbox-ellipses'} color={'white'} size={20}/>
              <Text style={{ color: 'white' }}> {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name={'md-share-social'} color={'white'} size={20}/>
              <Text style={{ color: 'white' }} onPress={this.onShare}> share </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  messageModule: {
    backgroundColor: '#A7CBC8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.33,
    shadowRadius: 3,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    height: 100,
    marginBottom: 25,
  }
});

export default MessageModule;
