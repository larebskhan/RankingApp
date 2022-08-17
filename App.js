import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListOfRankings from './Pages/ListOfRankings';
import Ranking from './Pages/Ranking';
import AddRanking from './Pages/AddRanking';
import AddListItem from './Pages/AddListItem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Ranking" component={Ranking} />
      <Stack.Screen name="List" component={ListOfRankings} />
      <Stack.Screen name="AddRanking" component={AddRanking} />
      <Stack.Screen name="AddListItem" component={AddListItem} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
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
