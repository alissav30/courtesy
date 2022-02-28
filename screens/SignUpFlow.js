import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const swoopBackground = require("./home_background.png");


const SignUpFlow = ({ navigation, setisSignUpFlow }) => {
  return (
      <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={swoopBackground} style={{width: '100%', height: '100%'}}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText} onPress={() => setisSignUpFlow(false)}>
              {/* Name needs to be a variable */}
              Sign Up Flow
            </Text>
          </View>
          <View style={styles.moodTextContainer}>
            <Text style={styles.moodText}>
              {/* Mood needs to be a variable */}
              Today you're feeling productive - woohoo!
            </Text>
          </View>
          {/* task module */}
          <TouchableOpacity style={[
            styles.module,
            styles.dropShadow,
            { top: 200, height: "20%" }
          ]}/>
          {/* call the court module */}
          <TouchableOpacity style={[
            styles.module,
            styles.dropShadow,
            { top: 380, height: "10%", borderRadius: '18px' }
          ]}/>
          {/* countdown module */}
          <View style={[styles.module,
            { top: 490, height: "20%", width: "40%", borderWidth: 1.5, borderColor: '#779391', justifyContent: "center"}
          ]}>
            <Text style={styles.countdownText}>you have</Text>
            <Text style={styles.countdownText}>court in</Text>
            {/* number needs to be a variable */}
            <Text style={styles.countdownNumber}>20</Text>
            <Text style={styles.countdownText}>days</Text>
          </View>
          {/* map module */}
          <View style={[styles.module,
            { top: 490, left: 220, height: "20%", width: "40%", borderWidth: 1.5, borderColor: '#779391' }
          ]}/>
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
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#6F909C",
  },
  moodTextContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  moodText: {
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#6F909C",
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
    fontSize: 24,
    fontFamily: "Avenir",
  },
  countdownNumber: {
    color: "#fff",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Avenir",
  },
  dropShadow:  {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
});

export default SignUpFlow;