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

const TasksScreen = ({ navigation, mood }) => {

  let selectedCategory = 'none';
  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }

  if (selectedCategory == 'none') {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
            <Text style={{ top: 65, color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center' }}> Transportation Task Page </Text>
            <View style={{ flex: 0.75 }}>
            <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.categoryModule}>
                      <Text style={styles.categoryText}> access resources to help you get representation.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryModule}>
                      <Text style={styles.categoryText}> discuss transportation options with other courtesy users.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryModule}>
                      <Text style={styles.categoryText}> make your plan! </Text>
                    </TouchableOpacity>
                </View>
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
        height: 90,
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

export default TasksScreen;
