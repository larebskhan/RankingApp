import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, TextInput, StyleSheet, Text, View , TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '../Components/Header';
import { useState } from 'react'
import XButton from '../Components/XButton';
import ScoreInput from '../Components/ScoreInput';
import NavButton from '../Components/NavButton';

export default function AddListItem() {
  const categoryScores = [<ScoreInput/>, <ScoreInput/>, <ScoreInput/>]
  // const [catListArray, setCatListArray] = useState([<ScoreInput/>]);
    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.rowContainter}>
            <XButton navigateTo='List'/>
            <Header/>
          </View>
  
          <ScrollView>
            <View style={styles.content}>
              <View style={[styles.rowContainterTogether, {paddingBottom: '3%'}]}>
                <Text style={styles.headingTextStyle}>Name: </Text>
                <TextInput
                  style={[styles.textBox, {width:'85%'}]}
                />
              </View> 
              <Text style={styles.headingTextStyle}>Categories: </Text>
              {categoryScores}
              {/* {catListArray} */}
              {/* <View style={[styles.rowContainterTogether, styles.addButtonnViewStyle]}>
                <View>
                  <TouchableOpacity 
                    style={styles.addButtonStyle}
                    onPress={() => {
                      setCatListArray(oldArray => [...oldArray, <ScoreInput/>]);
                      }}>
                    <Text style={styles.addButtonTextStyle}> + </Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.addButtonnViewStyle, {paddingLeft: '1%'}]}>
                  <TouchableOpacity 
                    style={styles.addButtonStyle}
                    onPress={() => {
                      setCatListArray((products) => products.filter((_, index) => index !== 0));
                      }}>
                    <Text style={styles.addButtonTextStyle}> - </Text>
                  </TouchableOpacity>
                </View>
              </View> */}
              
              <StatusBar style="auto" />
            </View>
          </ScrollView>
          <View style={{paddingLeft: '5%'}}>
          <NavButton text="Submit" navigateTo="List"/>
          </View>
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
      borderColor: 'rgba(201, 170, 194, 0.5)',
      borderWidth: 2,
      paddingHorizontal: '2%',
      paddingVertical: '1%'
    },
    buttonTextStyle: {
      color: "#C651AC",
      fontSize: 14,
      textAlign: 'center',
      paddingTop: '7%',
      marginLeft: '-15%'
    },
    addButtonTextStyle: {
      color: "#C651AC",
      fontSize: 14,
      textAlign: 'center',
      paddingTop: '6%',
      marginRight: '15%'
    },
    addButtonStyle: {
      backgroundColor: 'white',
      width: 25,
      height: 25,
      borderWidth: 2,
      borderColor: "#C651AC"
    },
    addButtonnViewStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonStyle: {
      backgroundColor: 'white',
      width: 25,
      height: 25,
      borderRadius: 15,
      marginLeft: '5%',
      borderWidth: 2,
      borderColor: '#C651AC'
    },
    rowContainter: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    catText: {
      fontStyle: 'italic',
      color: '#BFBFBD'
    },
    headingTextStyle: {
      fontSize: 16
    },
  })