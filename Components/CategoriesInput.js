import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function CategoriesInput() {
  return (
    <View >
        <View style={[styles.rowContainterTogether, {paddingHorizontal:'5%', paddingVertical: '2%'}]}>
              <Text style={styles.catText}>Name: </Text>
              <TextInput
                style={[styles.textBox, {width:'80%'}]}
              />
              {/* <Text style={[styles.catText, {paddingLeft: '3%'}]}>Score: </Text>
              <TextInput
                keyboardType='numeric'
                maxLength='3'
                style={[styles.textBox, , {width:'15%'}]}
              /> */}
              <View style={styles.removeButtStyle}>
                <TouchableOpacity 
                  style={styles.buttonStyle} 
                  onPress={() => {alert('TODO: remove this item')}}>
                  <Text style={styles.buttonTextStyle}> - </Text>
                </TouchableOpacity>
              </View>
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
        borderColor: 'rgba(201, 170, 194, 0.5)',
        borderWidth: 2,
        paddingHorizontal: '2%',
        paddingVertical: '1%'
      },
      buttonTextStyle: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: '15%'
      },
      buttonStyle: {
        backgroundColor: 'rgba(201, 170, 194, 0.5)',
        width: 25,
        height: 25,
        // borderRadius: 15,
        // borderWidth: 2,
        // borderColor: 'rgba(201, 170, 194, 0.5)'
      },
      removeButtStyle: {
        paddingLeft: '3%'
      }
});