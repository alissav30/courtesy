import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Dimensions,
  } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import TransportationTaskPage from "./TransportationTaskPage";
import MapView from 'react-native-maps';


//function initMap() {
//    const map = new google.maps.Map(document.getElementById("map"), {
//      zoom: 13,
//      center: { lat: 51.501904, lng: -0.115871 },
//    });
//    const transitLayer = new google.maps.TransitLayer();
  
//    transitLayer.setMap(map);
//  }


const PubTranOptsScreen = ({navigation, navScreen, setNavScreen, setCurrScreen, currScreen, transportationPlan, setTransportationPlan, mood, setIsMoodPicker, courtDate, courtTime, child, setNextScreen}) => {
    //const [backButton, setBackButton] = React.useState(false)

  return (
    <View style={{flex: 1, width: '102%', height: '103%', left: -1, backgroundColor: "#85B0AE"}}>
    <TouchableOpacity style={[
            { top: 80, left: 20, width: '25%', height: '6%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,marginBottom: 25},
        ]} onPress={() => setNavScreen("transportationResources")}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
            </View>
    </TouchableOpacity>
    <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> Public Transportation Options </Text>
    <View style={{flex: 0.5, top: 100, justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
        <MapView
            style={styles.map}
            initialRegion={{
                //latitude: Number(latitude),
                //longitude: Number(longitude),
                latitude: 51.501904,
                longitude: -0.115871,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
        </MapView>
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
  map: {
    width: "100%",
    height: "70%",
    borderRadius: 0,
  },
})

export default PubTranOptsScreen;
