import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilUsuario = () => {
  return (
    <View style={styles.container}>
      {/* Imagem de Perfil */}
      <Image
        source={require('../../../assets/naturoIcon.png')} // Substitua pelo caminho correto da imagem do perfil
        style={styles.imagemPerfil}
      />

      {/* Informações do Usuário */}
      <View style={styles.informacoesUsuario}>
        <Text style={styles.nomeUsuario}>Jesus Loves You</Text>
        <Text style={styles.emailUsuario}>onepieceémelhorquenaturo@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imagemPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  informacoesUsuario: {
    alignItems: 'center',
  },
  nomeUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emailUsuario: {
    fontSize: 18,
    color: '#888888',
  },
});

export default PerfilUsuario;
