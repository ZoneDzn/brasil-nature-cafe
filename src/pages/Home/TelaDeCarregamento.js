import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const TelaDeCarregamento = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
  
    }, 2000);

    return () => {
      // Certifique-se de limpar o timer se o componente for desmontado antes do tempo limite
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={estilos.container}>
      <ActivityIndicator size="large" color="#E38035C2" />
      <Text style={estilos.textoCarregando}>Carregando...</Text>
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
  textoCarregando: {
    fontSize: 18,
    marginTop: 10,
  }
});

export default TelaDeCarregamento;
