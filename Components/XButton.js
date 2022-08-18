import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function XButton({navigateTo}) {
    const navigation = useNavigation(); 
    return (
        <View >
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => { navigation.navigate(navigateTo)}}>
                <Text style={styles.buttonTextStyle}> x </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
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
      marginLeft: '20%',
      marginTop: '8%',
      borderWidth: 2,
      borderColor: '#C651AC'
    },
});  