import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { getCountdownDays, homeScreenMoods, moods } from '../utils';

const swoopBackground = require("./Message_Board_Background.png");
const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];

const MessageBoardScreen = ({ navigation }) => {
  let selectedCategory = 'none';

  if (selectedCategory == 'none') {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
            <Text style={{ top: 65, color: 'white', fontSize: 26, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center' }}> MESSAGE BOARD </Text>
            <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
              {
                categories.map((category) => {
                  return (
                    <TouchableOpacity style={styles.categoryModule}>
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
    height: 70,
    width: '90%',
    justifyContent: 'center'
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default MessageBoardScreen;
