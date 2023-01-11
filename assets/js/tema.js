const section = document.getElementsByTagName('section')
const textFilter = document.querySelector('.box_filter')
const modal = document.querySelector('.modal')
const table = document.querySelector('table')
const dadosTable = document.querySelectorAll('td')
let buttonTema = document.getElementById('botao-tema')
let theme = ''
theme = localStorage.getItem('tema')


const imagemButton = {
    claro: './assets/imagens/tema-claro.svg',
    escuro: './assets/imagens/tema-escuro.svg'
}

const trocarTema = (paramTheme) => {
    if(paramTheme == 'tema claro'){
        buttonTema.className = 'tema claro'
        tema()
    }else{
        
        buttonTema.className = 'tema escuro'
        tema()
    }
}

const tema = () => {
    if(buttonTema.className == 'tema claro'){
        temaEscuro() 
    }else{
        temaClaro()
    }
}

const temaEscuro = () => {
    buttonTema.src = imagemButton.claro
    textFilter.style.color ='grey'
    document.body.style.backgroundColor = 'var(--gelo)'
    section[1].style.backgroundColor = 'white'
    modal.style.backgroundColor = 'white'
    table.style.color = 'black'
    theme = 'tema escuro'
    localStorage.setItem('tema', theme)
    dadosTable.forEach((element, index) => {
        dadosTable[index].style.backgroundColor = 'var(--gelo200)'
    })
}

const temaClaro = () => {
    buttonTema.src = imagemButton.escuro
    textFilter.style.color ='white'
    document.body.style.backgroundColor = 'var(--black500)'
    section[1].style.backgroundColor = 'var(--black-gray)'
    modal.style.backgroundColor = 'var(--black-gray)'
    table.style.color = 'black'
    theme = 'tema claro'
    localStorage.setItem('tema', theme)
    dadosTable.forEach((element,index) => {
        dadosTable[index].style.backgroundColor = 'var(--gelo500)'
    })
}

const toMaintainTheme = (paramTheme) => {
    if(paramTheme == 'tema escuro'){
        temaEscuro()
    }else{
        temaClaro() 
    }
}

toMaintainTheme(localStorage.getItem('tema'))