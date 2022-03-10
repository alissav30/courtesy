import * as React from 'react';
import Moment from 'moment';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

const swoopBackground = require("./plan_background.png");

import MakeAPlan from "./MakeAPlan"
import TransportationTaskPage from "./TransportationTaskPage"


const MyPlanScreen = ({ navigation, child, mood, setIsMoodPicker, courtDate, courtTime, courtLocation, car, legalRep, transportationPlan, setTransportationPlan, childCarePlan, setChildCarePlan, legalRepPlan, setLegalRepPlan }) => {
    const [foundTransportation, setFoundTransportation] = React.useState('false')
    const [foundLegalRepresentation, setFoundLegalRepresentation] = React.useState('false')
    const [foundChildcare, setFoundChildCare] = React.useState('false')
    const [checkTransportation, setCheckTransportation] = React.useState("")

    //if (car == true) {
    //    setTransportationPlan("Have a car!")
    //}
    //if (child == false) {
    //    setChildCarePlan("No child!")
    //}
    //if (legalRep == true) {
    //    setLegalRepPlan("I know what legal representation I'll use.")
    //}
    if (checkTransportation == "") {
  return (
      <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={swoopBackground} style={{width: '100%', height: '105%'}}>
            {/* <Text>{childCare? "hi" : "hello"}</Text> */}
            <Text style={[styles.myPlanHeader]}>MY PLAN</Text>
            <ScrollView>
                <View style={styles.inputFields}>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> COURT DATE </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {courtDate} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> COURT TIME </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {courtTime} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> LOCATION </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {courtLocation} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> view / edit </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> TRANSPORTATION </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {transportationPlan} </Text>
                                <TouchableOpacity style={styles.editButton}
                                onPress={()=> {foundTransportation ?  setCheckTransportation("view") : setCheckTransportation("explore")}}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {foundTransportation ? "view / edit" : "explore!"} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> LEGAL REPRESENTATION </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {legalRepPlan} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}>{foundLegalRepresentation ? "view / edit" : "explore!"} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {child ?
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> CHILDCARE </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {childCarePlan} </Text>
                                    <TouchableOpacity style={styles.editButton}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {foundChildcare ? "view / edit" : "explore!"} </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
if (checkTransportation == "view") {
    return (
        <MakeAPlan/>
    )
}
if (checkTransportation == "explore") {
    return (
        <TransportationTaskPage/>
    )
}

};

const styles = StyleSheet.create({
    myPlanHeader: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 28,
        color: '#779391',
        textAlign: 'center',
        letterSpacing: 0.4,
        marginTop: 60,
        marginBottom: 20,
    },
    inputFields: {
        marginTop: 50,
        alignItems: 'center',
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
        width: '90%',
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
        textTransform: 'uppercase',
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
