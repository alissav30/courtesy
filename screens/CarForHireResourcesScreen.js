import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Alert,
  } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import TransportationTaskPage from "./TransportationTaskPage";
import { Ionicons } from '@expo/vector-icons';
import {Linking} from 'react-native'


const CarForHire = ({navigation, setCurrScreen, setSelectedCategory, selectedCategory, currScreen, transportationPlan, setTransportationPlan, mood, setIsMoodPicker, courtDate, courtTime, courtLocation, child, setNextScreen}) => {
    //const [backButton, setBackButton] = React.useState(false)

    const showConfirmDialog = (url) => {
      return Alert.alert(
        "Courtesy would like to access another app.",
        `Are you sure you want to navigate away from courtesy?`,
        [
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "No",
          },
          {
              text: "Yes",
              onPress: () => {
                Linking.openURL(url)
              },
          },
        ]
      );
    };
  

  return (
    <View style={{flex: 1, width: '102%', height: '103%', left: -1, backgroundColor: "#85B0AE"}}>
        <TouchableOpacity style={[
                { top: 80, left: 20, width: '25%', height: '6%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,marginBottom: 25},
            ]} onPress={() => setCurrScreen("resources")}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                </View>
        </TouchableOpacity>
        <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> car-for-hire resources </Text>
        <View style={{flex: 0.5, justifyContent: 'space-between'}}>
            <TouchableOpacity
                style={[
                styles.module,
                styles.dropShadow,
                { top: 140, height: 90, borderRadius: '18px', justifyContent: 'center', padding: 20 }
                ]}
                onPress={()=>{
                  showConfirmDialog("https://m.uber.com/ul/")
                  // Linking.openURL('https://m.uber.com/ul/')
                }}
                >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10}}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}> schedule an Uber </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                styles.module,
                styles.dropShadow,
                { top: 140, height: 90, borderRadius: '18px', justifyContent: 'center', padding: 20 }
                ]}
                onPress={()=>{
                  showConfirmDialog('lyft://')
                  // Linking.openURL('lyft://')
                }}
                >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10}}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}> schedule a Lyft </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                styles.module,
                styles.dropShadow,
                { top: 140, height: 90, borderRadius: '18px', justifyContent: 'center', padding: 20 }
                ]}
                onPress={()=>{
                    navigation.navigate("Forum")
                    setSelectedCategory("transportation")
                }}
                >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10}}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}> ask for a ride in the Forum </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    borderRadius: 20
  },
  dropShadow:  {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 15,
    height: 130,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  },
  itemName: {
    fontSize: 16,
    color: '#779391',
    fontWeight: '600',
    textAlign: 'center'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  categoryModule: {
    backgroundColor: "#8AB5B2",
    borderWidth: 1,
    borderColor: "rgba(118, 138, 137, 0.5)",
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 14,
    height: 90,
    width: '90%',
    justifyContent: 'center'
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center'
  },
  module: {
    backgroundColor: "#85B0AE",
    borderWidth: 2,
    borderColor: "#779391",
    position: 'relative',
    width: '90%',
    height: "20%",
    left: 20,
    right: 0,
    bottom: 0,
    borderRadius: 30,
  },
})

export default CarForHire;
