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


const MyPlanScreen = ({ navigation, childCare }) => {
    // eventually replace w/ real data
  const fakeDataCourtDate = new Date('04/27/22');
  const fakeDataCourtTime = "5:00 PM PST";
  const fakeDataLocation = "Palo Alto Courthouse";
  const fakeDataTransportation = "Start your plan!";
  const fakeDataLegalRep = "Start your plan!";
  const fakeDataChildCare = "Found babysitter";
  const fakeFoundTransportation = false;
  const fakeFoundLegalTransportation = false;
  const fakeFoundChildcare = true;
  const fakeNeedsChildCare = true;

//   {childCare ? "edit / view" : "explore"}

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
                                <Text numberOfLines={1} style={styles.planContentText}> {Moment(fakeDataCourtDate).format('MM/DD/YYYY')} </Text>
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
                                <Text numberOfLines={1} style={styles.planContentText}> {fakeDataCourtTime} </Text>
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
                                <Text numberOfLines={1} style={styles.planContentText}> {fakeDataLocation} </Text>
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
                                <Text numberOfLines={1} style={styles.planContentText}> {fakeDataTransportation} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {fakeFoundTransportation ? "view / edit" : "explore!"} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.planItem]}>
                        <Text style={[styles.planHeader]}> LEGAL REPRESENTATION </Text>
                        <View style={[styles.planContentBox, styles.dropShadow]}>
                            <View style={styles.planContent}>
                                <Text numberOfLines={1} style={styles.planContentText}> {fakeDataLegalRep} </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                    <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}>{fakeFoundLegalTransportation ? "view / edit" : "explore!"} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {fakeNeedsChildCare ?
                        <View style={[styles.planItem]}>
                            <Text style={[styles.planHeader]}> CHILDCARE </Text>
                            <View style={[styles.planContentBox, styles.dropShadow]}>
                                <View style={styles.planContent}>
                                    <Text numberOfLines={1} style={styles.planContentText}> {fakeDataChildCare} </Text>
                                    <TouchableOpacity style={styles.editButton}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 6, paddingRight: 10}}>
                                        <Text style={[{ color: "white", fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'center' }, styles.underline]}> {fakeFoundChildcare ? "view / edit" : "explore!"} </Text>
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
};

const styles = StyleSheet.create({
    myPlanHeader: {
        fontFamily: 'Inter',
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
        fontFamily: 'Inter',
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
        fontFamily: 'Inter',
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
