import * as React from 'react';
import { Text, View, StyleSheet, Header, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (    
 
    
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
       <Image
        source={{ uri: 'https://assets.stickpng.com/images/588a64e7d06f6719692a2d11.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
      <Text style={styles.title}>Google Classroom</Text>
           <Image
        source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/nouvelle-icone-grise.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
    </View>
      <Text style={styles.paragraph}>
      </Text>
      <View style={styles.estilo}>
      </View>
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>
      <View style={styles.Card}>
        <Text style={styles.TextDecoration1}>Sala de Aula</Text>
        <Text style={styles.TextDecoration2}>Materia</Text>
        <Text style={styles.TextDecoration3}>Professor</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Card:{
  backgroundColor: '#3264ba',
  resizeMode: 'contain',
  flex: 1,
  display: 'flex',
  height:200,
  width: 310,
  borderRadius: 15,
  marginBottom: 15,
},
TextDecoration1:{
  marginLeft: 15,
  color: 'white',
  fontWeight: 500,
  fontSize: 18,
},
TextDecoration2:{
  fontWeight: 450,
  marginLeft: 15,
  color: 'white',
  fontSize: 14,
},
TextDecoration3:{
  position: 'relative',
  marginLeft: 15,
  color: 'white',
  top: '43%',
  zIndex: 2,
  fontSize: 12,
},
header: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#9fa6a1',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'left',

  },
title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#656966',
    marginRight:40,
  },
  image:{
    width: 50,
    height: 30,
  }
});
