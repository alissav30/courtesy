import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'
import SignUpFlowNext from './SignUpFlow2';
import * as Progress from 'react-native-progress';
//import Modal from "react-native-modal";
import { MaterialIcons } from '@expo/vector-icons'; 

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { getCountdownDays, homeScreenMoods, moods } from '../utils';


const xCoordinates = [20, 150, 284, 30, 160, 284, 20, 150, 280, 20, 280];
const yCoordinates = [30, -15, -185, -160, -195, -380, -350, -370, -550, -530, -640];



import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';

import { CheckBox } from 'react-native-elements'



const swoopBackground = require("./home_background.png");

const SignUpFlow = ({ navigation, props, setisSignUpFlow }) => {
    const [firstName, onChangeFirstName] = React.useState("");
    const [courtDate, onChangeCourtDate] = React.useState("");
    const [mood, setMood] = React.useState('productive');
    const [isMoodPicker, setIsMoodPicker] = React.useState(false);


    const [courtLocation, onChangeCourtLocation] = React.useState("");
    const [courtTime, onChangeCourtTime] = React.useState("");
    const [signUpScreenNumber, onChangeSignUpScreenNumber] = React.useState(1)
    const [childCare, onChangeChildCare] = React.useState(false)
    const [car, onChangeCar] = React.useState(false)
    const [legalRep, onChangeLegalRep] = React.useState(false)

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [isCustomMoodScreen, setIsCustomMoodScreen] = React.useState(false);
    const [customMood, setCustomMood] = React.useState('');

    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const MoodBubble = ({ mood, index, setMood, setIsMoodPicker, setIsCustomMoodScreen }) => {
        return (
          <TouchableOpacity onPress={() => {
            if (mood !== "other...") {
              setMood(mood.toLowerCase());
              setIsMoodPicker(false);
              setisSignUpFlow(false);
            } else {
              setIsCustomMoodScreen(true);
            }
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#8DA4A3',
              width: 110,
              height: 110,
              left: xCoordinates[index],
              top: yCoordinates[index],
              position: 'fixed',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}>
              <Text style={{ color: 'white', fontWeight: '500' }}> {mood} </Text>
            </View>
          </TouchableOpacity>
        );
      };

    
    if (signUpScreenNumber == 1) {
    return (
      <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>
              {/* title */}
              Welcome to Courtesy!
            </Text>
            <Text style={styles.subtitleText}>
            We're excited to help you get ready for court!
            </Text>
            {/*<View onPress={()=>setIsModalVisible(!isModalVisible)}>
                <MaterialIcons style={styles.privacy} name="privacy-tip" size={40} color="white"/>
            </View>*/}
            {/*<Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }} justifyContent="center">
                    <Text style={styles.modalText}>We will not share your personal data or information with anyone. We are simply using these questions to guide your experience.</Text>
                </View>
            </Modal>*/}
            <Progress.Bar progress={0.2} width={200} color="white" />
          </View>
          <View style={styles.questionBox1}>
            <View style={styles.textContainer}>
                {/* first name question */}
                <View>
                    <View justifyContent="center" alignItems="center">
                        <Text style={styles.questionText}>
                            What's your preferred first name?
                        </Text>
                        {/*<Ionicons name="information-circle-outline" size={30} color="white" paddingTop={30}/>*/}
                    </View>
                    <TextInput
                        style={styles.input}
                        //onChangeText={onChangeFirstName}
                        onChangeText={(text) => onChangeFirstName({text})}
                        value={firstName}
                        placeholder=""
                    />
                </View>
            </View>
          </View>
          {/* submit button */}
          <View style={styles.submitButton}>
            <TouchableOpacity
                style={[
                styles.module,
                ]}
                onPress={() => onChangeSignUpScreenNumber(2)}
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
    }
    if (signUpScreenNumber == 2) {
        return (
            <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
                <View style={styles.welcomeTextContainer2}>
                  <Text style={styles.welcomeText2}>
                    {/* title */}
                    Courtesy
                  </Text>
                  {/*<Text style={styles.subtitleText}>
                  We're excited to help you get ready for court!
                  </Text>*/}
                  <Progress.Bar progress={0.4} width={200} color="white" />
                </View>
                <View style={styles.questionBox1}>
                  <View style={styles.textContainer}>
                      {/* court date question */}
                      <View>
                          <Text style={styles.questionText}>
                              When's your court date?
                          </Text>
                          <View style={styles.answerRow}>
                          <TextInputMask
                            style={styles.input}
                            //refInput={(ref) => courtDate = ref}
                            value={courtDate}
                            onChangeText={onChangeCourtDate}
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                        />
                            {/*<Ionicons style={styles.icon} name="calendar-outline" size={45} color="white" />*/}
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
                          onPress={() => onChangeSignUpScreenNumber(1)}
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
                          onPress={() => onChangeSignUpScreenNumber(3)}
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
    }
    if (signUpScreenNumber == 3) {
        return (
            <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
                <View style={styles.welcomeTextContainer2}>
                  <Text style={styles.welcomeText2}>
                    {/* title */}
                    Courtesy
                  </Text>
                  {/*<Text style={styles.subtitleText}>
                  We're excited to help you get ready for court!
                  </Text>*/}
                  <Progress.Bar progress={0.6} width={200} color="white" />
                </View>
                <View style={styles.questionBox1}>
                  <View style={styles.textContainer}>
                      {/* court date question */}
                      <View>
                          <Text style={styles.questionText}>
                              What time is your court appointment?
                          </Text>
                          <View style={styles.answerRow}>
                                <TextInputMask
                                    style={styles.input}
                                    //refInput={(ref) => courtDate = ref}
                                    value={courtTime}
                                    onChangeText={onChangeCourtTime}
                                    type={'datetime'}
                                    options={{
                                        format: 'hh:mm'
                                    }}
                                />
                              {/*<Ionicons style={styles.icon} name="location-outline" size={45} color="white" />*/}
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
                          onPress={() => onChangeSignUpScreenNumber(2)}
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
                          onPress={() => onChangeSignUpScreenNumber(4)}
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
    }
    if (signUpScreenNumber == 4) {
        return (
            <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
                <View style={styles.welcomeTextContainer2}>
                  <Text style={styles.welcomeText2}>
                    {/* title */}
                    Courtesy
                  </Text>
                  {/*<Text style={styles.subtitleText}>
                  We're excited to help you get ready for court!
                  </Text>*/}
                  <Progress.Bar progress={0.8} width={200} color="white" />
                </View>
                <View style={styles.questionBox1}>
                  <View style={styles.textContainer}>
                      {/* court date question */}
                      <View>
                          <Text style={styles.questionText}>
                              Where is your court appointment?
                          </Text>
                          <View style={styles.answerRow}>
                              <TextInput
                                  style={styles.input}
                                  //type={'datetime'}
                                  onChangeText={onChangeCourtLocation}
                                  //options={{
                                      //format: 'DD-MM-YYYY HH:mm:ss'
                                  //}}
                                  //defaultValue={moment().format("yyyy-mm-dd")}  
                                  value={courtLocation}
                                  placeholder=""
                              />
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
                          onPress={() => onChangeSignUpScreenNumber(3)}
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
                          onPress={() => onChangeSignUpScreenNumber(5)}
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
    }
    if (signUpScreenNumber == 5) {
        return (
            <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
                <View style={styles.welcomeTextContainer2}>
                  <Text style={styles.welcomeText2}>
                    {/* title */}
                    Courtesy
                  </Text>
                  {/*<Text style={styles.subtitleText}>
                  We're excited to help you get ready for court!
                  </Text>*/}
                  <Progress.Bar progress={1.0} width={200} color="white" />
                </View>
                <View style={styles.questionBox5}>
                  <View style={styles.textContainer}>
                      {/* court date question */}
                      <View>
                          <Text style={styles.questionText}>
                              Which of the following apply to you?
                          </Text>
                          <View style={styles.checkboxContainer}>
                              <CheckBox
                                  //center
                                  title="I have children"
                                  checked={childCare}
                                  onPress={() => onChangeChildCare(!childCare)}
                                  //value={childCare}
                                  //onValueChange={onChangeChildCare}
                                  style={styles.checkbox}
                                  checkedColor="#fff"
                                  containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                  textStyle={{
                                      color: '#fff',
                                      fontSize: 18
                                  }}
                                  />
                          </View>
                          <View style={styles.checkboxContainer}>
                              <CheckBox
                                  //center
                                  title="I have a car"
                                  checked={car}
                                  onPress={() => onChangeCar(!car)}
                                  //value={childCare}
                                  //onValueChange={onChangeChildCare}
                                  style={styles.checkbox}
                                  checkedColor="#fff"
                                  containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                  textStyle={{
                                      color: '#fff',
                                      fontSize: 18
                                  }}
                                  />
                          </View>
                          <View style={styles.checkboxContainer}>
                              <CheckBox
                                  //center
                                  title="I know what legal representation I'll use"
                                  checked={legalRep}
                                  onPress={() => onChangeLegalRep(!legalRep)}
                                  //value={childCare}
                                  //onValueChange={onChangeChildCare}
                                  style={styles.checkbox}
                                  checkedColor="#fff"
                                  containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                  textStyle={{
                                      color: '#fff',
                                      fontSize: 18
                                  }}
                                  />
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
                          onPress={() => onChangeSignUpScreenNumber(4)}
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
                          onPress={() => onChangeSignUpScreenNumber(6)}
                      >
                          <View>
                              <Text style={styles.buttonText}>
                                  Submit
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </View>
        );
    }
    if (signUpScreenNumber == 6) {


  if (isCustomMoodScreen) {
    return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
        <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 20, alignItems: 'center' }}>
          <Ionicons name={'arrow-back'} color={'white'} size={30} onPress={() => setIsCustomMoodScreen(false)}/>
          <Text style={{ color: 'white', fontSize: 24 }} onPress={() => setIsCustomMoodScreen(false)}> Back </Text>
        </View>
        <Text style={{ color: 'white', fontSize: 26, fontWeight: '500', textAlign: 'center', marginTop: 210, marginLeft: 60, marginRight: 60}}>Would you like to share how you feel about your upcoming court summons today?</Text>
        <TextInput
          style={{ borderWidth: 1.5, padding: 10, margin: 20, borderRadius: 8, borderColor: 'white', color: 'white', fontSize: 20 }}
          value={customMood}
          onChangeText={setCustomMood}
        />
        <TouchableOpacity style={customMood.length == 0 ? styles.disabledButton : styles.button} onPress={() => {
          if (customMood.length != 0) {
            setMood(customMood);
            setIsCustomMoodScreen(false);
            setIsMoodPicker(false);
            setisSignUpFlow(false);
          }
        }}>
          <Text> Continue </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
        <View style={{ flex: 1, padding: 0, backgroundColor: '#768A89' }}>
          <Text style={{ color: 'white', fontSize: 26, fontWeight: '500', textAlign: 'center', marginTop: 100, marginLeft: 60, marginRight: 60}}>How are you feeling today about court? </Text>
          {
            moods.map((mood, key) => {
              return (<MoodBubble mood={mood} key={key} index={key} setMood={setMood} setIsMoodPicker={setIsMoodPicker} setIsCustomMoodScreen={setIsCustomMoodScreen}/>)
            })
          }
          <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center', top: -620 }}>
            <Text style={{ color: 'white', fontSize: 24 }} onPress={() => {
              setMood('default');
              setIsMoodPicker(false);
              setisSignUpFlow(false);
            }}> Skip </Text>
            <Ionicons name={'arrow-forward'} color={'white'} size={30} onPress={() => {
              setMood('default');
              setIsMoodPicker(false);
              setisSignUpFlow(false);
            }}/>
          </View>
        </View>
    );
  }
}
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
    modalText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
    },
    welcomeText2: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 36,
        textAlign: "center",
        color: "#FFFFFF",
        //paddingTop: 30,
        paddingBottom: 30
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
    welcomeTextContainer2: {
        position: 'absolute',
        top: 150,
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
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
  module: {
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    position: 'absolute',
    //width: '90%',
    //height: "90%",
    left: 20,
    right: 40,
    bottom: 40,
    borderRadius: 10,
    //backgroundColor: "#FFFFFF",
    //borderRadius: 50,
    width: 300,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    marginRight: 30,
    marginLeft: 30
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
  questionBox5: {
    paddingTop: '50%',
    paddingBottom: '50%',
},
checkboxContainer: {
    flexDirection: "row",
    marginBottom: 0,
    marginTop: 20
    //justifyContent: "center",
  },
  checkbox: {
    alignSelf: "center",
    alignItems: "center"
  },
  label: {
    margin: 8,
    color: '#fff'
  },
  privacy: {
      marginBottom: 20
  }
});

export default SignUpFlow;
