let buttonTema = document.getElementById('botao-tema')
let tema = ''
tema = localStorage.getItem('tema')

const imagemButton = {
    claro: './assets/imagens/tema-claro.svg',
    escuro: './assets/imagens/tema-escuro.svg'
}

const trocarTema = () => {
    if(tema == 'tema escuro'){
        buttonTema.src = imagemButton.claro
        buttonTema.className = 'tema claro'
        tema()
    }else{
        buttonTema.src = imagemButton.escuro
        buttonTema.className = 'tema escuro'
        tema()
    }
}

const tema = () => {
    const section = document.getElementsByTagName('section')
    const modal = document.querySelector('.modal')
    const table = document.querySelector('table')
    const dadosTable = document.querySelectorAll('td')
    console.log(dadosTable)

    if(buttonTema.className == 'tema claro'){
        document.body.style.backgroundColor = 'var(--gelo)'
        section[1].style.backgroundColor = 'white'
        modal.style.backgroundColor = 'white'
        table.style.color = 'black'
        tema = 'tema claro'
        localStorage.setItem('tema', tema)
        dadosTable.forEach((element, index) => {
            dadosTable[index].style.backgroundColor = 'var(--gelo200)'
        })
        
    }else{
        document.body.style.backgroundColor = 'var(--black500)'
        section[1].style.backgroundColor = 'var(--black-gray)'
        modal.style.backgroundColor = 'var(--black-gray)'
        table.style.color = 'white'
        tema = 'tema escuro'
        localStorage.setItem('tema', tema)
        dadosTable.forEach((element,index) => {
            dadosTable[index].style.backgroundColor = 'var(--gelo500)'
        })
        
    }

}