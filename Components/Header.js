import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View >
        <View>
            <Text style={styles.headerStyle}>RankMe!</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    headerStyle: {
        color: "#C651AC",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "right",
        paddingBottom: 10,
        paddingRight: '5%'
    }
});