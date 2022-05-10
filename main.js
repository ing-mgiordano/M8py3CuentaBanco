import { Client } from './client.js'
import { Account } from './account.js'


const buttonNewClient = document.getElementById('new-client')
buttonNewClient.addEventListener('click', registrationCustomer)

let arrayClient = []

function registrationCustomer(){
    let nameNewClient = document.getElementById('client-name').value
    let surnameNewClient = document.getElementById('client-surname').value
    let randomAcount = `${Math.ceil(Math.random() * 99999)}`
    let idNewClient = nameNewClient.substr(0, 2)+surnameNewClient.substr(0, 2)+randomAcount.padStart(5, '0')
    const findClient = arrayClient.find(client => 
        client.Name == nameNewClient.toUpperCase() && client.Surname == surnameNewClient.toUpperCase()
    )

    if(!findClient){
        const newClient = new Client(nameNewClient.toUpperCase(), surnameNewClient.toUpperCase(), idNewClient.toLowerCase() )
        arrayClient.push(newClient)
    }
    console.log(arrayClient)
    document.getElementById('client-data').innerHTML = arrayClient.join('').toString()
}


const buttonDeleteClient = document.getElementById('delete-client')
buttonDeleteClient.addEventListener('click', deleteCustomer)

function deleteCustomer(){
    let deleteIdClient = document.getElementById('client-id').value
    let clientDeleted = false
    console.log(deleteIdClient)
    arrayClient.forEach((item, indice) => {
        if (item.idClient == deleteIdClient){
            arrayClient.splice(indice,1)
            arrayAccount.splice(indice,1)
            clientDeleted = true
            alert(`El cliente ${deleteIdClient} se elimino correctamente`)
            document.getElementById('client-data').innerHTML = arrayClient.join('').toString()
            document.getElementById('account-data').innerHTML = arrayAccount.join('').toString()
        }
    } )
    if(!clientDeleted){
        alert(`El cliente ${deleteIdClient} no se encuentra en la base de datos`)
    }
}


const buttonCreateAccount = document.getElementById('create-account')
buttonCreateAccount.addEventListener('click', createAccount)

let arrayAccount = []

function createAccount(){
    let accounName = document.getElementById('client-name').value
    let accounSurname = document.getElementById('client-surname').value
    let findClient = false

    arrayClient.forEach((client, indice) => {
        if (client.Name == accounName.toUpperCase() && client.Surname == accounSurname.toUpperCase()){
            const newAccount = new Account(arrayClient[indice].idClient.substr(4), 0, arrayClient[indice].idClient)
            findClient = true
            arrayAccount.push(newAccount)
            document.getElementById('account-data').innerHTML = arrayAccount.join('').toString()
            console.log(arrayAccount)
        }            
    })
    if(!findClient){
        alert('El cliente no se encuentra registrado')
    }
}   


const buttonDepositMoney = document.getElementById('deposit-money')
buttonDepositMoney.addEventListener('click', depositMoney)

function depositMoney(){
    let numInAccount = document.getElementById('account-number').value
    let moneyQuantity = document.getElementById('money-number').value
    arrayAccount.forEach((cuenta, indice) => {

        if (cuenta.NumAccount == numInAccount){
            arrayAccount[indice].inMoney(Number(moneyQuantity))
            document.getElementById('account-data').innerHTML = arrayAccount.join('').toString()
        }            
    })
}


const buttonWithdrawMoney = document.getElementById('withdrawals')
buttonWithdrawMoney.addEventListener('click', retirarMoney)

function retirarMoney(){
    let numOutAccount = document.getElementById('account-number').value
    let moneyQuantity = document.getElementById('money-number').value
    arrayAccount.forEach((cuenta, indice) => {

        if (cuenta.NumAccount == numOutAccount){
            arrayAccount[indice].outMoney(Number(moneyQuantity))
            document.getElementById('account-data').innerHTML = arrayAccount.join('').toString()
        }            
    })
}