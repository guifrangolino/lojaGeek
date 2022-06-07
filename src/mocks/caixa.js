import logo from '../../assets/riot-logo.png'

// IMPORT DA IMAGENS DOS ITENS
import akali from '../../assets/akali.jpg'
import alistar from '../../assets/alistar.jpg'
import jinx from '../../assets/jinx.jpg'
import talon from '../../assets/talon.jpg'
import vayne from '../../assets/vayne.jpg'
import vi from '../../assets/vi.jpg'
import yasuo from '../../assets/yasuo.jpg'
import zed from '../../assets/zed.jpg'

const caixa = {
    topo: {
        titulo: 'League of Shop'
    },

    detalhes: {
        nome: 'Caixa de Action Figures',
        logoFornecedor: logo,
        fornecedor: 'Riot Games',
        descricao: 'Caixa com Action Figures do jogo eletrônico League of Legends',
        preco: 'R$ 579,90',
        botao: 'Comprar',
    },

    itens: {
        titulo: 'Action Figures da Caixa',
        lista: [
            {
                nome: 'Akali Lua Sangrenta',
                imagem: akali
            },
            
            {
                nome: 'Alistar',
                imagem: alistar
            },
            
            {
                nome: 'Jinx',
                imagem: jinx
            },
            
            {
                nome: 'Talon SSW',
                imagem: talon
            },
            
            {
                nome: 'Vayne Caçadora de Dragões',
                imagem: vayne
            },
            
            {
                nome: 'Vi',
                imagem: vi
            },
            
            {
                nome: 'Yasuo',
                imagem: yasuo
            },
            
            {
                nome: 'SKT T1 Zed ',
                imagem: zed
            },
            
        ]
    }
}

export default caixa