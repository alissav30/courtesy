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

const swoopBackground = require("./home_background.png");

const HomeScreen = ({ navigation, mood, firstName, courtDate, setIsMoodPicker }) => {
  // *** eventually hardcoded variables with actual data ***
  const fakeDataCourtDate = new Date(courtDate);
  const name = firstName;

  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }

  return (
      <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>
              Welcome back, {name}!
            </Text>
          </View>
          { mood == "default" ?
            <View style={styles.moodTextContainer}>
              <Text style={styles.moodText}>
                You've got {getCountdownDays(fakeDataCourtDate)} days until
              </Text>
              <Text style={styles.moodText}>
                court - let's get to work!
              </Text>
            </View>
          :
          <View style={styles.moodTextContainer}>
            <Text style={styles.moodText}>
              Today you're feeling
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={styles.moodWordText}
                onPress={() => setIsMoodPicker(true)}
              > {mood.toLowerCase()}</Text>
              <Text style={styles.moodText}> {homeScreenMoods[moodKey].headerText} </Text>
            </View>
          </View>
          }
          {/* task module */}
          <TouchableOpacity
            style={[
              styles.module,
              styles.dropShadow,
              { top: 270, height: "20%" }
            ]}
            onPress={() => navigation.navigate(homeScreenMoods[moodKey].taskRoute)}
          >
            <Text style={{
              color: 'white',
              fontSize: 20,
              padding: 25,
            }}>
              {homeScreenMoods[moodKey].taskText}
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}> GO </Text>
              <Ionicons name={'arrow-forward'} color={'white'} size={30}/>
            </View>
          </TouchableOpacity>
          {/* call the court module */}
          <TouchableOpacity style={[
            styles.module,
            styles.dropShadow,
            { top: 470, height: "10%", borderRadius: '18px', justifyContent: 'center' }
          ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
              <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }}> CLICK HERE TO CALL YOUR COURTHOUSE </Text>
              <Ionicons name={'call'} color={'white'} size={22} styles={{ marginLeft: 18 }}/>
            </View>
          </TouchableOpacity>
          {/* countdown module */}
          <View style={[styles.module,
            { top: 590, height: "20%", width: "40%", borderWidth: 1, borderColor: '#779391', justifyContent: "center"}
          ]}>
            <Text style={styles.countdownText}>you have</Text>
            <Text style={styles.countdownText}>court in</Text>
            <Text style={styles.countdownNumber}>{getCountdownDays(fakeDataCourtDate)}</Text>
            <Text style={styles.countdownText}>days</Text>
          </View>
          {/* map module */}
          <View style={[styles.module,
            { top: 590, left: 220, height: "20%", width: "40%", borderWidth: 1, borderColor: '#779391', overflow: "hidden" }
          ]}>
          {/* coordinates should be a variable */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          {/* coordinates should be a variable */}
          <Marker
            coordinate={{ latitude: 37.78825 , longitude: -122.4324 }}
            title={"Courthouse"}
          />
          </MapView>
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14, textAlign: "center"}}>Palo Alto Courthouse</Text>
            <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>123 Main St.,</Text>
            <Text style={{ color: "white", fontSize: 12, textAlign: "center" }}>Palo Alto, CA</Text>
          </View>
          </View>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  welcomeTextContainer: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#6F909C",
  },
  moodTextContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  moodText: {
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#6F909C",
  },
  moodWordText: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "#3F5C67",
  },
  module: {
    backgroundColor: "#85B0AE",
    borderWidth: 2,
    borderColor: "#779391",
    position: 'absolute',
    width: '90%',
    height: "20%",
    left: 20,
    right: 0,
    bottom: 0,
    borderRadius: 30,
  },
  countdownText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Helvetica",
  },
  countdownNumber: {
    color: "#fff",
    textAlign: "center",
    fontSize: 56,
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  dropShadow:  {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  map: {
    width: "100%",
    height: "70%",
    borderRadius: 0,
  },
});

export default HomeScreen;
