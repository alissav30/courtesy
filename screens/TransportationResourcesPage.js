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

//const swoopBackground = require("tasks_background.png");


export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'COMPARE PRICING OF OPTIONS', code: '#fff' },
    { name: 'SELF-REPRESENTING GUIDE', code: '#fff' },
    { name: 'PRO BONO LEGAL RESOURCES', code: '#fff' },
    { name: 'FIND A LAWYER NEAR YOU', code: '#fff' },
  ]);

  return (
    <View style={{ flex: 1 }}>
    <View style={{width: '102%', height: '103%', left: -1, backgroundColor: "#85B0AE"}}>
        <Text style={{ top: 65, color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'Helvetica', textAlign: 'center', marginRight:20, marginLeft: 20, marginTop: 20 }}> let’s figure out how
        you’ll get to court!</Text>
        <View style={{ flex: 0.75 }}>
        <View style={{ flex: 1, marginTop: 150, marginBottom: 50, justifyContent: 'space-between', alignItems: 'center' }}>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                )}
                />
            </View>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
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
});