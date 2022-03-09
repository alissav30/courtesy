import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { TextInputMask } from 'react-native-masked-text'


const swoopBackground = require("./tasks_background.png");

const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];


const MakeaPost = ({ navigation, childCare, postTitle, onChangePostTitle }) => {
    // eventually replace w/ real data
  const fakeName = "Jane";
  const fakeDataCourtDate = new Date('04/27/22');
  const fakeDataCourtTime = "5:00 PM PST";
  const fakeDataLocation = "Palo Alto Courthouse";
  const fakeDataTransportation = "Start your plan!";
  const fakeDataLegalRep = "Start your plan!";
  const fakeDataChildCare = "Found babysitter";
  const fakeFoundTransportation = false;
  const fakeFoundLegalTransportation = false;
  const fakeFoundChildcare = true;
  const fakeNeedsChildCare = true;

//   {childCare ? "edit / view" : "explore"}

  return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View>
            <TouchableOpacity style={[
                { top: 80, left: 20, width: '27%', height: '23%', borderRadius: '18px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,}
            ]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={[styles.makeAPostHeader, {color: '#F8F9FA'}]}>make a post</Text>
        </View>
        <View style={styles.topic}>
            <Text style={styles.header}>TOPIC</Text>
            <View  style={styles.dropdown}>
                <SelectDropdown
                    borderRadius={30}
                    data={categories}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View>
        </View>
        <View>
            <Text style={styles.header}>GIVE YOUR POST A TITLE</Text>
            <TextInput
                style={[styles.titleBox, styles.dropShadow]}
                onChangeText={onChangePostTitle}
                value={postTitle ? postTitle : "Default text"}
            />
        </View>
        <View>
            <Text style={[styles.header, styles.descriptionHeader]}>DESCRIPTION</Text>
            <TextInput
                style={[styles.descriptionBox, styles.dropShadow]}
                onChangeText={onChangePostTitle}
                value={postTitle ? postTitle : "Default text"}
                textAlignVertical={'top'}
            />
        </View>

        <View>
        {/* <View style={styles.checkbox}> */}
        <CheckBox
            style={{flex: 1, padding: 10, color: 'white'}}
            // onClick={()=>{
            // this.setState({
            //     isChecked:!this.state.isChecked
            // })
            // }}
            // isChecked={this.state.isChecked}
            rightText={"Make this post anonymous"}
        />
        {/* </View> */}

        <TouchableOpacity style={[
            styles.postButton,
            styles.dropShadow,
            { height: "23%", width:'27%', borderRadius: '18px', justifyContent: 'center', backgroundColor: 'white'}
          ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{ color: '#768A89', fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}> POST </Text>
            </View>
          </TouchableOpacity>
        </View>
 
        
      </View>
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
    },
    dropdown: {
        marginLeft: 20,
        borderRadius: 50,
        width: '100%'
    },
    titleBox: {
        left: 20,
        borderWidth: 2,
        width: '90%',
        height: 40,
        borderColor: '#DEE2E6',
        borderRadius: 9,
        color: 'white',
    },
    checkbox: {
        color: 'white',
        width: '100%',
    },
    descriptionBox: {
        // top: -120,
        left: 20,
        borderWidth: 2,
        width: '90%',
        height: 100,
        borderColor: '#DEE2E6',
        borderRadius: 9,
        color: 'white',
        textAlignVertical: 'top',
    },
    postButton: {
        alignSelf: 'center',
    },
    underline: {textDecorationLine: 'underline'},
});

export default MakeaPost;
