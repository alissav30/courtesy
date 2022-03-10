import React, { useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
  BackHandler,
  ScrollView,
  Share,
} from 'react-native';
import MessageModule from './MessageModule';
import MakeAPost from './MakeAPost';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { courtDatePosts, contactCourtPosts, legalHelpPosts, transportationPosts, testimonialPosts, otherPosts } from '../utils';

const swoopBackground = require("./Message_Board_Background.png");
const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];

function getPosts(category) {
  switch (category) {
    case 'court date information':
      return courtDatePosts;
    case 'contacting court':
      return contactCourtPosts;
    case 'legal help':
      return legalHelpPosts;
    case 'transportation':
      return transportationPosts;
    case 'testimonials':
      return testimonialPosts;
    default:
      return otherPosts;
  }
}

const onShare = async (title) => {
  try {
    const result = await Share.share({
      message: `courtesy | ${title}`,
    });
  } catch (error) {
    alert(error.message);
  }
};

const MessageBoardScreen = ({ navigation, selectedCategory, setSelectedCategory}) => {
//  const [selectedCategory, setSelectedCategory] = useState('none');
  const [searchTerm, setSearchTerm] = useState('');
  const [postToDisplay, setPostToDisplay] = useState('');
  const [newComment, setNewComment] = useState('');
  const [makeNewPost, setMakeNewPost] = useState(false);

  if (makeNewPost) {
    return (
      <MakeAPost setMakeNewPost={setMakeNewPost}/>
    );
  }

  if (selectedCategory === 'none' && postToDisplay === '') {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={swoopBackground} style={{ width: '102%', height: '103%', left: -1 }}>
            <Text style={{ top: 65, color: 'white', fontSize: 26, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center' }}> MESSAGE BOARD </Text>
            <View style={{ width: '90%', top: 90, height: 40, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.searchBar}>
                <TextInput
                  style={{ color: 'white', fontSize: 16, height: '100%' }}
                  onChangeText={setSearchTerm}
                  value={searchTerm}
                />
                <MaterialCommunityIcons name={'magnify'} color={'white'} size={20} />
              </View>
              <TouchableOpacity style={styles.makePostButton} onPress={() => setMakeNewPost(true)}>
                <Text style={{ color: 'white', fontWeight: 'bold'}}> MAKE A POST </Text>
                <FontAwesome5 name={'pencil-alt'} color={'white'} size={16}/>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginTop: 120, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
              {
                categories.map((category) => {
                  return (
                    <TouchableOpacity style={styles.categoryModule} onPress={() => {
                      setSelectedCategory(category);
                      setSearchTerm(category);
                    }} key={category}>
                      <Text style={styles.categoryText}> {category} </Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ImageBackground>
        </View>
    );
  }

  else if (!postToDisplay) {
    const posts = getPosts(selectedCategory);
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={swoopBackground} style={{ width: '102%', height: '103%', left: -1 }}>
          <View style={{ flexDirection: 'row', top: 80, justifyContent: 'space-between', width: '90%', alignSelf: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => {
              setSelectedCategory('none');
              setSearchTerm('');
            }}>
              <Ionicons name={'md-arrow-back'} color={'white'} size={24}/>
              <Text style={{ color: 'white', fontSize: 20}}> Back </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.makePostButtonFull} onPress={() => setMakeNewPost(true)}>
              <Text style={{ color: 'white', fontWeight: 'bold'}}> MAKE A POST </Text>
              <FontAwesome5 name={'pencil-alt'} color={'white'} size={16}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchBarFull}>
            <TextInput
              style={{ color: 'white', fontSize: 16, height: '100%', width: '90%', paddingLeft: 12 }}
              onChangeText={setSearchTerm}
              value={searchTerm}
            />
            <MaterialCommunityIcons name={'magnify'} color={'white'} size={20} />
          </View>
          <ScrollView style={{ top: 140, marginBottom: 150 }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} scrollEnabled>
          { posts.sort((a, b) => a.upvotes < b.upvotes ? 1 : -1).map((post) => {
              return (
                <MessageModule key={post.title} post={post} setPostToDisplay={setPostToDisplay}/>
              )
            })
          }
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }

  else {
    return (
      <View style={{ flex: 1, backgroundColor: '#85B0AE' }}>
        {/* back button */}
        <View style={{ flexDirection: 'row', top: 70, marginLeft: 15 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => {
            setPostToDisplay('');
            setNewComment('');
          }}>
            <Ionicons name={'md-arrow-back'} color={'white'} size={24}/>
            <Text style={{ color: 'white', fontSize: 20}}> Back </Text>
          </TouchableOpacity>
        </View>

        {/* post content */}
        <View style={{ backgroundColor: '#779391', borderWidth: 1, borderColor: '#596362', top: 100, padding: 20, width: '90%', borderRadius: 14, alignSelf: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.33, shadowRadius: 3, marginBottom: 120 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{postToDisplay.title}</Text>
          { postToDisplay.description !== '' &&
            <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>{postToDisplay.description}</Text>
          }

          {/* action buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name={'md-chatbox-ellipses'} color={'white'} size={20}/>
              <Text style={{ color: 'white' }}> {postToDisplay.comments.length} {postToDisplay.comments.length === 1 ? 'comment' : 'comments'} </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name={'md-share-social'} color={'white'} size={20}/>
              <Text style={{ color: 'white' }} onPress={() => onShare(postToDisplay.title)}> share </Text>
            </View>
          </View>

          {/* divider */}
          <View style={{ height: 1.5, width: '100%', backgroundColor: 'white', marginTop: 20, marginBottom: 15 }} />

          {/* case: no comments */}
          {
            (postToDisplay.comments.length === 0) &&
                <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>no comments yet</Text>
          }

          {/* case: comments */}
          {
            (postToDisplay.comments.length > 0) &&
              <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 15, textDecorationLine: 'underline' }}>COMMENTS</Text>
          }
          {
            postToDisplay.comments.map((comment, index) => {
              return (
                <View style={{ marginBottom: 15, backgroundColor: '#E2E2E2', padding: 8, alignSelf: 'flex-start', marginLeft: 20, borderRadius: 15,  }}>
                  <Text style={{ color: '#596362', fontSize: 16, marginLeft: 4, marginRight: 4 }}>{comment}</Text>
                </View>
              )
            })
          }

        </View>

        {/* add comments */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.addComment}>
            <TextInput
              style={{ fontSize: 18, height: '100%', width: '100%', paddingLeft: 8, color: 'white' }}
              onChangeText={setNewComment}
              value={newComment}
              placeholder={'add a comment...'}
              placeholderTextColor={'white'}
            />
          </View>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => {
              postToDisplay.comments.push(newComment);
              setNewComment('');
            }}> COMMENT </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

};

const styles = StyleSheet.create({
  categoryModule: {
    backgroundColor: "#8AB5B2",
    borderWidth: 1,
    borderColor: "rgba(118, 138, 137, 0.5)",
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 14,
    height: 80,
    width: '90%',
    justifyContent: 'center'
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
  searchBar: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    height: '100%',
    width: '64%',
    padding: 10,
    color: 'white',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchBarFull: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
    height: 40,
    width: '75%',
    padding: 10,
    color: 'white',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    top: 110,
  },
  makePostButton: {
    backgroundColor: '#3E6664',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: 'row',
  },
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
  },
  makePostButtonFull: {
    backgroundColor: '#3E6664',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  addComment: {
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 14,
    height: 40,
    width: '68%',
    marginRight: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },

});

export default MessageBoardScreen;
