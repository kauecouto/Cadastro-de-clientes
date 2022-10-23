class LocalStorage{
    // Envia dados para o banco
    set(cbProvider){
        localStorage.setItem('clientes', JSON.stringify(cbProvider))
    }

    // Retorna os dados cadastrados no banco
    get(){
        return JSON.parse(localStorage.getItem('clientes')) ?? []
    }
}