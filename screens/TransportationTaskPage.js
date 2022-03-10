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
import MessageBoardScreen from './MessageBoardScreen';
import TransportationResourcesPage from './TransportationResourcesPage';
import MakeAPlan from './MakeAPlan';


const swoopBackground = require("./Message_Board_Background.png");

const TransportationTasksScreen = ({ navigation, mood, selectedCategory, setSelectedCategory, nextScreen, setNextScreen, transportationPlanTitle, onChangeTransportationPlanTitle, mood, setIsMoodPicker, courtDate, courtTime,courtLocation, childCare }) => {

  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }

  if (nextScreen == "") {
    return (
            <View style={{ flex: 1 }}>
            <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
                <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> let’s figure out how
                you’ll get to court!</Text>
                <View style={{ flex: 0.75 }}>
                <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.categoryModule}
                        onPress={() => setNextScreen("resources")}>
                        <Text style={styles.categoryText}> access resources to help you get representation.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryModule}
                            onPress={() => setNextScreen("messageBoard")}>
                        <Text style={styles.categoryText}> discuss transportation options with other courtesy users.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryModule}
                        onPress={() => setNextScreen("makePlan")}>
                        <Text style={styles.categoryText}> make your plan! </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            </View>
        );
  }
  else if (nextScreen == "messageBoard") {
      return (
          <MessageBoardScreen
          selectedCategory={'transportation'}
          setSelectedCategory={setSelectedCategory}/>
      )
  }
  else if (nextScreen == "resources") {
    return (
        <TransportationResourcesPage/>
    )
}
else if (nextScreen == "makePlan") {
    return (
        <MakeAPlan
        transportationPlanTitle={transportationPlanTitle}
        onChangeTransportationPlanTitle={onChangeTransportationPlanTitle}
        mood={mood} 
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate} 
        courtTime={courtTime} 
        courtLocation={courtLocation}
        childCare={childCare}
        />
    )
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

export default TransportationTasksScreen;
