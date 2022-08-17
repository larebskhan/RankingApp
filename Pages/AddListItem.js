import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '../Components/Header';

export default function AddListItem() {
    return(
      <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView>
          <View>
            <Text>This is the add list item page</Text>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  })