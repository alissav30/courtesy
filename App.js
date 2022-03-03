import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SignUpFlow from './screens/SignUpFlow';
import MoodPicker from './screens/MoodPicker';
import MyPlanScreen from './screens/MyPlanScreen';


const styles = StyleSheet.create({
  dropShadow:  {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

function TaskScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tasks!</Text>
    </View>
  );
}

function MoodsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tasks!</Text>
    </View>
  );
}

function MessageBoardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Message Board!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
    const [isSignUpFlow, setisSignUpFlow] = useState(false);
    const [isMoodPicker, setIsMoodPicker] = useState(false);

    const [mood, setMood] = useState('productive');

    const [firstName, onChangeFirstName] = useState("");
    const [courtDate, onChangeCourtDate] = useState("");
    const [courtLocation, onChangeCourtLocation] = useState("");
    const [courtTime, onChangeCourtTime] = useState("");
    const [childCare, onChangeChildCare] = useState("");



    // hook variable thing
    if (isSignUpFlow) {
        return  (
        <SignUpFlow 
            firstName={firstName} 
            onChangeFirstName={onChangeFirstName}
            courtDate={courtDate}
            onChangeCourtDate={onChangeCourtDate}
            courtLocation={courtLocation}
            onChangeCourtLocation={onChangeCourtLocation}
            courtTime={courtTime}
            onChangeCourtTime={onChangeCourtTime}
            setisSignUpFlow={setisSignUpFlow} 
            title={{title: 'Sign Up'}}/>
        );
    } else if (isMoodPicker) {
      return (
        <MoodPicker mood={mood} setIsMoodPicker={setIsMoodPicker} setMood={setMood} />
      );
    } else {
    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
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
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                mood={mood}
                setIsMoodPicker={setIsMoodPicker}
                firstName={firstName} 
                courtDate={courtDate}
                courtLocation={courtLocation}
                courtTime={courtTime}
                />
            <Tab.Screen 
                name="Tasks" 
                component={TaskScreen} 
                firstName={firstName} 
                courtDate={courtDate}
                courtLocation={courtLocation}
                courtTime={courtTime}
            />
            <Tab.Screen 
                name=" " 
                component={MyPlanScreen} 
                firstName={firstName} 
                courtDate={courtDate}
                courtLocation={courtLocation}
                courtTime={courtTime}
                childCare={childCare}
            />
            <Tab.Screen 
                name="Forum" 
                component={MessageBoardScreen} 
                firstName={firstName} 
                courtDate={courtDate}
                courtLocation={courtLocation}
                courtTime={courtTime}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                firstName={firstName} 
                courtDate={courtDate}
                courtLocation={courtLocation}
                courtTime={courtTime}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
    }
}
