import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavButton({text, navigateTo}) {
    const navigation = useNavigation(); 
    return (
        <View >
            <View>
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate(navigateTo)}}>
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