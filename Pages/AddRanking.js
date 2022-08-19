import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View , TouchableOpacity, SafeAreaView, ScrollView, TextInput, ImageBackground } from 'react-native';
import Header from '../Components/Header';
import NavButton from '../Components/NavButton';
import CategoriesInput from '../Components/CategoriesInput';
import XButton from '../Components/XButton';
import { useState, useEffect } from 'react';

export default function AddRanking() {
  const [catArray, setCatArray] = useState([<CategoriesInput/>]);
  const [catDataArray, setCatDataArray] = useState([])
  const [title, setTitle] = useState('')
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainter}>
          <XButton navigateTo='Ranking'/>
          <Header/>
        </View>

        <ScrollView>
          <View style={styles.content}>
            <View style={[styles.rowContainterTogether, {paddingBottom: '3%'}]}>
              <Text style={styles.headingTextStyle}>Title: </Text>
              <TextInput
                style={[styles.textBox, {width:'87%'}]}
                onChangeText={(value) => { 
                  setTitle(value)}}
              />
            </View> 
            <Text style={styles.headingTextStyle}>Categories: </Text>
            {catArray}
            
            <View style={[styles.rowContainterTogether, styles.addButtonnViewStyle]}>
              <View>
                <TouchableOpacity 
                  style={styles.addButtonStyle}
                  onPress={() => {
                    if(global.finalCatName.length >= 1 && catArray.length >= 1) {
                      setCatDataArray(oldArrayData => [...oldArrayData, global.finalCatName])
                      setCatArray(oldArray => [...oldArray, <CategoriesInput/>]);
                      global.finalCatName = null
                    }
                  }}>
                  <Text style={styles.addButtonTextStyle}> + </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.addButtonnViewStyle, {paddingLeft: '1%'}]}>
                <TouchableOpacity 
                  style={styles.addButtonStyle}
                  onPress={() => {
                    if(catArray.length > 1)
                    {
                      if(catArray.length > catDataArray.length) setCatArray(catArray.slice(0, -1));
                      else
                      {
                        setCatArray(catArray.slice(0, -1));
                        setCatDataArray(catDataArray.slice(0, -1));
                      }
                    }
                    }}>
                  <Text style={styles.addButtonTextStyle}> - </Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <StatusBar style="auto" />
          </View>
        </ScrollView>
        <View style={{paddingLeft: '5%'}}>
        <NavButton src="AddRanking" text="Submit" data={[title, catDataArray]} navigateTo="Ranking"/>
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