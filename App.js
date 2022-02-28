import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

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

function MyPlanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Plan!</Text>
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
  return (
    <NavigationContainer style={{boxShadow: "0px -3px 5px rgba(0, 0, 0, 0.4)"}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Tasks') {
              return (
                <Ionicons
                  name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
                  size={size}
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
                  height: "180%",
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
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#779391',
          tabBarInactiveBackgroundColor: '#779391',
          tabBarStyle: {boxShadow: "0px -3px 5px rgba(0, 0, 0, 0.4)"},
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name=" " component={MyPlanScreen} />
        <Tab.Screen name="Forum" component={MessageBoardScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}