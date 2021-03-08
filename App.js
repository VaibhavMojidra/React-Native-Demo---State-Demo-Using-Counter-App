import React from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import CounterScreen from './src/screens/CounterScreen';

export default function App() {
  return (
    <View style={{flex: 1,backgroundColor:"#21F313"}}>
      <SafeAreaView style={styles.container}>
      <View>
        <CounterScreen/>
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : Platform.OS==="android"? StatusBar.currentHeight:0,
  },
});
