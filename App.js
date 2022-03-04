import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();

  return (
    <View style={styles.container}>
       <View style={styles.bloco}>
          <Text style={styles.texto}>Valor 1</Text>
          <TextInput style={styles.input} value={valor1} onChangeText={(texto)=>setValor1(texto)} placeholder={'Digite o valor 1'}/>
       </View>
       <View style={styles.bloco}>
          <Text style={styles.texto}>Valor 2</Text>
          <TextInput style={styles.input} value={valor2} onChangeText={(texto)=>setValor2(texto)} placeholder={'Digite o valor 2'}/>
          <TouchableOpacity style={styles.botao}>
         <Text>Entrar</Text>
       </TouchableOpacity>
       </View>
       
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial'
  },
  bloco:{
    textAlign: 'center',
    fontFamily: 'arial',
  },
  input: {
    color: '#000',
    fontSize: 25,
    width: '100%',
    borderColor: '#004',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:30
  },
  texto:{
    fontSize:20
  },
  botao:{
    width:'80%', 
    backgroundColor: '#400'
    
  }
});
