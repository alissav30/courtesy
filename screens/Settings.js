import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { CheckBox } from 'react-native-elements'

const SettingsScreen = ({ navigation, childCare,
    courtDate, onChangeCourtDate,
    location, onChangeLocation,
    notifSettings, onChangeNotifSettings, firstName
 }) => {
    // eventually replace w/ real data
//   const fakeName = "Jane";
  const name = firstName;
  const [weeklyReminders, setWeeklyReminders] = React.useState("false")
  const [notifyOnNewTask, setNotifyOnNewTask] = React.useState("false")
  const [notifyWeekBefore, setNotifyWeekBefore] = React.useState("false")
  const [notifyDayBefore, setNotifyDayBefore] = React.useState("false")

  const showConfirmDialog = (toChange, setToChange) => {
    return Alert.alert(
      "\"courtesy\" Would Like to Send You Notifications",
      `Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.`,
      [
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Don't Allow",
        },
        {
            text: "Allow",
            onPress: () => {
                setToChange(!toChange)
            },
        },
      ]
    );
  };

  return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#85B0AE' }}>
        <Text style={[styles.myPlanHeader]}>Hi, {name}!</Text>
        {/* <ScrollView> */}
            <View style={styles.settingsContent}>
                <View style={styles.row}>
                    <Text style={styles.settingsHeader}>edit court date: </Text>
                    <TextInputMask
                        style={[styles.input, styles.dropShadow]}
                        //refInput={(ref) => courtDate = ref}
                        value={courtDate}
                        onChangeText={onChangeCourtDate}
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.settingsHeader}>edit court time: </Text>
                    <TextInput
                        style={[styles.input, styles.dropShadow]}
                        onChangeText={onChangeLocation}
                        value={location}
                    />
                </View>
                <View style={styles.rowLong}>
                    <Text style={styles.settingsHeader}>edit court location: </Text>
                    <TextInput
                        style={[styles.locationInput, styles.dropShadow]}
                        onChangeText={onChangeLocation}
                        value={location}
                    />
                </View>
                <View>
                    <Text style={styles.settingsHeader}>edit notification settings: </Text>
                    {/* <View style={styles.checkboxes}> */}
                    <View>
                        <View style={[styles.checkboxContainer]}>
                            <CheckBox
                                //center
                                title="Give me weekly reminders about my court date"
                                checked={weeklyReminders}
                                onPress={() => {
                                    if (weeklyReminders) {
                                        setWeeklyReminders(!weeklyReminders)
                                    }
                                    if (!weeklyReminders) {
                                        showConfirmDialog(weeklyReminders, setWeeklyReminders);
                                    }
                                }}
                                style={styles.checkbox}
                                checkedColor="#fff"
                                containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                textStyle={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: "light"
                                }}
                            />
                        </View>
                        <View style={[styles.checkboxContainer]}>
                            <CheckBox
                                //center
                                title="Notify me when I have a new task"
                                checked={notifyOnNewTask}
                                onPress={() => {
                                    if (notifyOnNewTask) {
                                        setNotifyOnNewTask(!notifyOnNewTask)
                                    }
                                    if (!notifyOnNewTask) {
                                        showConfirmDialog(notifyOnNewTask, setNotifyOnNewTask);
                                    }
                                }}
                                style={styles.checkbox}
                                checkedColor="#fff"
                                containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                textStyle={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: "light"
                                }}
                            />
                        </View>
                        <View style={[styles.checkboxContainer]}>
                            <CheckBox
                                //center
                                title="Remind me a week before my court date"
                                checked={notifyWeekBefore}
                                onPress={() => {
                                    if (notifyWeekBefore) {
                                        setNotifyWeekBefore(!notifyWeekBefore)
                                    }
                                    if (!notifyWeekBefore) {
                                        showConfirmDialog(notifyWeekBefore, setNotifyWeekBefore);
                                    }
                                }}
                                style={styles.checkbox}
                                checkedColor="#fff"
                                containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                textStyle={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: "light"
                                }}
                            />
                        </View>
                        <View style={[styles.checkboxContainer]}>
                            <CheckBox
                                //center
                                title="Remind me the day before my court date"
                                checked={notifyDayBefore}
                                onPress={() => {
                                    if (notifyDayBefore) {
                                        setNotifyDayBefore(!notifyDayBefore)
                                    }
                                    if (!notifyDayBefore) {
                                        showConfirmDialog(notifyDayBefore, setNotifyDayBefore);
                                    }
                                }}
                                style={styles.checkbox}
                                checkedColor="#fff"
                                containerStyle={{ backgroundColor: "#85B0AE", borderWidth: 0 }}
                                textStyle={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: "light"
                                }}
                            />
                        </View> 
                    </View>

                </View>
            </View>
        {/* </ScrollView> */}
      </View>
  );
};



const styles = StyleSheet.create({
    myPlanHeader: {
        top: 70,
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 28,
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 0.4,
        marginTop: 20,
        marginBottom: 20,
    },
    settingsContent: {
        top: 90,
    },
    settingsHeader: {
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
        left: 20,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "400",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around"
    },
    rowLong: {
        display: "flex",
        flexDirection: "column",
        alignContent: "space-around"
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 0,
        //justifyContent: "center",
      },
      checkbox: {
        alignSelf: "center",
        alignItems: "center",
      },
    input: {
        width: 180,
        borderRadius: 6,
        marginBottom: 10,
        marginLeft: 25,
        top: 12,
        height: 30,
        borderWidth: 1.5,
        borderColor: 'white',
    },
    locationInput: {
        width: '90%',
        borderRadius: 6,
        marginBottom: 25,
        left: 20,
        // marginLeft: 20,
        top: 12,
        height: 30,
        borderWidth: 1.5,
        borderColor: 'white',

    },
    dropShadow:  {
        shadowColor: '#00000040',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    checkboxes: {
        left: 20,
        marginRight: 30,
        fontSize: 16,
    },
    underline: {textDecorationLine: 'underline'},
});

export default SettingsScreen;
