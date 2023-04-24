import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
  

export default function App() {
  
  return (
    <View style={styles.container}>
     <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' }} 
        style={styles.image}
        resizeMode="contain" 
      />
      <View style={styles.email}>
      <Text style={styles.paragraph}>
        <Image
        source={{ uri: 'https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg' }} 
        style={styles.imageCachorro}
        resizeMode="contain" 
      />SeuEmail.com
      </Text>
      </View>
        <TextInput placeholder='E-mail ou telefone'  style={styles.Input}></TextInput>
        <TextInput placeholder='Senha' style={styles.Input}></TextInput>
      <View style={styles.complete}>
        <Text style={styles.forgot}>Esqueceu a Senha?</Text>
           <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Próxima</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  paragraph: {
    margin: 15,
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
    padding: 2,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#e0e0dc',
  },
  image: {
    width: 200,
    height: 100,
  },
  Input:{
    height: 50,
    width: 250,
    borderWidth: 2,
    borderColor: '#4287f5',
    marginBottom: 10,
    borderRadius: 5,
    placeholderTextColor: '#999',
    paddingHorizontal: 10,
  },
  imageCachorro:{
    width: 20,
    height: 20,
    borderRadius: 300,
  },
  email:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  forgot:{
    color: '#4287f5',
    fontWeight: 700,
  },
complete:{
  display: 'flex',
  flexDirection:'row',
  marginTop: 150,
  alignItems: 'center',
},
button:{
  paddingHorizontal: 20,
  height: 45,
  backgroundColor: '#4287f5',
  justifyContent: 'center',
  borderRadius: 5,
  marginLeft: 50,

},
buttonText:{
  color: 'white',
  fontWeight: 500,
  fontSize: 14,
}

});
