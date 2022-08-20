import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import NavButton from '../Components/NavButton';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

const db = SQLite.openDatabase(
  {
      name: 'test.db',
      location: 'default'
  },
  () => {},
  error => {console.log(error)}
);

export default function Ranking({navigation}) {
  const [rankingList, setRankingList] = useState([])
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      getRankingData()
    }
  }, [isFocused]);

  const getRankingData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT ranking_name FROM Rankings ",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if(len > 0) {
              if(rankingList.length == 0) {
                for(var i = 0; i < len; i++)
                {
                  setRankingList(oldArray => [...oldArray, results.rows.item(i).ranking_name])
                }
              }
              else setRankingList(oldArray => [...oldArray, results.rows.item(len-1).ranking_name])
            }
          }
        )
      })
    } catch (error) {
      console.log(error)
    }
  }

    const dummyData = [
      {
        "name": "Boston Coffee",
        "numItems": 10,
        "winner": 'George Howell'
      },
      {
        "name": "Boston Food",
        "numItems": 3,
        "winner": 'Carmelinas'
      },
      {
        "name": "Columbia Coffee",
        "numItems": 12,
        "winner": 'Azalea Coffee'
      },  
      {
        "name": "Apples",
        "numItems": 6,
        "winner": 'Mini Gala Apples'
      },
    ]
      
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>
        <View style={styles.content}>
          {
            rankingList.map((item) => (
              <View>
                <View style={styles.rowContainter}>
                  <View style={styles.rowContainterTogether}>
                    <TouchableOpacity onPress={() => {navigation.navigate('List')}}>
                      <Text style={styles.rankingName}>{item}</Text>
                    </TouchableOpacity>
                    <View style={styles.editEditPos}>
                      <TouchableOpacity onPress={() => navigation.navigate('AddRanking')}>
                        <Image source={require('../icons/editIcon.png')} style={styles.editStyle}/>
                      </TouchableOpacity>
                    </View>
                    <View style={[styles.editEditPos, {marginLeft: '-3%'}]}>
                      <TouchableOpacity onPress={() => alert('TODO: delete item in db')}>
                        <Image source={require('../icons/trash.png')} style={styles.editStyle}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* <Text style={styles.numItems}>{item.numItems} items</Text> */}
                </View>
                {/* <View style={styles.rowContainterTogether}>
                  <View style={styles.starPosition}>
                    <Image source={require('../icons/star.png')} style={styles.starStyle}/>
                  </View>
                  <Text style={styles.rankingWinner}>{item.winner}</Text>
                </View> */}
                <Image source={require('../icons/fancyLine.png')} style={styles.fancyLineStyle}/>
              </View>
            ))
          }
          <StatusBar style="auto" />
        </View>
        {/* <AddRanking itemToAdd="Ranking"/> */}
      </ScrollView>
      <View style={styles.addItem}>
      <NavButton text="Add Ranking" navigateTo="AddRanking"/>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: '5%',
  },
  rankingName: {
    fontSize: 16
  },
  rankingWinner: {
    color: '#BFBFBD',
    paddingLeft: '1%'
  },
  numItems: {
    color: '#BFBFBD'
  },
  rowContainter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowContainterTogether: {
    flexDirection: "row"
  },
  starStyle: {
    height: 10,
    width: 10,
  },
  fancyLineStyle: {
    width: '99%',
    height: 20,
    resizeMode: 'contain'
  },
  starPosition: {
    paddingTop: '0.75%'
  },
  editEditPos: {
    paddingLeft: '5%',
    paddingTop: '2%'
  },
  editStyle: {
    resizeMode: 'contain',
    width: 15,
    height: 15
  },
  addItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});