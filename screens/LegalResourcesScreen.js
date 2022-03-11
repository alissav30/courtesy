import * as React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import LegalTaskPage from "./LegalTaskPage";



const LegalResourcesPage = ({navigation, navScreen, setNavScreen, setSelectedCategory, setCurrScreen, currScreen, selectedCategory,nextScreen, legalRepPlan, setLegalRepPlan, mood, setIsMoodPicker, courtDate, courtTime, child, setNextScreen}) => {
    //const [backButton, setBackButton] = React.useState(false)

  const [items, setItems] = React.useState([
    { name: 'info on self-representing', code: '#fff', nextScreen: 'SRL' },
    { name: 'pro bono (free) legal resources', code: '#fff', nextScreen: 'ProBono' },
    { name: 'find a lawyer near you', code: '#fff', nextScreen: 'FindLawyer' },
    { name: 'compare pricing of options', code: '#fff', nextScreen: 'comparePricing' },
  ]);

  return (
    <View style={{flex: 1, width: '102%', height: '103%', left: -1, backgroundColor: "#85B0AE"}}>
        <TouchableOpacity style={[
                    { top: 80, left: 20, width: '25%', height: '6%', borderRadius: '16px', justifyContent: 'center', borderColor: '#FFFFFF',  borderWidth: 1,marginBottom: 25},
                ]} onPress={() => setNavScreen("legalExplore")}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold', alignSelf: 'center' }}>  ←  BACK </Text>
                    </View>
            </TouchableOpacity>
        <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> legal representation resources </Text>
        <View style={{ flex: 0.75 }}>
        <View style={{ flex: 1, marginTop: 120, justifyContent: 'space-between', alignItems: 'center' }}>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={[styles.gridView, styles.dropShadow]}
                // staticDimension={300}
                // fixed
                spacing={10}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    //onPress={() => setNavScreen(item.nextScreen)}
                    >
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                />
            </View>
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
    borderRadius: 10,
    padding: 15,
    height: 130,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  },
  itemName: {
    fontSize: 16,
    color: '#779391',
    fontWeight: '500',
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

export default LegalResourcesPage;
