import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { courtDatePosts, contactCourtPosts, legalHelpPosts, transportationPosts, testimonialPosts, otherPosts, myPosts } from '../utils';


const swoopBackground = require("./tasks_background.png");

const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function handleSubmitPost(title, description, category) {
  const newPost = {
    title: title,
    description: description,
    upvotes: 0,
    comments: []
  };
  switch (category) {
    case 'court date information':
      courtDatePosts.push(newPost);
    case 'contacting court':
      contactCourtPosts.push(newPost);
    case 'legal help':
      legalHelpPosts.push(newPost);
    case 'transportation':
      transportationPosts.push(newPost);
    case 'testimonials':
      testimonialPosts.push(newPost);
    default:
      otherPosts.push(newPost);
  }
  myPosts.push(newPost);
}

const MakeAPost = ({ navigation, setMakeNewPost }) => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [postTitle, setPostTitle] = React.useState('');
  const [postDescription, setPostDescription] = React.useState('');
  const [category, setCategory] = React.useState('');

  const showConfirmDialog = (isAnonymous) => {
    return Alert.alert(
      "Post Confirmation",
      `Are you sure you want to make this ${isAnonymous ? "anonymous" : "public"} post?`,
      [
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Cancel",
        },
        {
            text: "Post",
            onPress: () => {
              handleSubmitPost(postTitle, postDescription, category);
              setPostTitle('');
              setPostDescription('');
              setCategory('');
              setMakeNewPost(false);
          },
        },
      ]
    );
  };

  return (
    <HideKeyboard>
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View>
            <TouchableOpacity style={[
                { top: 80, left: 20, width: '25%', height: '22%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,}
            ]} onPress={() => setMakeNewPost(false)}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={[styles.makeAPostHeader, {color: '#F8F9FA'}]}>make a post</Text>
        </View>
        <View style={styles.topic}>
            <Text style={styles.header}>What is your post about?</Text>
            <View  style={styles.dropdown}>
                <SelectDropdown
                  data={categories}
                  onSelect={(selectedItem, index) => {
                    setCategory(selectedItem);
                  }}
                  defaultButtonText={"Select category"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={styles.dropdown1BtnStyle}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  renderDropdownIcon={(isOpened) => {
                    return (
                      <FontAwesome
                        name={isOpened ? "chevron-up" : "chevron-down"}
                        color={"#DEE2E6"}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={"right"}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                />
            </View>
        </View>
        <View>
            <Text style={styles.header}>Give your post a title!</Text>
            <TextInput
                style={[styles.titleBox, styles.dropShadow]}
                onChangeText={setPostTitle}
                value={!postTitle ? "" : postTitle}
                maxLength = {50}
                placeholder={'Ex. My experience in court today'}
                placeholderTextColor={'#dae8e7'}

            />
        </View>
        <View>
            <Text style={[styles.header, styles.descriptionHeader]}>Write your thoughts here.</Text>
            <TextInput
                style={[styles.descriptionBox, styles.dropShadow]}
                onChangeText={setPostDescription}
                value={!postDescription ? "" : postDescription}
                textAlignVertical={'top'}
                multiline
                maxLength = {2000}
                placeholder={'What do you want courtesy users to know?'}
                placeholderTextColor={'#dae8e7'}
            />
        </View>

        <View>
        {/* <View style={styles.checkbox}> */}
        <CheckBox
            //style={{ flex: 1, padding: 10, color: '#DEE2E6' }}
            // onClick={()=>{
            // this.setState({
            //     isChecked:!this.state.isChecked
            // })
            // }}
            // isChecked={this.state.isChecked}
            title="Make this post anonymous"
            style={styles.checkbox}
            checkedColor="#fff"
            containerStyle={{ borderWidth: 0, backgroundColor: '#768A89', marginBottom: 80 }}
            textStyle={{
                color: '#DEE2E6',
                fontSize: 18,
                fontWeight: '400',
            }}
            checked={isAnonymous}
            onPress={() => setIsAnonymous(!isAnonymous)}
        />
        {/* </View> */}

        <TouchableOpacity style={ postTitle.length > 0 ? styles.postButton : styles.disabledButton }>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{ color: '#768A89', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }} onPress={() => {
                showConfirmDialog(isAnonymous)
              }}> POST </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
    backButton: {
        borderColor: "#FFFFFF",
        borderRadius: 30,
    },
    makeAPostHeader: {
        textAlign: 'center',
        fontSize: 26,
        lineHeight: 31,
        top: -45,
    },
    dropShadow:  {
        shadowColor: '#00000040',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    header: {
        color: '#F8F9FA',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '600',
        left: 20,
        marginBottom: 10,
        marginTop: 10,
        top: -30,
    },
    dropdown: {
        marginLeft: 20,
        borderRadius: 50,
        width: '100%',
        top: -30,
        marginBottom: 20,
    },
    titleBox: {
        left: 20,
        borderWidth: 2,
        width: '90%',
        height: 40,
        borderColor: '#DEE2E6',
        borderRadius: 9,
        color: 'white',
        top: -30,
        paddingLeft: 10,
        marginBottom: 20,
    },
    checkbox: {
        color: 'white',
        width: '100%',
    },
    descriptionBox: {
      left: 20,
      borderWidth: 2,
      width: '90%',
      height: 100,
      borderColor: '#DEE2E6',
      borderRadius: 9,
      color: 'white',
      top: -30,
      padding: 10,
      paddingTop: 10,
    },
    postButton: {
      alignSelf: 'center',
      width: 130,
      height: 50,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: 'white',
      shadowColor: '#00000040',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    underline: {textDecorationLine: 'underline'},
    dropdown1BtnStyle: {
      width: "90%",
      height: 42,
      backgroundColor: "#768A89",
      borderRadius: 9,
      borderWidth: 2,
      borderColor: "#DEE2E6",
    },
    dropdown1BtnTxtStyle: { color: "#DEE2E6", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
    disabledButton: {
      backgroundColor: '#819897',
      width: 130,
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 30,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,
        marginTop: 20
        //justifyContent: "center",
      },
      checkbox: {
        alignSelf: "center",
        alignItems: "center"
      },

});

export default MakeAPost;
