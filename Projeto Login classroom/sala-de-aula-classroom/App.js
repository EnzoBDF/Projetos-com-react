import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paragraph}>
            Nome da Turma
        </Text>
      </View>
      <Card>
        <AssetExample />
      </Card>
       <View style={styles.footer}>
       <Text style={styles.footerContent}><Icon name="file" size={20} color="#4e5259" />Mural</Text> <Text style={styles.footerContent}><Icon name="bars" size={20} color="#4e5259" />Atividades</Text> <Text style={styles.footerContent}><Icon name="paperclip" size={20} color="#4e5259" />Pessoas</Text>
       </View>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 150,
    color: '#FFFFFF'
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    width: '100%',
    height: 90,
    backgroundColor: '#462ca3',
    marginBottom: 10,
    borderRadius: 5,
    marginTop: '3%',
  },

  footer:{
    position: 'fixed',
    width: '100%',
    height: '8%',
    backgroundColor: '#f7f7f7',
    marginTop: '232%',
    borderTopWidth: 1,
    borderColor: '#4e5259',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  footerContent:{
    display: 'flex',
    alignItems: 'center',
    color: '#4e5259',
    fontWeight: 700,
    flexDirection: 'column',
    cursor: 'pointer',
  }
});
