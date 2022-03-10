import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from 'react-native-paper';


const swoopBackground = require("./plan_background.png");

import MakeTransportationPlan from "./MakeTransportationPlan"
import TransportationTaskPage from "./TransportationTaskPage"
import MakeLegalPlan from './MakeLegalPlan';
import LegalTasksScreen from './LegalTaskPage';
import MakeChildCarePlan from './MakeChildCarePlan';
import ChildCareTasksScreen from './ChildCareTaskPage';
import { Ionicons } from '@expo/vector-icons';



const MyPlanScreen = ({ navigation, selectedCategory, setSelectedCategory, currScreen, setCurrScreen, navScreen, setNavScreen, child, mood, setIsMoodPicker, courtDate, courtTime, courtStreet, courtCity, courtState, car, legalRep, transportationPlan, setTransportationPlan, childCarePlan, setChildCarePlan, legalRepPlan, setLegalRepPlan }) => {
    const [foundTransportation, setFoundTransportation] = React.useState(false)
    const [foundLegalRepresentation, setFoundLegalRepresentation] = React.useState(false)
    const [foundChildcare, setFoundChildCare] = React.useState(false)
    //const [checkTransportation, setCheckTransportation] = React.useState("")
    //const [navScreen, setNavScreen] = React.useState("my plan")
    const courtLocation = `${courtStreet}, ${courtCity}, ${courtState}`;

    const [legalPlanDescription, onChangeLegalPlanDescription] = React.useState("")
    const [transportationPlanDescription, onChangeTransportationPlanDescription] = React.useState("")
    const [childCarePlanDescription, onChangeChildCarePlanDescription] = React.useState("")
    const [currLegalScreen, setCurrLegalScreen] = React.useState("legal task")

    let progress = 3;
    let total = 4;
    if (car) {
        if (foundTransportation) {
            progress++;
        }
    }
    if (child) {
        if (foundChildcare) {
            progress++;
        }
        total++;
    }
    if (legalRep) {
        if (foundLegalRepresentation) {
            progress++;
        }
        total++;
    }

    // if (car == true) {
    //    setTransportationPlan("Have a car!")
    // }
    // if (child == false) {
    //    setChildCarePlan("No child!")
    // }
    // if (legalRep == true) {
    //    setLegalRepPlan("I know what legal representation I'll use.")
    // }
    if (navScreen == "my plan") {
    return (
      <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={swoopBackground} style={{width: '100%', height: '105%'}}>
            {/* <Text>{childCare? "hi" : "hello"}</Text> */}
            <Text style={[styles.myPlanHeader]}>My Plan</Text>
            <ScrollView>
                <View style={styles.progressBar}>
                    <Progress.Bar progress={0.5} width={200} color="white"/>
                </View>
                <View style={styles.inputFields}>
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Court Date </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {courtDate} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=>navigation.navigate("Settings")}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bin}>
                                <Ionicons name={'checkmark'} color={'white'} size={22}/>
                        </View>
                    </View>
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Court Time </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {courtTime} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=>navigation.navigate("Settings")}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bin}>
                                <Ionicons name={'checkmark'} color={'white'} size={22}/>
                        </View>
                    </View>
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Courthouse Location </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {courtStreet+", "+courtCity+", "+courtState} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=>navigation.navigate("Settings")}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bin}>
                                <Ionicons name={'checkmark'} color={'white'} size={22}/>
                        </View>
                    </View>
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Transportation </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {transportationPlan} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=> {
                                        if (foundTransportation) {
                                            setNavScreen("transportationView")
                                         }
                                         else {
                                             setNavScreen("transportationExplore")}
                                         }}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {foundTransportation ? "view / edit" : "explore!"} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {
                            foundTransportation ?
                                <View style={styles.bin}>
                                    <TouchableOpacity
                                    onPress={()=>{
                                        setFoundTransportation(false)
                                        setTransportationPlan("Start your plan!")
                                        onChangeTransportationPlanDescription("")
                                    }}
                                    >
                                        <Ionicons name={'trash-bin'} color={'white'} size={22}/>
                                    </TouchableOpacity>
                                </View>
                            :
                                <View></View>
                        }
                    </View>
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Legal Representation </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {legalRepPlan} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=>{
                                        if (foundLegalRepresentation) {
                                            setNavScreen("legalView")
                                        }
                                        else {
                                            setNavScreen("legalExplore")
                                        }
                                    }
                                    }
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}>{foundLegalRepresentation ? "view / edit" : "explore!"} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {
                            foundLegalRepresentation ?
                                <View style={styles.bin}>
                                    <TouchableOpacity>
                                        <Ionicons name={'trash-bin'} color={'white'} size={22}/>
                                    </TouchableOpacity>
                                </View>
                            :
                                <View></View>
                        }

                    </View>
                    {child ?
                    <View style={[styles.planItemWithBin]}>
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> Childcare </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {childCarePlan} </Text>
                                    <TouchableOpacity style={styles.editButton}
                                    onPress={()=>{
                                        if (foundChildcare) {
                                            setNavScreen("legalView")
                                        }
                                        else {
                                            setNavScreen("legalExplore")
                                        }
                                    }
                                    }
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {foundChildcare ? "view / edit" : "explore!"} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {
                            foundChildcare ?
                                <View style={styles.bin}>
                                    <TouchableOpacity>
                                        <Ionicons name={'trash-bin'} color={'white'} size={22}/>
                                    </TouchableOpacity>
                                </View>
                            :
                                <View></View>
                        }

                    </View>
                        :
                    <View></View>
                    }
                </View>
            </ScrollView>
        </ImageBackground>
      </View>
  );
}

else if (navScreen == "transportationView") {
    return (
        <MakeTransportationPlan
        navigation={navigation}
        transportationPlan={transportationPlan}
        setTransportationPlan={setTransportationPlan}
        mood={mood}
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate}
        courtTime={courtTime}
        child={child}
        transportationPlanDescription={transportationPlanDescription}
        onChangeTransportationPlanDescription={onChangeTransportationPlanDescription}
        currScreen={"makePlan"}
        setCurrScreen={setCurrScreen}
        navScreen={navScreen}
        setNavScreen={setNavScreen}
        foundTransportation={foundTransportation}
        setFoundTransportation={setFoundTransportation}
        />
    )
}

else if (navScreen == "transportationExplore") {
    return (
        <TransportationTaskPage
            navigation={navigation}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            setCurrScreen={setCurrScreen}
            currScreen={"transportation task"}
            transportationPlan={transportationPlan}
            setTransportationPlan={setTransportationPlan}
            mood={mood}
            setIsMoodPicker={setIsMoodPicker}
            courtDate={courtDate}
            courtTime={courtTime}
            child={child}
            navScreen={navScreen}
            setNavScreen={setNavScreen}
            foundTransportation={foundTransportation}
            setFoundTransportation={setFoundTransportation}
        />
    )
}
else if (navScreen == "legalView") {
    return (
        <MakeLegalPlan
        navigation={navigation}
        transportationPlan={transportationPlan}
        setTransportationPlan={setTransportationPlan}
        mood={mood}
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate}
        courtTime={courtTime}
        child={child}
        legalPlanDescription={legalPlanDescription}
        onChangeLegalPlanDescription={onChangeLegalPlanDescription}
        foundLegalRepresentation={foundLegalRepresentation}
        setFoundLegalRepresentation={setFoundLegalRepresentation}
        />
    )
}
else if (navScreen == "legalExplore") {
    return (
        <LegalTasksScreen
        navigation={navigation}
        currScreen={currLegalScreen}
        setCurrScreen={setCurrLegalScreen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        legalRepPlan={legalRepPlan}
        setLegalRepPlan={setLegalRepPlan}
        mood={mood}
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate}
        courtTime={courtTime}
        child={child}
        foundLegalRepresentation={foundLegalRepresentation}
        setFoundLegalRepresentation={setFoundLegalRepresentation}
        />
    )
}
else if (navScreen == "childView") {
    return (
        <MakeChildCarePlan
        navigation={navigation}
        childCarePlan={childCarePlan}
        setChildCarePlan={setChildCarePlan}
        mood={mood}
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate}
        courtTime={courtTime}
        child={child}
        childCarePlanDescription={childCarePlanDescription}
        onChangeChildCarePlanDescription={onChangeChildCarePlanDescription}
        foundChildcare={foundChildcare}
        setFoundChildCare={setFoundChildCare}
        />
    )
}
else if (navScreen == "childExplore") {
    return (
        <ChildCareTasksScreen
        navigation={navigation}
        currScreen={currLegalScreen}
        setCurrScreen={setCurrLegalScreen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        childCarePlan={legalRepPlan}
        setChildCarePlan={setLegalRepPlan}
        mood={mood}
        setIsMoodPicker={setIsMoodPicker}
        courtDate={courtDate}
        courtTime={courtTime}
        child={child}
        foundChildcare={foundChildcare}
        setFoundChildCare={setFoundChildCare}
        />
    )
}

}

const styles = StyleSheet.create({
    progressBar: {
        flex: 1,
        alignItems: "center",
        top: 30,
    },
    bar: {
        // color: "#aeaeae"
        // backgroundColor: "white"
    },
    bin: {
        marginLeft: 20,
    },
    planItemWithBin: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    myPlanHeader: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 28,
        color: '#779391',
        textAlign: 'center',
        letterSpacing: 0.4,
        marginTop: 80,
        marginBottom: 20,
    },
    inputFields: {
        marginTop: 50,
        alignItems: 'flex-start',
        marginLeft: 20,
        paddingBottom: 100,
    },
    planHeader: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
        marginBottom: 5,
    },
    planItem: {
        width: '80%',
        height: 60,
        marginBottom: 50,
        borderRadius: 5,
    },
    planContentBox: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width: '100%',
        height: '100%',
        marginBottom: 2,
        borderRadius: 5,
    },
    planContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
    },
    planContentText: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 29,
        color: '#f2f2f2',
        textAlign: 'left',
        textAlignVertical: 'center',
        marginLeft: 4,
        alignItems: 'center',
        letterSpacing: 2,
        flex: 1,
        // textTransform: 'uppercase',
        // flexWrap: 'wrap',
    },
    editButton: {
        marginLeft: 20,
    },
    dropShadow:  {
        shadowColor: '#00000040',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    underline: {textDecorationLine: 'underline'},
});

export default MyPlanScreen;
