
let _filterBy = ''
let clientsFiltered = []
let clients = crud.read()

const filter = () => {
    _filterBy = document.querySelector('#input-filter').value
    clientsFiltered = clients.filter((client) => client.name.toLowerCase().indexOf(_filterBy.toLocaleLowerCase()) > -1)
    updateTable(clientsFiltered)
}