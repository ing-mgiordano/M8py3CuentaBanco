export class Account {
    #numAccount
    #balance
    #idClient
    constructor(numAccount, balance = 0, idClient){
        this.#numAccount = numAccount
        this.#balance = balance
        this.#idClient = idClient
    }

    get NumAccount(){
        return this.#numAccount
    }
    get Balance(){
        return this.#balance
    }

    get idClient(){
        return this.#idClient
    }

    set NumAccount(numAccount){
        this.#numAccount = numAccount
    }
    set Balance(balance){
        this.#balance = balance
    }

    set idClient(idClient){
        return this.#idClient = idClient
    }

    toString(){
        return `<br> Numero Cuenta: ${this.#numAccount} <br> Balance: $${this.#balance} <br>`
    }

    inMoney(money){
        this.#balance += money
    }
    outMoney(money){
        this.#balance -= money
    }
}