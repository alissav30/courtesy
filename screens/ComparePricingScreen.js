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
import { BarChart } from 'react-native-chart-kit';



const ComparePricing = ({navigation, setCurrScreen, currScreen, transportationPlan, setTransportationPlan, mood, setIsMoodPicker, courtDate, courtTime, child, setNextScreen}) => {
    //const [backButton, setBackButton] = React.useState(false)


  return (
    <View style={{flex: 1, width: '102%', height: '103%', left: -1, backgroundColor: "#85B0AE"}}>
        <TouchableOpacity style={[
                { top: 80, left: 20, width: '25%', height: '6%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,marginBottom: 25},
            ]} onPress={() => setCurrScreen("resources")}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                </View>
        </TouchableOpacity>
        <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:10, marginLeft: 10, marginTop: 20 }}> Compare Pricing </Text>
        <View style={{top: 120, justifyContent: "center", alignItems: 'center'}}>
            <BarChart
            style={{ flex: 1, margin: 10}}
            data={{
                labels: ["Uber", "Lyft", "Bus", "Bike", "Subway"],
                datasets: [{
                    data: [19, 15, 10, 3, 5]}]
                }}
            width={370}
            spacing={0.2}
            height={400}
            yAxisLabel="$"
            gridMin={0}
            contentInset={{ top: 10, bottom: 10 }}
            chartConfig={{ 
                backgroundColor: "transparent",
                backgroundGradientTo: "white",
                backgroundGradientFromOpacity: 0,
                backgroundGradientFrom: "white",
                backgroundGradientToOpacity: 0,
                color: (opacity = 0.1) => `#FFFFFF`,
                barPercentage: 0.8,
                barRadius : 10,  
               }}
            verticalLabelRotation={50}
            />
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
  }
})

export default ComparePricing;
