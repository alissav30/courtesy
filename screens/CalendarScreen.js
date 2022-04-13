import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';


import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput
} from 'react-native';

const swoopBackground = require("./home_background.png");

const SignUpFlow = ({ navigation, setisSignUpFlow }) => {
    const [firstName, onChangeFirstName] = React.useState(null);
    const [courtDate, onChangeCourtDate] = React.useState(null);
    const [courtLocation, onChangeCourtLocation] = React.useState(null);

  return (
      <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText} onPress={() => setisSignUpFlow(false)}>
              {/* title */}
              {/* new comment */}
              Welcome to Courtesy!
            </Text>
            <Text style={styles.subtitleText}>
            We're excited to help you get ready for court!
            </Text>
          </View>
            {/* first name question */}
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>
                    What's your preferred first name?
            </Text>
            <SafeAreaView style={styles.textContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFirstName}
                    value={firstName}
                    placeholder=""
                />
            </SafeAreaView>
          </View>
            {/* court date question */}
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>
                    When's your court date?
            </Text>
            <View style={styles.container}>
                <CalendarPicker
                onDateChange={this.onCourtDateChange}
                />
                <View>
                    <TextInput
                        style={styles.secondInput}
                        onChangeText={onChangeCourtDate}
                        value={courtDate}
                        placeholder=""
                    />
                </View>
                <View>
                    <Text>SELECTED DATE:{ startDate }</Text>
                </View>
            </View>
            {/*<SafeAreaView style={styles.textContainer}>
                <TextInput
                    style={styles.secondInput}
                    onChangeText={onChangeCourtDate}
                    value={courtDate}
                    placeholder=""
                />
            </SafeAreaView>*/}
          </View>
            {/* location question */}
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>
                    Where is your court appointment?
            </Text>
            <SafeAreaView style={styles.textContainer}>
                <TextInput
                    style={styles.secondInput}
                    onChangeText={onChangeCourtLocation}
                    value={courtLocation}
                    placeholder=""
                />
            </SafeAreaView>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
    },
    subtitleText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 29,
        padding: 20,
        textAlign: "center",
        color: "#FFFFFF",
      },
    input: {
        height: 40,
        margin: 20,
        marginLeft: 40,
        marginRight: 40,
        borderWidth: 1,
        color: "#FFFFFF",
        padding: 10,
        borderColor: "#FFFFFF",
        fontSize:20,
        textAlign: "center",
    },
    secondInput: {
        height: 40,
        margin: 20,
        marginLeft: 40,
        marginRight: 100,
        borderWidth: 1,
        color: "#FFFFFF",
        padding: 10,
        borderColor: "#FFFFFF",
        fontSize:20,
        textAlign: "center",
    },
    textContainer: {
        flex: 1
    },
    questionText:{
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
    },
    questionBox: {
        top: 140,
        paddingBottom: 110,
    },
    container: {
        flex: 0.5,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
      },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  welcomeTextContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  moodTextContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
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
