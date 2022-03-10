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
import TransportationTaskPage from "./TransportationTaskPage";
import TransportationResourcesPage from './TransportationResourcesPage';
import MakeAPlan from './MakeAPlan';


//import MessageBoardScreen from './screens/MessageBoardScreen';


const swoopBackground = require("./Message_Board_Background.png");

const TasksScreen = ({ navigation, mood, selectedCategory, setSelectedCategory, transportationPlan, setTransportationPlan, setIsMoodPicker, courtDate, courtTime,courtLocation, child }) => {
const [isTransportationTask, setIsTransportationTask] = React.useState(false)
const [currScreen, setCurrScreen] = React.useState("tasks")

  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }
  if (currScreen == "tasks") {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
            <Text style={{ top: 65, color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center' }}> Tasks </Text>
            <View style={{ flex: 0.75 }}>
                <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.dailyTasksModule}
                    onPress={() => setCurrScreen("transportation task")}>
                        <View style={styles.dailyTasksHeader}>
                            <Text style={styles.tasksText}> Task of the Day </Text>
                        </View>
                        <Text style={styles.subtasksText}> Take some time to consider your transportation options for court. </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.previousTasksModule}>
                        <View style={styles.previousTasksHeader}>
                            <Text style={styles.tasksText}> Previous Tasks </Text>
                        </View>
                        <Text style={styles.subtasksText}> None so far! </Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ImageBackground>
        </View>
    );
  }
    else if (currScreen == "transportation task"){
        return (
        <TransportationTaskPage 
            navigation={navigation}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            //nextScreen={nextScreen}
            setCurrScreen={setCurrScreen}
            currScreen={currScreen}
            transportationPlan={transportationPlan}
            setTransportationPlan={setTransportationPlan}
            mood={mood} 
            setIsMoodPicker={setIsMoodPicker}
            courtDate={courtDate} 
            courtTime={courtTime} 
            courtLocation={courtLocation}
            child={child}
            //setNextScreen={setNextScreen}
            />
        )
    }
    else if (currScreen == "resources") {
        return (
            <TransportationResourcesPage
            navigation={navigation}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            //nextScreen={nextScreen}
            transportationPlan={transportationPlan}
            setTransportationPlan={setTransportationPlan}
            mood={mood} 
            setIsMoodPicker={setIsMoodPicker}
            courtDate={courtDate} 
            courtTime={courtTime} 
            courtLocation={courtLocation}
            currScreen={currScreen}
            setCurrScreen={setCurrScreen}
            child={child}
            //setNextScreen={setNextScreen}
            />
        )
    }
    else if (currScreen == "makePlan") {
        return (
            <MakeAPlan
            navigation={navigation}
            transportationPlan={transportationPlan}
            setTransportationPlan={setTransportationPlan}
            mood={mood} 
            setIsMoodPicker={setIsMoodPicker}
            courtDate={courtDate} 
            courtTime={courtTime} 
            courtLocation={courtLocation}
            child={child}
            />
        )
    }

};

const styles = StyleSheet.create({
  dailyTasksModule: {
    backgroundColor: "#8AB5B2",
    borderWidth: 1,
    borderColor: "rgba(118, 138, 137, 0.5)",
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 14,
    height: 155,
    width: '90%',
    justifyContent: 'center',
  },
  previousTasksModule: {
    backgroundColor: "#8AB5B2",
    borderWidth: 1,
    borderColor: "rgba(118, 138, 137, 0.5)",
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 14,
    height: 135,
    width: '90%',
    justifyContent: 'center',
  },
  dailyTasksHeader: {
      backgroundColor: 'white',
  },
  previousTasksHeader: {
    backgroundColor: 'white',
    marginTop: 0
},
  tasksText: {
    color: '#8AB5B2',
    fontSize: 26,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop:10
  },
  subtasksText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 15
  }
});

export default TasksScreen;