import React from 'react'
import { View, Image, StyleSheet, FlatList } from 'react-native'
import Texto from '../../components/Texto'

export default function Itens({ titulo, lista }) {
    // ITEM QUE VAI SER RENDERIZADO
    const renderItem = ({ item: { nome, imagem } }) =>
    <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>

    return <>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        <FlatList
            data={lista}
            renderItem = {renderItem}
            keyExtractor = {({nome}) => nome}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#061c25',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 16,
        marginBottom: 6
    },

    imagem: {
        width: 46,
        height: 46,      
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#061c25'
    }
})