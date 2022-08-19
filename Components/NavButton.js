import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavButton({src, text, data, navigateTo}) {
    const navigation = useNavigation(); 
    
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
                else navigation.navigate(navigateTo)
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