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
  TextInput
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import CheckBox from 'react-native-check-box';



const swoopBackground = require("./home_background.png");


const SettingsScreen = ({ navigation, childCare,
    courtDate, onChangeCourtDate,
    location, onChangeLocation,
    notifSettings, onChangeNotifSettings
 }) => {
    // eventually replace w/ real data
  const fakeName = "Jane";

  return (
      <View style={{ flex: 1, padding: 0, backgroundColor: '#85B0AE' }}>
        <Text style={[styles.myPlanHeader]}>Hi, {fakeName}!</Text>
        <View style={styles.settingsContent}>
            <View style={styles.row}>
                <Text style={styles.settingsHeader}>edit court date: </Text>
                <TextInputMask
                    style={[styles.input]}
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
                    style={[styles.input]}
                    onChangeText={onChangeLocation}
                    value={location}
                />
            </View>
            <View style={styles.rowLong}>
                <Text style={styles.settingsHeader}>edit court location: </Text>
                <TextInput
                    style={[styles.input, {left: 165}]}
                    onChangeText={onChangeLocation}
                    value={location}
                />
            </View>
            <View>
                <Text style={styles.settingsHeader}>edit notification settings: </Text>
                <View style={styles.checkboxes}>
                    <View style={styles.checkboxItem}>
                        <CheckBox
                            style={[styles.checkbox, {flex: 1, padding: 10}]}
                            // onClick={()=>{
                            // this.setState({
                            //     isChecked:!this.state.isChecked
                            // })
                            // }}
                            // isChecked={this.state.isChecked}
                            rightText={"Give me weekly reminders about my court date"}
                        />
                        {/* <Text style={styles.checkboxText}></Text> */}
                    </View>
                    <View style={styles.checkboxItem}>
                        <CheckBox
                            style={[styles.checkbox, {flex: 1, padding: 10}]}
                            // onClick={()=>{
                            // this.setState({
                            //     isChecked:!this.state.isChecked
                            // })
                            // }}
                            // isChecked={this.state.isChecked}
                            rightText={"Notify me when I have a new task"}
                        />
                        {/* <Text style={styles.checkboxText}></Text> */}
                    </View>

                    <View style={styles.checkboxItem}>
                        <CheckBox
                            style={[styles.checkbox, {flex: 1, padding: 10}]}
                            // onClick={()=>{
                            // this.setState({
                            //     isChecked:!this.state.isChecked
                            // })
                            // }}
                            // isChecked={this.state.isChecked}
                            rightText={"Remind me a week before my court date"}
                        />
                        {/* <Text style={styles.checkboxText}></Text> */}
                    </View>

                    <View style={styles.checkboxItem}>
                        <CheckBox
                            style={[styles.checkbox, {flex: 1, padding: 10}]}
                            // onClick={()=>{
                            // this.setState({
                            //     isChecked:!this.state.isChecked
                            // })
                            // }}
                            // isChecked={this.state.isChecked}
                            rightText={"Remind me the day before my court date"}
                        />
                        {/* <Text style={styles.checkboxText}></Text> */}
                    </View>
                </View>

            </View>
        </View>

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
    checkboxItem: {
        display: "flex",
        flexDirection: "row",
        alignContent: "space-around"
    },
    checkboxText: {
        flex: 1,
        flexWrap: 'wrap',
    },
    input: {
        width: 185,
        borderRadius: 6,
        marginBottom: 10,
        marginLeft: 20,
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
