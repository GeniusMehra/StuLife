import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlaceCard from './components/PlaceCard';
import Home from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux';
import Store from './Redux/store';

export default function App() {

  const Stack=createNativeStackNavigator()
  return (
    // <View style={styles.container}>
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});