import React, { useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { moods } from '../utils';

const swoopBackground = require("./home_background.png");

const xCoordinatesOld = [20, 150, 284, 30, 160, 284, 20, 150, 280, 20, 280];
const xCoordinates =    [3, 35, 65, 4.93, 33.279999999999994, 65, 3, 35, 65, 3, 65];

const yCoordinates = [30, -15, -185, -160, -195, -380, -350, -370, -550, -530, -640];

const MoodBubble = ({ mood, index, setMood, setIsMoodPicker, setisSignUpFlow, setIsCustomMoodScreen }) => {
  return (
    <TouchableOpacity onPress={() => {
      if (mood !== "other...") {
        setMood(mood.toLowerCase());
        setIsMoodPicker(false);
        setisSignUpFlow(false);
      } else {
        setIsCustomMoodScreen(true);
      //  setisSignUpFlow(false)
      }
    }}>
      <View style={[{left: `${xCoordinates[index]}%`,
      top: yCoordinates[index],
      position: 'fixed'}, mood == "other..." ? styles.otherBubble : styles.moodBubble
      ]}>
        <Text style={mood=="other..." ? styles.otherText : styles.moodText}> {mood} </Text>
      </View>
    </TouchableOpacity>
  );
};

const MoodPicker = ({ setMood, setIsMoodPicker, setisSignUpFlow, mood, navigation }) => {
  const [isCustomMoodScreen, setIsCustomMoodScreen] = React.useState(false);
  const [customMood, setCustomMood] = React.useState('');

  if (isCustomMoodScreen) {
    return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 20, alignItems: 'center' }}>
          <Ionicons name={'arrow-back'} color={'white'} size={30} onPress={() => setIsCustomMoodScreen(false)}/>
          <Text style={{ color: 'white', fontSize: 24 }} onPress={() => setIsCustomMoodScreen(false)}> Back </Text>
        </View>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: '500', textAlign: 'center', marginTop: 70, marginLeft: 50, marginRight: 50, marginBottom: 0}}>Would you like to share how you feel today about your upcoming court summons?</Text>
        <TextInput
          style={{ borderWidth: 1.5, padding: 10, margin: 20, borderRadius: 8, borderColor: 'white', color: 'white', fontSize: 20 }}
          value={customMood}
          onChangeText={setCustomMood}
          placeholder={'We hear you!'}
          placeholderTextColor={'#dae8e7'}
        />
        <TouchableOpacity style={customMood.length == 0 ? styles.disabledButton : styles.button} onPress={() => {
          if (customMood.length != 0) {
            setMood(customMood);
            setIsCustomMoodScreen(false);
            setIsMoodPicker(false);
            setisSignUpFlow(false);
          }
        }}>
          <Text style={customMood.length == 0 ? {color: '#768A89'} : {color: 'black'}}> Continue </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
        <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
          <Text style={{ color: 'white', fontSize: 22, fontWeight: '500', textAlign: 'center', marginTop: 70, marginLeft: 50, marginRight: 50, marginBottom: 0}}>Would you like to share how you feel today about your upcoming court summons?</Text>
          {
            moods.map((mood, key) => {
              return (<MoodBubble mood={mood} key={key} index={key} setMood={setMood} setisSignUpFlow={setisSignUpFlow} setIsMoodPicker={setIsMoodPicker} setIsCustomMoodScreen={setIsCustomMoodScreen}/>)
            })
          }
          <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center', top: -650 }} onPress={() => {
            setMood('default');
            setIsMoodPicker(false);
          }}>
            <Text style={{ color: 'white', fontSize: 24 }}> Skip </Text>
            <Ionicons name={'arrow-forward'} color={'white'} size={30} onPress={() => {
              setMood('default');
              setIsMoodPicker(false);
            }}/>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    color: '#768A89',
    width: 130,
    height: 50,
    borderRadius: 90,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: '#819897',
    width: 130,
    height: 50,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },

  otherText: {
    color: 'black',
    fontWeight: "500",
  },
  moodText :{
    color: 'white',
    fontWeight: "500",
  },
  otherBubble : {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: '#bad9d7',
      width: 110,
      height: 110,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.25,
      shadowRadius: 4,
  },
  moodBubble: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: '#8DA4A3',
      width: 110,
      height: 110,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.25,
      shadowRadius: 4,
  },
  moodTextContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },

});

export default MoodPicker;
