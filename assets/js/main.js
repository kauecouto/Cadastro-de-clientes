const modalCadastro = document.querySelector('.scren-modal')
const form = document.querySelector('.form-cadastro')
const btnSalvarCliente = document.querySelector('.btn-salvar')
const headerModal = document.querySelector('header > h2')

const crud = new Crud()

// fechar e abrir modal 
const openModal = () => {
    modalCadastro.classList.add('active')
    headerModal.innerHTML = 'Novo Cliente'
}
const closeModal = () => {
    modalCadastro.classList.remove('active')
    clearFields()
    document.querySelector('.nome').dataset.index = `new`
}

// Dados do fornecedor
const dataClient = () => {
    return {
        name: document.querySelector('.nome').value,
        email: document.querySelector('.email').value,
        celular: document.querySelector('.celular').value,
        cidade: document.querySelector('.cidade').value
    }
}

// Atualiza a tabela com os fornecedores do banco
const updateTable = () => {
    const clients = crud.read()
    const table = document.getElementById('t-body')
    if(clients){
        const newTable = clients.map((client,index) => {
        return `
                <tr>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.celular}</td>
                <td>${client.cidade}</td>
                <td class="opcoes-cliente">
                    <input type="button" value="Editar" class="btn-editar" onclick="editClient(${index})">
                    <input type="button" value="Deletar" class="btn-delete" onclick="deleteClient(${index})">
                </td>
                </tr>
                `
        }).join("")
        table.innerHTML = newTable
    }
}

// Limpa os campos do modal
const clearFields = () => {
    const fields = document.querySelectorAll('.input')
    fields.forEach(field => {
        field.value = ''
    })
}

// Preenche os campos do modal com as informações de um fornecedor
const completeField = (client) => {
    document.querySelector('.nome').value = `${client.name}`
    document.querySelector('.email').value = `${client.email}`
    document.querySelector('.celular').value = `${client.celular}`
    document.querySelector('.cidade').value = `${client.cidade}`
}

// Edita um fornecedor
const editClient = (index) => {
    const client = crud.read()[index]
    openModal()
    completeField(client)
    document.querySelector('.nome').dataset.index = `${index}` 
    headerModal.innerHTML = 'Editar Cliente'
}

//deleta um fornecedor
const deleteClient = (index) => {
    const client = crud.read()[index]
    const response = confirm(`Deseja realmente deletar o fornecedor(a) ${client.name} ?`)
    if(response){
        crud.delete(index)
        updateTable()
    }
}

updateTable()

// Envio do formulario do modal
form.addEventListener('submit', event => {
    event.preventDefault()
    const identifier = document.querySelector('.nome').dataset.index
    
    if(identifier === 'new'){       // Novo Fornecedor
        crud.create(dataClient())
        updateTable()
        closeModal()
    }else{                          // Editar um fornecedor
        crud.update(identifier,dataClient())
        updateTable()
        closeModal()
    }
})