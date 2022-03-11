import * as React from 'react';
import * as Progress from 'react-native-progress';
import MoodPicker from './MoodPicker';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Modal,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

function isDateFormat(date) {
  const date_regex = /^\d{2}\/\d{2}\/\d{2}$/;

  if (!date_regex.test(date)) {
    return (
      <Text>please fix the formatting of your date</Text>
    );
  };

  const month = Number(date.slice(0, 2));
  const day = Number(date.slice(3, 5));

  switch (month) {
    case 1, 3, 5, 7, 8, 10, 12:
      if (day > 31) {
        return (
          <Text>please enter a valid date</Text>
        );
      };
    case 2:
      if (day > 28) {
        return (
          <Text>please enter a valid date</Text>
        );
      };
    case 4, 6, 9, 11:
      if (day > 30) {
        return (
          <Text>please enter a valid date</Text>
        );
      };
  }

  if (month > 12) {
    return (
      <Text>please enter a valid date</Text>
    );
  }

  const dateObject = new Date(date);
  const currDate = new Date();

  if (dateObject < currDate) {
    return (
      <Text>please enter a date in the future</Text>
    );
  }
  return (null);
}

function isTimeFormat(time) {
  const time_regex = /^ *(1[0-2]|[1-9]):[0-5][0-9] *(a|p|A|P)(m|M) *$/;
  return time_regex.test(time);
}

const SignUpFlow = ({navigation, props, setisSignUpFlow, mood, firstName, setMood, courtDate, onChangeFirstName, onChangeCourtDate, courtStreet, onChangeCourtStreet, courtCity, onChangeCourtCity, courtState, onChangeCourtState, courtTime, onChangeCourtTime, isMoodPicker, setIsMoodPicker, child, onChangeChild, legalRep, onChangeLegalRep, car, onChangeCar, title}) => {

    const [signUpScreenNumber, onChangeSignUpScreenNumber] = React.useState(0)
    //const [childCare, onChangeChildCare] = React.useState(false)
    //const [car, onChangeCar] = React.useState(false)
    //const [legalRep, onChangeLegalRep] = React.useState(false)

    const [isModalVisible, setIsModalVisible] = React.useState(false);


    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    if (signUpScreenNumber == 0) {
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
              <View>
                  <MaterialIcons style={styles.privacy} name="privacy-tip" size={40} color="white" onPress={() => setIsModalVisible(!isModalVisible)}/>
              </View>
              <Text style={styles.modalText}>We will not share your personal data or information with anyone. We are simply using these questions to guide your experience.</Text>
            </View>
            {/* submit button */}
            <View style={styles.submitButton}>
              <TouchableOpacity
                  style={[
                  styles.module,
                  ]}
                  onPress={() => onChangeSignUpScreenNumber(1)}
              >
                  <View>
                      <Text style={styles.buttonText}>
                          Get started
                      </Text>
                  </View>
              </TouchableOpacity>
              </View>
          </View>
          );
    }

    if (signUpScreenNumber == 1) {
    return (
      <View style={{ flex: 1, paddingTop: 80, header: 'Sign Up', backgroundColor: "#85B0AE", alignContent:"flex-start"}}>
          <View style={styles.welcomeTextContainer2}>
            <Text style={styles.welcomeText2}>
              {/* title */}
              Courtesy
            </Text>
            <Progress.Bar progress={0.2} width={200} color="white" />
          </View>
          <View style={styles.questionBox1}>
            <View style={styles.textContainer}>
                {/* first name question */}
                <View>
                    <Text style={styles.questionText}>
                        What's your preferred first name?
                    </Text>
                    <View style={styles.answerRow}>
                    <TextInput
                      style={styles.input}
                      //refInput={(ref) => courtDate = ref}
                      value={firstName}
                      onChangeText={onChangeFirstName}
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
                    onPress={() => onChangeSignUpScreenNumber(0)}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={firstName.length > 0 ? styles.nextModule : styles.disabledNextModule}
                    onPress={() => {
                      if (firstName.length > 0) {
                        onChangeSignUpScreenNumber(2);
                      }
                    }}
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
                  <Progress.Bar progress={0.4} width={200} color="white" />
                </View>
                <View style={styles.questionBox1}>
                  <View style={styles.textContainer}>
                      {/* court date question */}
                      <View>
                          <Text style={styles.questionText}>
                              When's your court date?
                          </Text>
                          <Text style={styles.questionHelperText}>
                              Format: MM/DD/YY
                          </Text>
                          <View style={styles.answerRow}>
                          <TextInput
                            style={styles.input}
                            //refInput={(ref) => courtDate = ref}
                            value={courtDate}
                            onChangeText={onChangeCourtDate}
                        />
                            {/*<Ionicons style={styles.icon} name="calendar-outline" size={45} color="white" />*/}
                          </View>
                      </View>
                  </View>
                </View>
                {/* submit button */}
                  { (courtDate.length > 0 && isDateFormat(courtDate)) &&
                    <View style={styles.errorMessageContainer}>
                      <Text style={styles.errorMessageText}>
                        {isDateFormat(courtDate)}
                      </Text>
                    </View>
                  }
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
                          style={ (isDateFormat(courtDate) === null) ? styles.nextModule : styles.disabledNextModule }
                          onPress={() => {
                            if (isDateFormat(courtDate) === null) {
                              onChangeSignUpScreenNumber(3);
                            }
                          }}
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
                          <Text style={styles.questionHelperText}>
                              * include AM/PM
                          </Text>
                          <View style={styles.answerRow}>
                                <TextInput
                                    style={styles.input}
                                    //refInput={(ref) => courtDate = ref}
                                    value={courtTime}
                                    onChangeText={onChangeCourtTime}
                                />
                              {/*<Ionicons style={styles.icon} name="location-outline" size={45} color="white" />*/}
                          </View>
                      </View>
                  </View>
                </View>
                {/* submit button */}
                { (courtTime.length > 0 && !isTimeFormat(courtTime)) &&
                  <View style={styles.errorMessageContainer}>
                    <Text style={styles.errorMessageText}>
                      please fix the formatting of your time
                      HH:MM AM/PM
                    </Text>
                  </View>
                }
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
                        style={ isTimeFormat(courtTime) ? styles.nextModule : styles.disabledNextModule }
                        onPress={() => {
                          if (isTimeFormat(courtTime)) {
                            onChangeSignUpScreenNumber(4);
                          }
                        }}
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
                          <Text style={[styles.questionText, { marginTop: -60 }]}>
                            Where is your court appointment?
                          </Text>
                          <Text style={[styles.locationHelperText, { marginTop: 10 }]}>
                              Street name:
                          </Text>
                          <View style={styles.locationInput}>
                              <TextInput
                                style={styles.input}
                                onChangeText={onChangeCourtStreet}
                                value={courtStreet}
                                placeholder=""
                              />
                          </View>
                          <Text style={styles.locationHelperText}>
                              City:
                          </Text>
                          <View style={styles.locationInput}>
                              <TextInput
                                style={styles.input}
                                onChangeText={onChangeCourtCity}
                                value={courtCity}
                                placeholder=""
                              />
                          </View>
                          <Text style={styles.locationHelperText}>
                              State:
                          </Text>
                          <View style={styles.locationInput}>
                              <TextInput
                                style={styles.input}
                                onChangeText={onChangeCourtState}
                                value={courtState}
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
                          style={(courtStreet.length > 0 && courtCity.length > 0 && courtState.length > 0) ? styles.nextModule : styles.disabledNextModule}
                          onPress={() => {
                            if (courtStreet.length > 0 && courtCity.length > 0 && courtState.length > 0) {
                              onChangeSignUpScreenNumber(5);
                            }
                          }}>
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
                                  checked={child}
                                  onPress={() => onChangeChild(!child)}
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
      return (<MoodPicker navigation={navigation} mood={mood} setMood={setMood} setIsMoodPicker={setIsMoodPicker} setisSignUpFlow={setisSignUpFlow} />)
    }
};

const styles = StyleSheet.create({
    welcomeText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 34,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 30,
        marginBottom: 20,
        marginTop: 60,
    },
    modalText: {
        fontFamily: "Avenir",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 0,
        fontWeight: '300',
        width: '80%',
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
        fontWeight: "500",
        fontSize: 26,
        lineHeight: 29,
        padding: 20,
        textAlign: "center",
        color: "#FFFFFF",
        paddingBottom: 50,
      },
    locationInput: {
      marginBottom: 0,
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
        borderRadius: 5,
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
    questionHelperText:{
        fontFamily: "Avenir",
        fontSize: 18,
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 10,
    },
    locationHelperText: {
      fontFamily: "Avenir",
      fontSize: 18,
      textAlign: "center",
      color: "#FFFFFF",
      marginBottom: -10,
    },
    errorMessageText: {
      fontFamily: "Avenir",
      fontSize: 18,
      textAlign: "center",
      color: "#FFF",
    },
    errorMessageContainer: {
      backgroundColor: '#A15353',
      width: '80%',
      marginTop: -180,
      borderRadius: 50,
      alignSelf: 'center',
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
        top: 100,
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
  button: {
    backgroundColor: 'white',
    color: '#768A89',
    width: 130,
    height: 50,
    borderRadius: 90,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: '#819897',
    width: 130,
    height: 50,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
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
    width: 140,
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
    width: 140,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    //textAlign: "center",
    //marginRight: 30,
    //marginLeft: 30,
  },
  disabledNextModule: {
    backgroundColor: "#A7CBC8",
    borderWidth: 4,
    borderColor: "#A7CBC8",
    position: 'absolute',
    //width: '90%',
    //height: "90%",
    left: 220,
    //right: 20,
    bottom: 40,
    borderRadius: 10,
    //backgroundColor: "#FFFFFF",
    //borderRadius: 50,
    width: 140,
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
