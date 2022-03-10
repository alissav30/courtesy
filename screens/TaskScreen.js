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
// import {
//     CheckBox,
// } from '@react-native-community/checkbox';
import {
    Card,
  } from 'react-native-elements';

const swoopBackground = require("./tasks_background.png");


const TaskScreen = ({ navigation, childCare }) => {
    // eventually replace w/ real data
  const fakeName = "Jane";
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
        <ImageBackground source={swoopBackground} style={{width: '100%', height: '130%'}}>
            <Text style={[styles.taskHeader]}>Tasks</Text>

            <ScrollView>
                <View style={[styles.container, styles.dropShadow]}>
                    <View style={[styles.cardInnerStyle]}>
                        <Card borderRadius={12}>
                            <View style={styles.topHalf}>
                                <Card.Title>
                                    <View styles={[styles.cardTitleContainer]}>
                                        <Text style={[styles.cardTitle]}>TASK OF THE DAY</Text>
                                    </View>
                                </Card.Title>
                            </View>
                            <Card.Divider />
                            <View style={styles.bottomHalf}>
                                <View style={styles.taskCardContentWrapper}>
                                    <View style={styles.taskCardContent}>
                                        <View style={[styles.checkbox]}></View>
                                        {/* <CheckBox /> */}
                                        <View style={[styles.task]}>
                                            <Text>
                                                Take some time to explore transportation options
                                            </Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.exploreButton}>
                                        <View>
                                            <Text style={[{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }, styles.underline]}> EXPLORE OPTIONS → </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Card>
                    </View>
                </View>

                <View style={[styles.container, styles.dropShadow]}>
                    <View style={[styles.cardInnerStyle]}>
                        <Card borderRadius={12}>
                            <Card.Title>
                                <View styles={[styles.cardTitleContainer]}>
                                    <Text style={[styles.cardTitle]}>PAST TASKS</Text>
                                </View>
                            </Card.Title>
                            <Card.Divider />
                            <View style={styles.taskCardContentWrapper}>
                                <View style={styles.taskCardContent}>
                                    <View style={[styles.checkbox]}></View>
                                    <View style={[styles.task]}>
                                        <Text>
                                            Take some time to explore transportation options
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.exploreButton}>
                                    <View>
                                        <Text style={[{ fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }, styles.underline]}> REVIEW DETAILS → </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>
                </View>

            </ScrollView>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
    taskHeader: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 28,
        color: '#779391',
        textAlign: 'center',
        letterSpacing: 0.4,
        marginTop: 70,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInnerStyle: {
        width: '100%',
        height: '100%',
    },
    cardTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    cardTitle: {
        textAlign: 'center',
    },
    taskCardContent: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    checkbox: {
        borderWidth: 1,
        width: 20,
        height: 20,
    },
    task: {
        marginLeft: 20,
    },
    exploreButton: {
        marginTop: 20,
    },
    // planHeader: {
    //     fontFamily: 'Inter',
    //     fontStyle: 'normal',
    //     fontWeight: 'bold',
    //     fontSize: 16,
    //     lineHeight: 19,
    //     color: '#FFFFFF',
    //     marginBottom: 5,
    // },
    // planItem: {
    //     width: '90%',
    //     height: 60,
    //     marginBottom: 50,
    //     borderRadius: 5,
    // },
    // planContentBox: {
    //     borderWidth: 1,
    //     borderColor: '#FFFFFF',
    //     width: '100%',
    //     height: '100%',
    //     marginBottom: 2,
    //     borderRadius: 5,
    // },
    // planContent: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     flex: 1,
    //     alignItems: 'center',
    // },
    // planContentText: {
    //     fontFamily: 'Inter',
    //     fontStyle: 'normal',
    //     fontWeight: 'bold',
    //     fontSize: 14,
    //     lineHeight: 29,
    //     color: '#f2f2f2',
    //     textAlign: 'left',
    //     textAlignVertical: 'center',
    //     marginLeft: 4,
    //     alignItems: 'center',
    //     letterSpacing: 2,
    //     flex: 1,
    //     textTransform: 'uppercase',
    //     // flexWrap: 'wrap',
    // },
    // editButton: {
    //     marginLeft: 20,
    // },
    dropShadow:  {
        shadowColor: '#00000040',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    topHalf:  {

    },
    bottomHalf: {
        // backgroundColor: '#779391',
        width: '100%',
    },
    underline: {textDecorationLine: 'underline'},
});

export default TaskScreen;
