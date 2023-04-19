import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import duolingo from  './assets/duolingo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={{uri: 'https://o.remove.bg/downloads/26c37a91-7c5a-46ea-9866-8e320d7ff4c2/image-removebg-preview.png'}}
      style={styles.Image}/>
      <Text style={styles.text}>Learn a language for free.{'\n'}Forever.</Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff.',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace'
  },
  button1: {
    width: 310,
    height: 50,
    backgroundColor: '#78C802',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 6,
    borderColor: '#4d8001',
    marginBottom: 10,
    borderWidth: 2,
  },
  button2: {
    width: 310,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 6,
    borderColor: '#b2b3b1',
    borderWidth: 2,

  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 700,

  },
  buttonText2: {
    fontSize: 16,
    color: '#78c802',
    fontWeight: 700,

  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#868a80',
    marginBottom: 20,
    fontWeight: 700,

  },
  Image:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
   
  },
});
