import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { getCountdownDays, homeScreenMoods, moods } from '../utils';
import LegalTasksScreen from './LegalTaskPage';
import LegalResourcesPage from './LegalResourcesScreen';
import TransportationTaskPage from "./TransportationTaskPage";
import TransportationResourcesPage from './TransportationResourcesPage';
import MakeAPlan from './MakeTransportationPlan';
import ComparePricing from "./ComparePricingScreen"
import PubTranOptsScreen from './PubTranOptsScreen';
import Discounts from './DiscountsScreen';
import CarForHire from './CarForHireResourcesScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    Card,
  } from 'react-native-elements';
//import MessageBoardScreen from './screens/MessageBoardScreen';


const tasksBackground = require("./tasks_background.png");

const TasksScreen = ({ navigation, fromTasks, setFromTasks, currScreen, setCurrScreen, taskCompleted, setTaskCompleted, navScreen, setNavScreen, mood, selectedCategory, setSelectedCategory, legalPlan, setLegalPlan, transportationPlan, setTransportationPlan, setIsMoodPicker, courtDate, courtTime, child }) => {
const [isTransportationTask, setIsTransportationTask] = React.useState(false)

  return (
    <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={tasksBackground} style={{width: '100%', height: '110%'}}>
            <Text style={[styles.taskHeader]}>Tasks</Text>

            <ScrollView style={{flex: 1}}>
                <View style={[styles.container, styles.dropShadow]}>
                    <View style={[styles.card, styles.dropShadow,]}>
                            <View style={styles.topHalf}>
                                <View styles={[styles.cardTitleContainer]}>
                                        <Text style={[styles.cardTitle]}>task of the day</Text>
                                </View>
                            </View>
                            <View style={styles.bottomHalf}>
                                <View style={styles.taskCardContentWrapper}>
                                  <View style={styles.taskCardContent}>
                                        <MaterialCommunityIcons name={taskCompleted ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} color={'white'} size={24}/>
                                        {/* <CheckBox /> */}
                                        <View style={[styles.task]}>
                                            <Text style={taskCompleted ? styles.completedTaskText : styles.taskText}>
                                                Take some time to explore transportation options
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.exploreButton}
                                    onPress={() => {
                                        navigation.navigate(" ")
                                        setNavScreen("transportationExplore");
                                        setTaskCompleted(true);
                                        setFromTasks(true)
                                    }}>
                                        <View>
                                            <Text style={[{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', color:"#fff" }, styles.underline]}> EXPLORE OPTIONS ??? </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                </View>

                <View style={[styles.container]}>
                    <View style={[styles.card, styles.dropShadow,]}>
                            <View style={styles.topHalfPast}>
                                <View styles={[styles.cardTitleContainer]}>
                                        <Text style={[styles.cardTitle, {color: "#fff"}]}>previous tasks</Text>
                                </View>
                            </View>
                            <View style={styles.bottomHalf}>
                                <View style={styles.taskCardContentWrapper}>
                                    <View style={[styles.taskCardContent, { justifyContent: 'center' }]}>
                                        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 16 }}> No past tasks yet </Text>
                                    </View>
                                </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
      </View>
    );
    //else if (currScreen == "transportation task"){
    //    return (
    //    <TransportationTaskPage
    //        navigation={navigation}
    //        setSelectedCategory={setSelectedCategory}
    //        selectedCategory={selectedCategory}
    //        //nextScreen={nextScreen}
    //        setCurrScreen={setCurrScreen}
    //        currScreen={currScreen}
    //        transportationPlan={transportationPlan}
    //        setTransportationPlan={setTransportationPlan}
    //        mood={mood}
    //        setIsMoodPicker={setIsMoodPicker}
    //        courtDate={courtDate}
    //        courtTime={courtTime}
    //        child={child}
    //        navScreen={navScreen}
    //        setNavScreen={setNavScreen}
    //        //setNextScreen={setNextScreen}
    //        />
    //    )
    //}
    //else if (currScreen == "resources") {
    //    return (
    //        <TransportationResourcesPage
    //        navigation={navigation}
    //        setSelectedCategory={setSelectedCategory}
    //        selectedCategory={selectedCategory}
    //        //nextScreen={nextScreen}
    //        transportationPlan={transportationPlan}
    //        setTransportationPlan={setTransportationPlan}
    //        mood={mood}
    //        setIsMoodPicker={setIsMoodPicker}
    //        courtDate={courtDate}
    //        courtTime={courtTime}
    //        currScreen={currScreen}
    //        setCurrScreen={setCurrScreen}
    //        child={child}
    //        //setNextScreen={setNextScreen}
    //        />
    //    )
    //}
    //else if (currScreen == "makePlan") {
    //    return (
    //        <MakeAPlan
    //        navigation={navigation}
    //        transportationPlan={transportationPlan}
    //        setTransportationPlan={setTransportationPlan}
    //        mood={mood}
    //        setIsMoodPicker={setIsMoodPicker}
    //        courtDate={courtDate}
    //        courtTime={courtTime}
    //        child={child}
    //        currScreen={currScreen}
    //        setCurrScreen={setCurrScreen}
    //        />
    //    )
    //}
    //else if (currScreen == "compare pricing") {
    //    return (
    //        <ComparePricing
    //        navigation={navigation}
    //        transportationPlan={transportationPlan}
    //        setTransportationPlan={setTransportationPlan}
    //        mood={mood}
    //        setIsMoodPicker={setIsMoodPicker}
    //        courtDate={courtDate}
    //        courtTime={courtTime}
    //        child={child}
    //        currScreen={currScreen}
    //        setCurrScreen={setCurrScreen}
    //        />
    //    )
    //}
    //else if (currScreen == "public transport options") {
    //    return (
    //        <PubTranOptsScreen
    //    navigation={navigation}
    //    transportationPlan={transportationPlan}
    //    setTransportationPlan={setTransportationPlan}
    //    mood={mood}
    //    setIsMoodPicker={setIsMoodPicker}
    //    courtDate={courtDate}
    //    courtTime={courtTime}
    //    child={child}
    //    currScreen={currScreen}
    //    setCurrScreen={setCurrScreen}
    //    />
    //    )
    //}
    //else if (currScreen == "discounts") {
    //    return (
    //    <Discounts
    //    navigation={navigation}
    //    transportationPlan={transportationPlan}
    //    setTransportationPlan={setTransportationPlan}
    //    mood={mood}
    //    setIsMoodPicker={setIsMoodPicker}
    //    courtDate={courtDate}
    //    courtTime={courtTime}
    //    child={child}
    //    currScreen={currScreen}
    //    setCurrScreen={setCurrScreen}
    //    />
    //    )
    //}
    //else if (currScreen == "car-for-hire") {
    //    return (
    //    <CarForHire
    //    navigation={navigation}
    //    transportationPlan={transportationPlan}
    //    setTransportationPlan={setTransportationPlan}
    //    mood={mood}
    //    setIsMoodPicker={setIsMoodPicker}
    //    courtDate={courtDate}
    //    courtTime={courtTime}
    //    child={child}
    //    currScreen={currScreen}
    //    setCurrScreen={setCurrScreen}
    //    selectedCategory={selectedCategory}
    //    setSelectedCategory={setSelectedCategory}
    //    />
    //    )
    //}

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
    borderRadius: 10,
    height: 155,
    width: '90%',
    justifyContent: 'center',
  },
  previousTasksModule: {
    backgroundColor: "#8AB5B2",
    borderWidth: 1,
    borderColor: "rgba(118, 138, 137, 0.5)",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
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
  },
      taskHeader: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 28,
        color: '#6B7E7E',
        textAlign: 'center',
        letterSpacing: 0.4,
        marginTop: 70,
        marginBottom: 20,
    },
    card: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 30,
        width: '85%',
        //padding: 10,
        //borderRadius: 30,
        //backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInnerStyle: {
        width: '100%',
        height: '100%',
    },
    cardTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center'
    },
    cardTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color: "#788E96",
        fontSize: 18,
        fontWeight: '600',
    },
    taskCardContent: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    checkbox: {
        borderWidth: 1,
        width: 20,
        height: 20,
        borderColor: "#fff"
    },
    task: {
        marginLeft: 20,
    },
    exploreButton: {
        marginTop: 20,
    },
    bottomHalf: {
        backgroundColor: "#85B0AE",
        padding: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    topHalf: {
        backgroundColor: '#fff',
        paddingBottom: 20,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    topHalfPast: {
        backgroundColor: '#939393',
        paddingBottom: 20,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    dropShadow:  {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    taskText: {
      color: "#fff", fontSize: 18,
    },
    completedTaskText: {
      color: "#fff", fontSize: 18, textDecorationLine: 'line-through',
    }
});

export default TasksScreen;
