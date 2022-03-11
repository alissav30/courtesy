import * as React from 'react';
import Geocode from 'react-geocode';
import axios from 'axios';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
// import Geonames from 'geonames.js';
import { getCountdownDays, homeScreenMoods, moods } from '../utils';
import { Linking } from 'react-native'

// const geonames = Geocode({
//   username: 'courtesy',
//   lan: 'en',
//   encoding: 'JSON'
// });

const swoopBackground = require("./home_background.png");

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0
    };
  }

  async componentDidMount() {
    Geocode.setApiKey("AIzaSyDzV35DFTwO9PmKmQyqr3TBNqvZ2GNYg6E");
    Geocode.setLocationType("ROOFTOP");
    let address = `${this.props.courtStreet}, ${this.props.courtCity}, ${this.props.courtState}`;
    if (!this.props.courtStreet || !this.props.courtCity || !this.props.courtState) {
      address = '650 Mayfield Ave, Stanford, CA';
    }
    const coordinates = await Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        // this.setState({ longitude: lng });
        // this.setState({ latitude: lat });
        // console.log(lat, lng);
        return { lng: lng, lat: lat };
      },
      (error) => {
        console.error(error);
      }
    );
    this.setState({ longitude: coordinates.lng, latitude: coordinates.lat });
  }

  render() {
    const { navigation, mood, firstName, courtDate, courtStreet, courtCity, courtState, setIsMoodPicker } = this.props;
    const { latitude, longitude } = this.state;

    const fakeDataCourtDate = new Date(courtDate);
    const name = firstName;

    let moodKey = mood;
    if (moods.indexOf(mood) == -1) {
      moodKey = "other";
    }

    if (longitude == 0) {
      return (null);
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
                > {mood.toLowerCase() + ' '}</Text>
                <Text style={styles.moodText}> {homeScreenMoods[moodKey].headerText} </Text>
              </View>
            </View>
            }
            {/* task module */}
            <TouchableOpacity
              style={[
                styles.module,
                styles.dropShadow,
                { top: 260, height: "24%" }
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
                <Text style={[{ color: 'white', fontWeight: 'bold', fontSize: 24 }]}> GO </Text>
                <Ionicons name={'arrow-forward'} color={'white'} size={30}/>
              </View>
            </TouchableOpacity>
            {/* call the court module */}
            <TouchableOpacity
              style={[
                styles.module,
                styles.dropShadow,
                { top: 470, height: "10%", borderRadius: '18px', justifyContent: 'center' }
              ]}
              onPress={()=>{Linking.openURL('tel:(408) 556-3000')}}
              >
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
                latitude: Number(latitude),
                longitude: Number(longitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
            {/* coordinates should be a variable */}
            <Marker
              coordinate={{ latitude: Number(latitude), longitude: Number(longitude)}}
              title={"Courthouse"}
            />
            </MapView>
            <View style={{ alignItems: "center" }}>
              <Text numberOfLines={1} style={{ color: "white", fontWeight: "bold", fontSize: 12, textAlign: "center"}}>Your Courthouse:</Text>
              <Text numberOfLines={1} style={{ color: "white", fontSize: 11, textAlign: "center" }}>{courtStreet},</Text>
              <Text numberOfLines={1} style={{ color: "white", fontSize: 11, textAlign: "center" }}>{courtCity}, {courtState}</Text>
            </View>
            </View>
          </ImageBackground>
        </View>
    );
  }
}



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
    fontSize: 22,
    lineHeight: 29,
    textAlign: "center",
    color: "#6F909C",
  },
  moodWordText: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontStyle: "italic",
    fontSize: 22,
    lineHeight: 29,
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "#3F5C67",
    // width: '35%',
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
    fontSize: 20,
    fontFamily: "Helvetica",
  },
  countdownNumber: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50,
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
  underline: {textDecorationLine: 'underline'},
});

export default HomeScreen;
