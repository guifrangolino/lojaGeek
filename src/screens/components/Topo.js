import React from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import Texto from '../../components/Texto'
import Carousel from 'react-native-snap-carousel'

import allFigures from '../../../assets/all-figures.jpg'
import akali from '../../../assets/akali.jpg'
import alistar from '../../../assets/alistar.jpg'
import jinx from '../../../assets/jinx.jpg'
import talon from '../../../assets/talon.jpg'
import vayne from '../../../assets/vayne.jpg'
import vi from '../../../assets/vi.jpg'
import yasuo from '../../../assets/yasuo.jpg'
import zed from '../../../assets/zed.jpg'

// FORMULA PARA AJUSTAR O TAMANHO DA IMAGEM CONFORME A TELA DO CELULAR
const width = Dimensions.get('screen').width
const altura = 1000
const largura = 1000
const valor = altura / largura * width

export default function Topo({ titulo }) {
    const carouselItems = [
        {
            title: 'Todas as Actions Figures',
            image: allFigures
        },

        {
            title: 'Akali Lua Sangrenta',
            image: akali
        },
        
        {
            title: 'Alistar',
            image: alistar
        },
        
        {
            title: 'Jinx',
            image: jinx
        },
        
        {
            title: 'Talon SSW',
            image: talon
        },
        
        {
            title: 'Vayne Caçadora de Dragões',
            image: vayne
        },
        
        {
            title: 'Vi',
            image: vi
        },
        
        {
            title: 'Yasuo',
            image: yasuo
        },
        
        {
            title: 'SKT T1 Zed ',
            image: zed
        },
    ]

    function renderItem({ item }) {
        return (
            <View style={estilos.carouselItemsContainer}>
                <Image source={item.image} style={estilos.carouselItemsImage}/>
                <Texto style={estilos.carouselItemsTitle}>{item.title}</Texto>
            </View>
        )
    }

    return <>
        <Carousel
            layout={'default'}
            data={carouselItems}
            sliderWidth={valor}
            itemWidth={300}
            renderItem={renderItem}
        />
        {/* <Image source={topo} style={estilos.topo}/> */}
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

const estilos = StyleSheet.create({
    carouselItemsImage: {
        width: '100%',
        height: valor
    },

    carouselItemsContainer: {
        backgroundColor: '#061c25',
        borderRadius: 4,
        height: 395,
        width: '100%',
        padding: 5,
        marginTop: 70,
    },

    carouselItemsTitle: {
        color: '#c28f2c',
        textAlign: 'center',
        marginTop: 5
    },

    // topo: {
    //     marginTop: 30,
    //     width: "100%",
    //     height: valor,
    // },

    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 35,
        color: '#c28f2c',
        fontWeight: 'bold',
        padding: 6,
        marginTop: 30
    }

})