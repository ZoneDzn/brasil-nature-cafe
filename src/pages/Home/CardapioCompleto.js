import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const CardapioCompleto = () => {
    const [itens, setItens] = useState([
        { id: '1', nome: 'Bolo de Cenoura com cobertura de chocolate', preco: 5.00, quantidade: 0, imagem: require('../../../assets/BoloDeCenouraChocolate.png') },
        { id: '2', nome: 'Tortelete de morango', preco: 7.00, quantidade: 0, imagem: require('../../../assets/TorteleteDeMorango.png') },
        { id: '3', nome: 'Cappuccino cremoso', preco: 3.50, quantidade: 0, imagem: require('../../../assets/CappuccinoCremoso.png') },
    ]);

    const adicionarItem = (id) => {
        setItens(prevItens =>
            prevItens.map(item =>
                item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
            )
        );
    };

    const removerItem = (id) => {
        setItens(prevItens =>
            prevItens.map(item =>
                item.id === id && item.quantidade > 0 ? { ...item, quantidade: item.quantidade - 1 } : item
            )
        );
    };

    const calcularTotal = () => {
        return itens.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
    };

    return (
        <View style={styles.container}>
            {/* Lista de comidas */}
            <FlatList
                data={itens}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemCardapio}>
                        <Image source={item.imagem} style={styles.imagemProduto} />
                        <Text style={styles.nomeItem}>{item.nome}</Text>
                        <View style={styles.operacoesQuantidade}>
                            <TouchableOpacity onPress={() => removerItem(item.id)}>
                                <Text style={styles.operacaoText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantidadeText}>{item.quantidade}</Text>
                            <TouchableOpacity onPress={() => adicionarItem(item.id)}>
                                <Text style={styles.operacaoText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.precoItem}>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
                    </View>
                )}
            />
            {/* Total e botão de confirmar pedido */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: R$ {calcularTotal()}</Text>
                <TouchableOpacity style={styles.confirmarBotao}>
                    <Text style={styles.confirmarTexto}>Confirmar Pedido</Text>
                </TouchableOpacity>
            </View>
            {/* Rodapé */}
            <View style={styles.footer}>
                <View style={styles.footerIcons}>
                    <Image
                        source={require('../../../assets/home.png')} // Ícone de casa
                        style={[styles.footerIcon, { width: 30, height: 30 }]}
                    />
                    <Image
                        source={require('../../../assets/list.png')} // Ícone de lista
                        style={[styles.footerIcon, { width: 30, height: 30 }]}
                    />
                    <Image
                        source={require('../../../assets/user.png')} // Ícone de usuário
                        style={[styles.footerIcon, { width: 30, height: 30 }]}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    itemCardapio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
    },
    imagemProduto: {
        width: 50,  // Largura da imagem
        height: 50, // Altura da imagem
        marginRight: 10, // Espaçamento à direita do item
    },
    nomeItem: {
        fontSize: 16,
        maxWidth: '45%', // Defina a largura máxima desejada para o contêiner de nome do item
    },
    precoItem: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    operacoesQuantidade: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    operacaoText: {
        fontSize: 20,
        marginHorizontal: 8,
    },
    quantidadeText: {
        fontSize: 16,
    },
    totalContainer: {
        marginTop: 20, // Adicionando margem superior para separar do rodapé
        marginBottom: 60, // Adicionando margem inferior para evitar sobreposição com o rodapé
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    confirmarBotao: {
        backgroundColor: '#E38035C2',
        padding: 10,
        borderRadius: 5,
    },
    confirmarTexto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute', // Define a posição como absoluta
        bottom: 0, // Coloca o rodapé no final da tela
        left: 0, // Alinha o rodapé à esquerda da tela
        right: 0, // Alinha o rodapé à direita da tela
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    footerIcons: {
        flexDirection: 'row',
        justifyContent: 'center', // Centraliza os ícones horizontalmente
        alignItems: 'center', // Centraliza os ícones verticalmente
        marginBottom: 15,
    },
    footerIcon: {
        marginHorizontal: 35,
        // Estilo dos ícones do rodapé
    },
});

export default CardapioCompleto;
