import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = () => {
  const navigation = useNavigation();

  const handleEntrarPress = () => {
    
    navigation.navigate('CardapioScreen');
  };

  return (
    <View style={estilos.container}>
      <Image
        source={require('../../../assets/texto-inicial.png')}
        style={[estilos.imagem, estilos.textoInicial]}
      />
      <Image
        source={require('../../../assets/cafe-inicial.png')}
        style={estilos.cafeInicial}
      />
      <TouchableOpacity
        style={estilos.botao}
        onPress={handleEntrarPress}
      >
        <Text style={estilos.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  cafeInicial: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  textoInicial: {
    marginTop: -60,
  },
  botao: {
    backgroundColor: '#E38035C2',
    padding: 12,
    borderRadius: 10,
    marginTop: 42,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TelaPrincipal;
