export class Carrito {
    constructor(id) {
        this.setId(id)
        this.setProds()
    }

    setId(id) {
        if (!id) throw ('El campo id es obligatorio')
        this.id = id
    }

    setProds() {
        this.Prods = []
    }
}

export class ProductotoCart {
    constructor({id, name, description, price}) {
        this.setId(id)
        this.setName(name)
        this.setDescription(description)
        this.setPrice(price)
        this.setCant()
    }

    setId(id) {
        if (!id) throw ('El campo id es obligatorio')
        this.idProd = id
    }

    setName(name) {
        if (!name) throw ('El campo name es obligatorio')
        this.name = name
    }

    setDescription(description) {
        if (!description) throw ('El campo descripción es obligatorio')
        this.description = description
    }

    setPrice(price) {
        if (!price) throw ('El campo precio es obligatorio')
        this.price = price
    }

    setCant() {
        this.cant = 1
    }
}