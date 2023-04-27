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
          X  Atividades                                <Icon name="folder" size={20} marginLeft={100} color="black" />
        </Text>
        <View style={styles.headerList}>
          <Text style={styles.atvContent}>Atividades atribuidas</Text>
          <Text style={styles.atvContent}>Atividades pendentes</Text>
          <Text style={styles.atvContent}>Atividades concluidas</Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.contentGeneral}>
          <Text style={styles.dropDownListText}>Sem data de entrega</Text>
        </View>

        <View style={styles.contentGeneral}>
          <Text style={styles.dropDownListText}>Sem data de entrega</Text>
        </View>

        <View style={styles.contentGeneral}>
          <Text style={styles.dropDownListText}>Sem data de entrega</Text>
        </View>

        <View style={styles.contentGeneral}>
          <Text style={styles.dropDownListText}>Sem data de entrega</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    width: '100%',
    elevation: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginLeft: 40,
  },
  header:{
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,  
  },
  headerList:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    
  },
  contentWrapper:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'left',
    justifyContent: 'flex-start',
    width: '100%',

  },
  contentGeneral:{
    padding: 10,
    width: '100%',
  },
  dropDownListText:{
    color: 'black',
    fontWeight: 600,
    fontSize: 13,
  },
  atvContent:{
    color: 'black',
    fontSize: 10,
    fontWeight: 600,
    borderBottomWidth: 3,
    paddingBottom: 10,
    borderRadius: 2,
    borderColor: '#3d74ff',
  },
});
