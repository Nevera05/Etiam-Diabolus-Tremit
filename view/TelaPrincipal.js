import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F9',
      }}>
      <Text style={{ color: '#000', fontSize: 25 }}>Selecione a tela</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title="Tela 1" onPress={() => navigation.push('Tela 1')} />
        <Button title="Tela 2" onPress={() => navigation.push('Tela 2')} />
     
        <Button title="Tela 3" onPress={() => navigation.push('Tela 3')} />
         </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button title="Tela 4" onPress={() => navigation.push('Tela 4')} />
        <Button title="Tela 5" onPress={() => navigation.push('Tela 5')} />
        <Button title="Tela 6" onPress={() => navigation.push('Tela 6')} />
        <Button title="Tela 7" onPress={() => navigation.push('Tela 7')} />
      </View>
    </View>
  );
};
