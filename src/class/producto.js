export default class Producto {
    constructor(id, { name, description, price, image}) {
        this.setId(id)
        this.setName(name)
        this.setDescription(description)
        this.setPrice(price)
        this.setimage(image)
    }

    setId(id) {
        if (!id) throw ('El campo id es obligatorio')
        this.id = id
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
    
    setimage(image) {
        if (!image) throw ('El campo imagen es obligatorio')
        this.image = "/img/" + image
    }
}