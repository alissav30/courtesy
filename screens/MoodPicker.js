import React, { useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { getCountdownDays, homeScreenMoods, moods } from '../utils';

const swoopBackground = require("./home_background.png");

const xCoordinates = [20, 150, 284, 30, 160, 284, 20, 150, 280, 20, 280];
const yCoordinates = [30, -15, -185, -160, -195, -380, -350, -370, -550, -530, -640];

const MoodBubble = ({ mood, index, setMood, setIsMoodPicker, setIsCustomMoodScreen }) => {
  return (
    <TouchableOpacity onPress={() => {
      if (mood !== "Other...") {
        setMood(mood.toLowerCase());
        setIsMoodPicker(false);
      } else {
        setIsCustomMoodScreen(true);
      }
    }}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#8DA4A3',
        width: 110,
        height: 110,
        left: xCoordinates[index],
        top: yCoordinates[index],
        position: 'fixed',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}>
        <Text style={{ color: 'white', fontWeight: '500' }}> {mood} </Text>
      </View>
    </TouchableOpacity>
  );
};

const MoodPicker = ({ navigation, mood, setMood, setIsMoodPicker }) => {
  const [isCustomMoodScreen, setIsCustomMoodScreen] = useState(false);
  const [customMood, setCustomMood] = useState('');

  if (isCustomMoodScreen) {
    return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 20, alignItems: 'center' }}>
          <Ionicons name={'arrow-back'} color={'white'} size={30} onPress={() => setIsCustomMoodScreen(false)}/>
          <Text style={{ color: 'white', fontSize: 24 }} onPress={() => setIsCustomMoodScreen(false)}> Back </Text>
        </View>
        <Text style={{ color: 'white', fontSize: 26, fontWeight: '500', textAlign: 'center', marginTop: 210, marginLeft: 60, marginRight: 60}}>How are you feeling today about court? </Text>
        <TextInput
          style={{ borderWidth: 1.5, padding: 10, margin: 20, borderRadius: 8, borderColor: 'white', color: 'white', fontSize: 20 }}
          value={customMood}
          onChangeText={setCustomMood}
        />
        <TouchableOpacity style={customMood.length == 0 ? styles.disabledButton : styles.button} onPress={() => {
          if (customMood.length != 0) {
            setMood(customMood);
            setIsCustomMoodScreen(false);
            setIsMoodPicker(false);
          }
        }}>
          <Text> Continue </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
        <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
          <Text style={{ color: 'white', fontSize: 26, fontWeight: '500', textAlign: 'center', marginTop: 100, marginLeft: 60, marginRight: 60}}>How are you feeling today about court? </Text>
          {
            moods.map((mood, key) => {
              return (<MoodBubble mood={mood} key={key} index={key} setMood={setMood} setIsMoodPicker={setIsMoodPicker} setIsCustomMoodScreen={setIsCustomMoodScreen}/>)
            })
          }
          <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center', top: -620 }}>
            <Text style={{ color: 'white', fontSize: 24 }} onPress={() => {
              setMood('default');
              setIsMoodPicker(false);
            }}> Skip </Text>
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
});

export default MoodPicker;
