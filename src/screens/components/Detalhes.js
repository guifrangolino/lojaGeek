import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Texto from '../../components/Texto'


export default function Detalhes({ nome, logoFornecedor, fornecedor, descricao, preco, botao }) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>

        <View style={estilos.cabecalhoFornecedor}>
            <Image style={estilos.imagemFornecedor} source={logoFornecedor}/>
            <Texto style={estilos.fornecedor}>{ fornecedor }</Texto>
        </View>

        <Texto style={estilos.descricao}>{ descricao }</Texto>

        <Texto style={estilos.preco}>{ preco }</Texto>

        
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}> {botao} </Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    imagemFornecedor: {
        width: 32,
        height: 32,
    },

    cabecalhoFornecedor: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },

    preco:{
        color: '#c28f2c',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        textShadowColor: 'black',
    },

    descricao:{
        marginTop: 10,
        color: '#061c25',
        fontSize: 16,
        lineHeight: 26,
    },

    fornecedor:{
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 12,
    },

    nome: {
        color: '#061c25',
        fontSize: 26,
        lineHeight: 52,
        fontWeight: 'bold'
    },

    botao: {
        marginTop: 16,
        backgroundColor: '#c28f2c',
        paddingVertical: 16,
        borderRadius: 6,
    },

    textoBotao: {
        color: '#061c25',
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 26,
        fontWeight: 'bold'
    },
})