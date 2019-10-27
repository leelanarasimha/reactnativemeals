import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from './navigation/MealsNavigator';


const fetchFonts = () => {
  console.log("fonts fetching");
  Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Regular.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={fetchFonts()} onFinish={() => {console.log('dsdsdd'); setFontsLoaded(true);}}>
      </AppLoading>
    );
  }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
