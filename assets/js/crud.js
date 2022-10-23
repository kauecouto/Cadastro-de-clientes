const metodos = new LocalStorage()

class Crud{
// Cria um fornecedor no banco
    create(client){   
        const providers = metodos.get()
        providers.push(client)
        metodos.set(providers)
    }

// Trás os fornecedores cadastrados no banco
    read(){           
        return metodos.get()
    }

// Atualiza os dados de un fornecedor no banco
    update(index, client){   
        const providers = metodos.get()
        providers[index] = client
        metodos.set(providers)
    }

// Deleta um fornecedor do banco  
    delete(index){             
        const providers = metodos.get()
        providers.splice(index,1)
        metodos.set(providers)
    }
}