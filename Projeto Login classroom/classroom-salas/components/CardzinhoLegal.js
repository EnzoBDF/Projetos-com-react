import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  <View style={styles.Card}>
    <Text>Sala de Aula</Text>
    <Text>Materia</Text>
    <Text>Professor</Text>
  </View>
}


const styles = StyleSheet.create({


Card:{
  backgroundImage: 'url("https://thumbs.dreamstime.com/b/paisagem-gen%C3%A9rica-59679375.jpg")',
  flex: 1,
  display: 'flex',
  backgroundColor: "#000"
},
TextDecoration1:{
  fontSize: 'white',
},
TextDecoration2:{
  fontSize: 'white',
},
TextDecoration3:{
  fontSize: 'white',
},


});