export class Client {
    #name
    #surname
    #idClient
    constructor(name, surname, idClient){
        this.#name = name
        this.#surname = surname
        this.#idClient = idClient
    }

    get Name(){
        return this.#name
    }
    get Surname(){
        return this.#surname
    }

    get idClient(){
        return this.#idClient
    }

    set Name(name){
        this.#name = name
    }
    set Surname(surname){
        this.#surname = surname
    }

    set idClient(idClient){
        return this.#idClient = idClient
    }

    toString(){
        return `<br> Nombre: ${this.#name} <br> Apellido: ${this.#surname} <br>  idCliente: ${this.#idClient} <br>`
    }
}