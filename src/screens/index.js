import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import Topo from '../screens/components/Topo'
import Detalhes from '../screens/components/Detalhes'
import Itens from './components/itens'


export default function Caixa({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.caixa}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({ 
    
    caixa: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },

})