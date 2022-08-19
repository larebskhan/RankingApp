import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ScoreInput() {
  return (
    <View >
        <View style={[styles.rowContainterTogether, {paddingHorizontal:'5%', paddingVertical: '2%'}]}>
              <Text style={styles.catText}>Category #: </Text>
              {/* <TextInput
                style={[styles.textBox, {width:'50%'}]}
              />
              <Text style={[styles.catText, {paddingLeft: '3%'}]}>Score: </Text> */}
              <TextInput
                keyboardType='numeric'
                maxLength='3'
                style={[styles.textBox, , {width:'15%'}]}
              />
              {/* <View style={styles.removeButtStyle}>
                <TouchableOpacity 
                  style={styles.buttonStyle} 
                  onPress={() => {alert('TODO: remove this item')}}>
                  <Text style={styles.buttonTextStyle}> - </Text>
                </TouchableOpacity>
              </View> */}
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
    }
});