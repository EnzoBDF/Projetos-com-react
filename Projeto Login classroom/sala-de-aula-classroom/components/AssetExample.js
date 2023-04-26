import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
              <Image
        source={{ uri: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg' }}
        style={{ width: 40, height:40, borderRadius: 100, marginRight: 15, }}
      />
Compartilhe com sua turma
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 70,
    shadowColor: '#000000', // Cor da sombra
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.20, 
    shadowRadius: 5, 
    elevation: 5,
    borderRadius: 10,
    width: 320,

  },
  paragraph: {
    display: 'flex',
    fontSize: 11,
    textAlign: 'left',
    alignItems: 'center',
    marginLeft: '8%',
    cursor: 'pointer',
  },
  logo: {
    height: 0,
    width: 0,
  }
});
