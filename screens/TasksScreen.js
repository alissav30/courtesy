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
//import MessageBoardScreen from './screens/MessageBoardScreen';


const swoopBackground = require("./Message_Board_Background.png");

const TasksScreen = ({ navigation, mood, selectedCategory, setSelectedCategory }) => {
const [isTransportationTask, setIsTransportationTask] = React.useState(false)

  let moodKey = mood;
  if (moods.indexOf(mood) == -1) {
    moodKey = "other";
  }
  if (isTransportationTask == false) {
    return (
        <View style={{ flex: 1 }}>
          <ImageBackground source={swoopBackground} style={{width: '102%', height: '103%', left: -1}}>
            <Text style={{ top: 65, color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center' }}> TASKS </Text>
            <View style={{ flex: 0.75 }}>
                <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.dailyTasksModule}
                    onPress={() => setIsTransportationTask(true)}>
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
    else {
        return (<TransportationTaskPage 
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}/>)
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