let buttonTema = document.getElementById('botao-tema')

const imagemButton = {
    claro: './assets/imagens/tema-claro.svg',
    escuro: './assets/imagens/tema-escuro.svg'
}

const trocarTema = () => {
    if(buttonTema.className == 'tema claro'){
        buttonTema.src = imagemButton.escuro
        buttonTema.className = 'tema escuro'
        tema()
    }else{
        buttonTema.src = imagemButton.claro
        buttonTema.className = 'tema claro'
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
        dadosTable.forEach((element, index) => {
            dadosTable[index].style.backgroundColor = 'var(--gelo200)'
        })
        
    }else{
        document.body.style.backgroundColor = 'var(--black500)'
        section[1].style.backgroundColor = 'var(--black-gray)'
        modal.style.backgroundColor = 'var(--black-gray)'
        table.style.color = 'white'
        dadosTable.forEach((element,index) => {
            dadosTable[index].style.backgroundColor = 'var(--gelo500)'
        })
        
    }

}