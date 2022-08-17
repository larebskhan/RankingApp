import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function CategoriesInput() {
  return (
    <View >
        <View style={[styles.rowContainterTogether, {paddingHorizontal:'5%'}]}>
              <Text style={styles.catText}>Name: </Text>
              <TextInput
                style={[styles.textBox, {width:'50%'}]}
              />
              <Text style={[styles.catText, {paddingLeft: '3%'}]}>Score: </Text>
              <TextInput
                keyboardType='numeric'
                maxLength='3'
                style={[styles.textBox, , {width:'15%'}]}
              />
              <TouchableOpacity onPress={() => {alert('TODO: remove this item')}}>
                <Text> - </Text>
              </TouchableOpacity>
            </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    catText: {
        fontStyle: 'italic',
        color: '#BFBFBD'
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
});