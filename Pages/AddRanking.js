import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View , TouchableOpacity, SafeAreaView, ScrollView, TextInput, ImageBackground} from 'react-native';
import Header from '../Components/Header';
import NavButton from '../Components/NavButton';
import { useNavigation } from '@react-navigation/native';


export default function AddRanking() {
  const navigation = useNavigation(); 
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainter}>
          <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={() => { navigation.navigate('Ranking')}}>
                <Text style={styles.buttonTextStyle}> Back </Text>
            </TouchableOpacity>
          <Header/>
        </View>

        <ScrollView>
          <View style={styles.content}>
            <View style={styles.rowContainterTogether}>
              <Text>Name: </Text>
              <TextInput
                style={[styles.textBox, {width:'90%'}]}
              />
            </View> 
            <Text>Categories: </Text>
            <View style={styles.rowContainterTogether}>
              <Text>Name: </Text>
              <TextInput
                style={[styles.textBox, {width:'50%'}]}
              />
              <Text style={[{paddingLeft: '3%'}]}>Score: </Text>
              <TextInput
                keyboardType='numeric'
                style={[styles.textBox, , {width:'15%'}]}
              />
              <TouchableOpacity onPress={() => {alert('TODO: remove this item')}}>
                <Text> - </Text>
              </TouchableOpacity>
            </View> 
            <NavButton text="Submit" navigateTo="Ranking"/>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
        <ImageBackground source={require('../icons/background.png')} style={{width: Dimensions.get('window').width, aspectRatio: 1}}/>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: '5%',
  },
  rowContainterTogether: {
    flexDirection: "row"
  },
  textBox: {
    borderColor: '#C9AAC2',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%'
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 14,
    textAlign: 'center',
    paddingTop: '11%',
    marginLeft: '-5%'
  },
  buttonStyle: {
    backgroundColor: '#C651AC',
    width: 50,
    height: 30,
    borderRadius: 15,
    marginLeft: '5%'
  },
  rowContainter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
})