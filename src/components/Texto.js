import React from 'react'
import { Text, StyleSheet } from 'react-native'



export default function Texto({ children, style }) {
    // FONTE CASO O TEXTO SEJA NEGRITO
    let estilo = estilos.texto
    if(style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito
    }


    return <Text style={[estilo, style]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'PoppinsRegular'
    },

    textoNegrito: {
        fontFamily: 'PoppinsNegrito',
        fontWeight: 'bold'
    }
})