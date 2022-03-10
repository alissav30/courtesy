import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'


const swoopBackground = require("./tasks_background.png");

const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];


const MakeAPlan = ({ navigation, childCare, postTitle, onChangePostTitle }) => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View>
            <TouchableOpacity style={[
                { top: 80, left: 20, width: '25%', height: '22%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,}
            ]}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View>
            <Text style={[styles.makeAPostHeader, {color: '#F8F9FA'}]}>TRANSPORTATION PLAN</Text>
        </View>
        <View>
            <Text style={styles.header}>TRANSPORTATION CHOICE:</Text>
            <TextInput
                style={[styles.titleBox, styles.dropShadow]}
                onChangeText={onChangePostTitle}
                value={postTitle ? postTitle : ""}
            />
        </View>
        <View>
            <Text style={[styles.header, styles.descriptionHeader]}>(OPTIONAL) ADDITIONAL DESCRIPTION 
            OR NOTES</Text>
            <TextInput
                style={[styles.descriptionBox, styles.dropShadow]}
                onChangeText={onChangePostTitle}
                value={postTitle ? postTitle : ""}
                textAlignVertical={'top'}
                multiline
            />
        </View>

        <View>
        <TouchableOpacity style={[
            styles.postButton,
            styles.dropShadow,
            { height: "20%", width:'37%', borderRadius: '20px', justifyContent: 'center', backgroundColor: 'white' }
          ]}>
            {/*<View style={{ flexDirection: 'row', justifyContent: 'space-around', textAlign: 'center'}}>*/}
              <Text style={{ color: '#768A89', fontSize: 14, fontWeight: 'bold', alignSelf: 'center', alignItems: 'center' }}> SET YOUR PLAN </Text>
            {/*</View>*/}
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
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
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

export default MakeAPlan;
