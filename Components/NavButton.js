import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

const db = SQLite.openDatabase(
    {
        name: 'test',
    },
    () => {},
    error => {console.log(error)}
);

export default function NavButton({src, text, data, navigateTo}) {
    const navigation = useNavigation(); 
    useEffect(() => {
        createRankingTable();
        createListItemTable();
        createCategoryTable();
        createScoreTable();
    }, [])

    const createRankingTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS " 
                + "Rankings "
                + "(item_id INTEGER PRIMARY KEY AUTOINCREMENT, ranking_name TEXT)",
                [],
                (sqlTxn, res) => {
                    console.log('ranking table created sucessfully')
                },
                error => {
                    console.log('error on creating ranking table' + error.message)
                }
            )
        })
    }
    const createListItemTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS " 
                + "List Item "
                + "(type_id INTEGER PRIMARY KEY AUTOINCREMENT, FOREIGN KEY(item_id) REFERENCES Rankings(item_id), description TEXT, additional_comments TEXT)"
            )
        })
    }
    const createCategoryTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS " 
                + "Category "
                + "(category_id INTEGER PRIMARY KEY AUTOINCREMENT, FOREIGN KEY(item_id) REFERENCES Rankings(item_id), category TEXT)"
            )
        })
    }
    const createScoreTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS " 
                + "Score "
                + "(score_id INTEGER PRIMARY KEY AUTOINCREMENT, FOREIGN KEY(cat_id) REFERENCES Category(cat_id), score INTEGER)"
            )
        })
    }

    const addRankingData = () => {
        db.transaction(async(tx) => {
            tx.executeSql(
                "INSERT INTO Rankings (ranking_name) VALUES (?)",
                [data[0]],
                (sqlTxn, res) => {
                    console.log('ranking data added sucessfully')
                },
                error => {
                    console.log('error on adding ranking data' + error.message)
                }
            )
        })
    }

    const addCategoryData = async (val) => {
        await db.transaction(async(tx) => {
            await tx.executeSql(
                "INSERT INTO Category (category) VALUES (?)",
                [val]
            )
        })
    }
    const addRankErrorCheck = () => {
        if(src == "AddRanking" && (data[1].length == 0 || data[0].length == 0)) {
            if(data[0].length == 0) {
                alert('Error! Please enter a title.')
                navigation.navigate(src)
            }
            else {
                if(global.finalCatName.length == 0) {
                    alert('Error! Please enter a category.')
                    navigation.navigate(src)
                }
                else {
                    addRankingData()
                    for(var i = 0; i < data[1].length; i++) addCategoryData(i)
                    navigation.navigate(navigateTo)
                }
            }
        }
        else navigation.navigate(navigateTo)
    }

    const finalErrorCheck = () => {
        addRankErrorCheck()
    }

    return (
        <View >
            <View>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={() => {
                        finalErrorCheck()
                    }}>
                    <Text style={styles.buttonTextStyle}> {text} </Text>
                </TouchableOpacity>
                
            </View>
            <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
    buttonTextStyle: {
        color: "white",
        fontSize: 14,
        textAlign: 'center',
        paddingTop: '6%'
    },
    buttonStyle: {
        backgroundColor: '#C651AC',
        width: 120,
        height: 30,
        borderRadius: 15
    }
});