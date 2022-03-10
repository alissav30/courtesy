import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const swoopBackground = require("./tasks_background.png");

const HideKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const categories = ['court date information', 'contacting court', 'transportation', 'testimonials', 'legal help', 'other'];

const MakeTransportationPlan = ({ navigation, foundTransportation, setFoundTransportation, navScreen, setNavScreen, currScreen, transportationPlanDescription, onChangeTransportationPlanDescription, setCurrScreen, transportationPlan, setTransportationPlan, mood, setIsMoodPicker, courtDate, courtTime, childCare }) => {
  const [isAnonymous, setIsAnonymous] = React.useState(false);
//  const [transportationPlanDescription, onChangeTransportationPlanDescription] = React.useState("")

  return (
    <HideKeyboard>
        <View style={{ flex: 1, padding: 0, backgroundColor: '#85B0AE' }}>
            <View>
                <TouchableOpacity style={[
                    { top: 80, left: 20, width: '25%', height: '22%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,}
                ]}
                onPress={()=> {
                    //setCurrScreen("transportation task")
                    setNavScreen("my plan")
                }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.fullPage}>
                <View>
                    <Text style={[styles.makeAPostHeader, {color: '#F8F9FA'}]}>transportation plan</Text>
                </View>
                <View>
                    <Text style={styles.header}>Transportation Choice:</Text>
                    <TextInput
                        style={[styles.titleBox, styles.dropShadow]}
                        onChangeText={setTransportationPlan}
                        value={(transportationPlan == "Start your plan!") ?  "" : transportationPlan}
                        maxLength = {50}
                        placeholder={'Type your choice here.'}
                        placeholderTextColor={'#dae8e7'}
                    />
                </View>
                <View>
                    <Text style={[styles.header, styles.descriptionHeader]}>Additional Description
                    or Notes:</Text>
                    <Text style={[styles.optional]}>(optional)</Text>
                    <TextInput
                        style={[styles.descriptionBox, styles.dropShadow]}
                        onChangeText={onChangeTransportationPlanDescription}
                        value={!transportationPlanDescription ? "" : transportationPlanDescription}
                        textAlignVertical={'top'}
                        multiline
                        maxLength = {2000}
                        placeholder={'Ex. My babysitter\'s number is 123-456-7890'}
                        placeholderTextColor={'#dae8e7'}
                    />
                </View>

                <View>
                <TouchableOpacity style={[
                    styles.postButton,
                    styles.dropShadow,
                    { height: "25%", width:'37%', borderRadius: '20px', justifyContent: 'center', backgroundColor: 'white' }
                ]}
                onPress={()=>{
                    navigation.navigate(" ")
                    setNavScreen("my plan")
                    setFoundTransportation(true)
                }}
                >
                    {/*<View style={{ flexDirection: 'row', justifyContent: 'space-around', textAlign: 'center'}}>*/}
                    <Text style={{ color: '#768A89', fontSize: 14, fontWeight: 'bold', alignSelf: 'center', alignItems: 'center' }}> set your plan! </Text>
                    {/*</View>*/}
                </TouchableOpacity>
                </View>
                {
                    transportationPlan != "Start your plan!" ?
                    <View>
                        <TouchableOpacity style={styles.explore}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10, marginTop: 20}}>
                                <Text style={[{ color: "white", fontSize: 14, fontWeight: '500', fontStyle: 'italic' }, styles.underline]}> want to explore resources again? </Text>
                            </View>
                        </TouchableOpacity>
                                
                    </View> 
                    :
                    <View></View>
                }
            </View>
        </View>
      </HideKeyboard>
    );
};

const styles = StyleSheet.create({
    backButton: {
        borderColor: "#FFFFFF",
        borderRadius: 30,
    },
    fullPage: {
        top: 20
    },
    makeAPostHeader: {
        textAlign: 'center',
        fontSize: 26,
        lineHeight: 31,
        top: -45,
    },
    dropShadow:  {
        shadowColor: '#00000040',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    header: {
        color: '#F8F9FA',
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '600',
        left: 20,
        marginBottom: 10,
        marginTop: 10,
        top: -30,
    },
    optional: {
        color: '#dae8e7',
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '600',
        left: 20,
        marginBottom: 10,
        top: -30,
        fontStyle: 'italic',
    },
    dropdown: {
        marginLeft: 20,
        borderRadius: 50,
        width: '100%',
        top: -30,
        marginBottom: 20,
    },
    titleBox: {
        left: 20,
        borderWidth: 2,
        width: '90%',
        height: 40,
        borderColor: '#DEE2E6',
        borderRadius: 9,
        color: 'white',
        top: -30,
        paddingLeft: 10,
        marginBottom: 20,
    },
    checkbox: {
        color: 'white',
        width: '100%',
    },
    descriptionBox: {
      left: 20,
      borderWidth: 2,
      width: '90%',
      height: 100,
      borderColor: '#DEE2E6',
      borderRadius: 9,
      color: 'white',
      top: -30,
      padding: 10,
      paddingTop: 10,
    },
    postButton: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    underline: {textDecorationLine: 'underline'},
    dropdown1BtnStyle: {
      width: "90%",
      height: 42,
      backgroundColor: "#768A89",
      borderRadius: 9,
      borderWidth: 2,
      borderColor: "#DEE2E6",
    },
    dropdown1BtnTxtStyle: { color: "#DEE2E6", textAlign: "left" },
    dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
    dropdown1RowStyle: {
      backgroundColor: "#EFEFEF",
      borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
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

});

export default MakeTransportationPlan;
