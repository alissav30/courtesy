import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'


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

const SignUpFlow = ({ navigation, props }) => {
    const [firstName, onChangeFirstName] = React.useState("");
    const [courtDate, onChangeCourtDate] = React.useState("");
    const [courtLocation, onChangeCourtLocation] = React.useState("");
    const [courtTime, onChangeCourtTime] = React.useState("");
    console.warn(this.props)

  return (
      <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText} onPress={() => props.setisSignUpFlow(false)}>
              {/* title */}
              Welcome to Courtesy!
            </Text>
            <Text style={styles.subtitleText}>
            We're excited to help you get ready for court!
            </Text>
          </View>
          <View style={styles.questionBox1}>
            <View style={styles.textContainer}>
                {/* court date question */}
                <View>
                    <Text style={styles.questionText}>
                        When's your court date?
                    </Text>
                    <View style={styles.answerRow}>
                        <TextInput
                            style={styles.secondInput}
                            //type={'datetime'}
                            onChangeText={onChangeCourtLocation}
                            //options={{
                                //format: 'DD-MM-YYYY HH:mm:ss'
                            //}}
                            //defaultValue={moment().format("yyyy-mm-dd")}  
                            value={courtLocation}
                            placeholder=""
                        />
                        <Ionicons style={styles.icon} name="location-outline" size={45} color="white" />
                    </View>
                </View>
            </View>
          </View>
          {/* submit button */}
            <View style={styles.submitButton}>
                <TouchableOpacity
                    style={[
                    styles.backModule,
                    ]}
                    //onPress={() => navigation.navigate(SignUpFlowNext)}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                    styles.nextModule,
                    ]}
                    //onPress={() => navigation.navigate(SignUpFlowNext)}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  );
};


const styles = StyleSheet.create({
    welcomeText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 36,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
    },
    subtitleText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 29,
        padding: 20,
        textAlign: "center",
        color: "#FFFFFF",
        paddingBottom: 50,
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
        //flex: 1
    },
    questionText:{
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
    },
    questionBox1: {
        paddingTop: '70%',
        paddingBottom: '70%',
    },
    questionBox2: {
        paddingTop: 80,
        //paddingBottom: 110,
    },
    icon: {
        textAlign: "right",
        paddingRight: 40,
        //paddingTop: 13,
    },
    welcomeTextContainer: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        bottom: 50,
        paddingBottom: 80,
        alignItems: 'center',
      },
      submitButton: {
        position: 'absolute',
        bottom:0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between"
        //justifyContent: 'center',
        //alignItems: 'center',
        //textAlign: "center",
      },
      buttonText: {
        color: '#85B0AE',
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 18,
    },
    //  answerRow: {
    //      display: flex,
    //      flexDirection: row
    //  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  moodTextContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  backModule: {
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    position: 'absolute',
    //width: '90%',
    //height: "90%",
    left: 30,
    //right: 40,
    bottom: 40,
    borderRadius: 10,
    //backgroundColor: "#FFFFFF",
    //borderRadius: 50,
    width: 160,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    //textAlign: "center",
    //marginRight: 30,
    //marginLeft: 30
  },
  nextModule: {
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    position: 'absolute',
    //width: '90%',
    //height: "90%",
    left: 220,
    //right: 20,
    bottom: 40,
    borderRadius: 10,
    //backgroundColor: "#FFFFFF",
    //borderRadius: 50,
    width: 160,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    //textAlign: "center",
    //marginRight: 30,
    //marginLeft: 30,
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