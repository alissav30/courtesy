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
import TaskScreen from './TasksScreen';


const swoopBackground = require("./Message_Board_Background.png");

const TransportationTasksScreen = ({ navigation, currScreen, setCurrScreen, mood, selectedCategory, setSelectedCategory, transportationPlan, setTransportationPlan, setIsMoodPicker, courtDate, courtTime,courtLocation, child }) => {

  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }

  return (
            <View style={{ flex: 1 }}>
            <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
                <View>
                <TouchableOpacity style={[
                    { top: 80, left: 20, width: '25%', height: '22%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,}
                ]} onPress={() => setCurrScreen("tasks")}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View>
                <Text style={{ top: 30, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> let’s figure out how
                you’ll get to court!</Text>
                </View>
                <View style={{ flex: 0.8 }}>
                <View style={{ flex: 1, marginTop: 50, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.categoryModule}
                        onPress={() => setCurrScreen("resources")}>
                        <Text style={styles.categoryText}> access resources to help you get representation.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryModule}
                            onPress={() => navigation.navigate("Forum")}>
                        <Text style={styles.categoryText}> discuss transportation options with other courtesy users.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categoryModule}
                        onPress={() => setCurrScreen("makePlan")}>
                        <Text style={styles.categoryText}> make your plan! </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );

//  else if (nextScreen == "messageBoard") {
//      navigation.navigate('Forum')
//  }
//  else if (nextScreen == "resources") {
//    return (
//        <TransportationResourcesPage
//        navigation={navigation}
//        setSelectedCategory={setSelectedCategory}
//        currScreen={currScreen}
//        setCurrScreen={setCurrScreen}
//        selectedCategory={selectedCategory}
//        nextScreen={nextScreen}
//        transportationPlan={transportationPlan}
//        setTransportationPlan={setTransportationPlan}
//        mood={mood} 
//        setIsMoodPicker={setIsMoodPicker}
//        courtDate={courtDate} 
//        courtTime={courtTime} 
//        courtLocation={courtLocation}
//        child={child}/>
//    )
//}
//else if (nextScreen == "makePlan") {
//    return (
//        <MakeAPlan
//        currScreen={currScreen}
//        setCurrScreen={setCurrScreen}
//        navigation={navigation}
//        transportationPlan={transportationPlan}
//        setTransportationPlan={setTransportationPlan}
//        mood={mood} 
//        setIsMoodPicker={setIsMoodPicker}
//        courtDate={courtDate} 
//        courtTime={courtTime} 
//        courtLocation={courtLocation}
//        child={child}
//        />
//    )
//}
//else if (nextScreen == "last") {
//    return (
//        <TaskScreen 
//                mood={mood}
//                setSelectedCategory={setSelectedCategory}
//                selectedCategory={selectedCategory}
//                transportationPlan={transportationPlan}
//                setTransportationPlan={setTransportationPlan}
//        />
//    )
//}

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
