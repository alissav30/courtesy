import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SignUpFlow from './screens/SignUpFlow';
import MoodPicker from './screens/MoodPicker';
import MyPlanScreen from './screens/MyPlanScreen';
import MessageBoardScreen from './screens/MessageBoardScreen';
import TasksScreen from './screens/TasksScreen';
import MakeAPost from './screens/MakeAPost';
import SettingsScreen from './screens/Settings';

const styles = StyleSheet.create({
  dropShadow:  {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
    const [isSignUpFlow, setisSignUpFlow] = useState(false);
    const [isMoodPicker, setIsMoodPicker] = useState(false);

    const [mood, setMood] = useState('productive');

    const [firstName, onChangeFirstName] = useState("");
    const [courtDate, onChangeCourtDate] = useState("");
    const [courtLocation, onChangeCourtLocation] = useState('');
    const [courtStreet, onChangeCourtStreet] = useState('');
    const [courtCity, onChangeCourtCity] = useState('');
    const [courtState, onChangeCourtState] = useState('');
    const [courtTime, onChangeCourtTime] = useState("");
    const [child, onChangeChild] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('none');

    const [car, onChangeCar] = React.useState(false)
    const [legalRep, onChangeLegalRep] = React.useState(false)

    //const [transportationPlanTitle, onChangeTransportationPlanTitle] = React.useState("")

    const [transportationPlan, setTransportationPlan] = React.useState("Start your plan!")
    const [childCarePlan, setChildCarePlan] = React.useState("Start your plan!")
    const [legalRepPlan, setLegalRepPlan] = React.useState("Start your plan!")

    const [navScreen, setNavScreen] = React.useState("my plan")
    const [currScreen, setCurrScreen] = React.useState("tasks")

    //if (car == true) {
    //    setTransportationPlan("Have a car!")
    //}
    //if (child == false) {
    //    setChildCarePlan("No child!")
    //}
    //if (legalRep == true) {
    //    setLegalRepPlan("I know what legal representation I'll use.")
    //}
    const [longitude, setLongitude] = React.useState(0);
    const [latitude, setLatitude] = React.useState(0);

    if (isSignUpFlow) {
        return  (
        <SignUpFlow
            firstName={firstName}
            onChangeFirstName={onChangeFirstName}
            courtDate={courtDate}
            onChangeCourtDate={onChangeCourtDate}
            // courtLocation={courtLocation}
            // onChangeCourtLocation={onChangeCourtLocation}
            courtStreet={courtStreet}
            onChangeCourtStreet={onChangeCourtStreet}
            courtCity={courtCity}
            onChangeCourtCity={onChangeCourtCity}
            courtState={courtState}
            onChangeCourtState={onChangeCourtState}
            courtTime={courtTime}
            onChangeCourtTime={onChangeCourtTime}
            setisSignUpFlow={setisSignUpFlow}
            isMoodPicker={isMoodPicker}
            setIsMoodPicker={setIsMoodPicker}
            mood={mood}
            setMood={setMood}
            child={child}
            onChangeChild={onChangeChild}
            car={car}
            onChangeCar={onChangeCar}
            legalRep={legalRep}
            onChangeLegalRep={onChangeLegalRep}
            title={{title: 'Sign Up'}}/>
        );
    } else if (isMoodPicker) {
      return (
        <MoodPicker mood={mood} setIsMoodPicker={setIsMoodPicker} setisSignUpFlow={setisSignUpFlow} setMood={setMood} />
      );
    } else {
    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                return (
                    <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={size * 1.1}
                    color={color}
                    />
                );
                } else if (route.name === 'Tasks') {
                return (
                    <Ionicons
                    name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
                    size={size * 1.1}
                    color={color}
                    />
                );

                // Not sure if this is the best way to handle this, but I don't want
                // text under the bookmark icon so it seems like the best solution is
                // to name this route " " so no text shows up
              } else if (route.name === ' ') {
                return (
                    <View style={[{
                    backgroundColor: 'white',
                    width: "90%",
                    height: "175%",
                    borderRadius: "100%",
                    display: "flex",
                    zIndex: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: "black",
                    boxShadow: "0px 0px 5px #4F403D",

                    }, styles.dropShadow]}>
                    <Ionicons
                        name={focused ? 'bookmark' : 'bookmark-outline'}
                        size={size * 1.5}
                        color={"#779391"}
                    />
                    <Text style={{ color: '#779391', fontSize: 10 }}>My Plan</Text>
                    </View>
                );
                } else if (route.name === 'Forum') {
                return (
                    <Ionicons
                    name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                    size={size * 1.1}
                    color={color}
                    />
                );
                } else if (route.name === 'Settings') {
                return (
                    <Ionicons
                    name={focused ? 'settings' : 'settings-outline'}
                    size={size * 1.1}
                    color={color}
                    />
                );
                }
            },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor: '#779391',
            tabBarInactiveBackgroundColor: '#779391',
            tabBarLabelStyle: { marginBottom: 7 },
            tabBarStyle: { marginBottom: -30, borderTopWidth: 0, shadowColor: '#000', shadowOffset: {width: 0, height: -2}, shadowOpacity: 0.4, shadowRadius: 3, height: 90},
            })}
        >
            <Tab.Screen name="Home">
              {props => <HomeScreen {...props} mood={mood} firstName={firstName} courtDate={courtDate} courtStreet={courtStreet} courtCity={courtCity} courtState={courtState} setIsMoodPicker={setIsMoodPicker } longitude={longitude} latitude={latitude} setLongitude={setLongitude} setLatitude={setLatitude} />}
            </Tab.Screen>
            <Tab.Screen name="Tasks" >
            {props => <TasksScreen {...props}
                mood={mood}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                transportationPlan={transportationPlan}
                setTransportationPlan={setTransportationPlan}
                legalRepPlan={legalRepPlan}
                setLegalRepPlan={setLegalRepPlan}
                setIsMoodPicker={setIsMoodPicker}
                courtLocation={courtLocation}
                courtDate={courtDate}
                courtTime={courtTime}
                child={child}
                navScreen={navScreen}
                setNavScreen={setNavScreen}
                currScreen={currScreen}
                setCurrScreen={setCurrScreen}
            />}
              </Tab.Screen>
            <Tab.Screen name=" ">
              {props => <MyPlanScreen {...props} mood={mood} setIsMoodPicker={setIsMoodPicker}
                        courtDate={courtDate} courtTime={courtTime}
                        child={child} car={car} legalRep={legalRep} transportationPlan={transportationPlan}
                        setTransportationPlan={setTransportationPlan} childCarePlan={childCarePlan}
                        setChildCarePlan={setChildCarePlan} legalRepPlan={legalRepPlan}
                        setLegalRepPlan={setLegalRepPlan}
                        courtStreet={courtStreet} courtCity={courtCity} courtState={courtState}
                        navScreen={navScreen} setNavScreen={setNavScreen}
                        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                        currScreen={currScreen} setCurrScreen={setCurrScreen}
                         />}
            </Tab.Screen>
            <Tab.Screen name="Forum">
              {props => <MessageBoardScreen
                {...props}
                firstName={firstName}
                courtDate={courtDate}
                courtTime={courtTime}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />}
            </Tab.Screen>
            <Tab.Screen name="Settings">
                {props => <SettingsScreen
                  {...props}
                  mood={mood}
                  firstName={firstName}
                  courtDate={courtDate}
                  onChangeCourtDate={onChangeCourtDate}
                  setIsMoodPicker={setIsMoodPicker }
                  courtTime={courtTime}
                  onChangeCourtTime={onChangeCourtTime}
                  courtStreet={courtStreet}
                  onChangeCourtStreet={onChangeCourtStreet}
                  courtCity={courtCity}
                  onChangeCourtCity={onChangeCourtCity}
                  courtState={courtState}
                  onChangeCourtState={onChangeCourtState}
                  />}
            </Tab.Screen>
        </Tab.Navigator>
        </NavigationContainer>
    );
    }
}
