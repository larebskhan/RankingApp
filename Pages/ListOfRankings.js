import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import Header from '../Components/Header';
import NavButton from '../Components/NavButton';
import XButton from '../Components/XButton';

export default function ListOfRankings({navigation}) {
  // const [shouldShow, setShouldShow] = useState(true);
  // const [dropIcon, setDropIcon] = useState('+');
  const dummyData = [
    {
      "name": "George Howell",
      "categories": [
        {
          "category": "Flavor",
          "score": 5
        },
        {
          "category": "Aesthetics",
          "score": 5
        },
        {
          "category": "Price",
          "score": 4.5
        },
      ],
      "additionalComments": "The coffee was amazing and I loved it and I will go back and yeah this is my additional comment",
      "totalScore": 4.5,
      "place": 1,
      "visible": false
    },
    {
      "name": "Intelligensia",
      "categories": [
        {
          "category": "Flavor",
          "score": 5
        },
        {
          "category": "Aesthetics",
          "score": 5
        },
        {
          "category": "Price",
          "score": 4.5
        },
      ],
      "additionalComments": "The coffee was amazing and I loved it and I will go back and yeah this is my additional comment",
      "totalScore": 4.2,
      "place": 2,
      "visible": false
    },
    {
      "name": "Sofra",
      "categories": [
        {
          "category": "Flavor",
          "score": 5
        },
        {
          "category": "Aesthetics",
          "score": 5
        },
        {
          "category": "Price",
          "score": 4.5
        },
      ],
      "additionalComments": "The coffee was amazing and I loved it and I will go back and yeah this is my additional comment",
      "totalScore": 4.0,
      "place": 3,
      "visible": false
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainter}>
        <XButton navigateTo='Ranking'/>
        <Header/>
      </View>

      <ScrollView>
        <View style={styles.content}>
        {
          dummyData.map((item) => (
            <View>
              <View style={styles.rowContainter}>
                <View style={styles.rowContainterTogether}>
                  <Text style={styles.place}>{item.place}</Text>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.editEditPos}>
                      <TouchableOpacity onPress={() => alert('Edit Item')}>
                        <Image source={require('../icons/editIcon.png')} style={styles.editStyle}/>
                      </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.rowContainterTogether}>
                  <View style={styles.starPosition}>
                    <Image source={require('../icons/star.png')} style={styles.starStyle}/>
                  </View>
                  <Text>{item.totalScore}</Text>
                </View>
              </View>
              <View style={styles.catStyle}>
                {
                  item.categories.map((cat) => (
                    <View>
                      <View style={styles.rowContainter}>
                        <Text>{cat.category}</Text>
                        <View style={styles.rowContainterTogether}>
                          <View style={styles.starPosition}>
                            {/* <Image source={require('../icons/star.png')} style={styles.starStyle}/> */}
                          </View>
                          <Text style={styles.addComments}>{cat.score}</Text>
                        </View>
                      </View >
                    </View>
                  ))
                }
                <View>
                  <Text>Additional Comments:</Text>
                  <Text style={styles.addComments}>{item.additionalComments}</Text>
                </View>
              </View>
              <Image source={require('../icons/fancyLine.png')} style={styles.fancyLineStyle}/>
            </View>
          ))
        }
        <StatusBar style="auto" />
        </View>
      </ScrollView>
      <View style={styles.addItem}>
      <NavButton text="Add Item" navigateTo="AddListItem"/>
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
  rowContainter: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowContainterTogether: {
    flexDirection: "row"
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
  itemName: {
    fontSize: 16
  },
  starPosition: {
    paddingTop: '1%',
    marginTop: '7%',
    marginRight: '5%'
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
  addComments: {
    fontStyle: 'italic',
    color: '#BFBFBD'
  },
  catStyle: {
    padding: '5%'
  },
  place: {
    fontWeight: 'bold',
    color: '#EDC3E4',
    marginTop: '1.5%',
    marginRight: '5%'
  },
  buttonTextStyle: {
    color: "#C651AC",
    fontSize: 14,
    textAlign: 'center',
    paddingTop: '7%',
    marginLeft: '-15%'
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
  addItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  });
