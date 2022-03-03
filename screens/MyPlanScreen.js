import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const swoopBackground = require("./plan_background.png");


const MyPlanScreen = ({ navigation }) => {
  return (
      <View style={{ flex: 1, padding: 0 }}>
        <ImageBackground source={swoopBackground} style={{width: '100%', height: '107%'}}>
            <View style={styles.planItem}>
                <Text> Example </Text> 
            </View>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
    planItem: {
        borderWidth: 2,
        width: '90%',
        height: '10%',
    },
});

export default MyPlanScreen;