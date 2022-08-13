export class User {
    constructor(id, { name, lastname, email, password, phone, image}) {
        this.setId(id)
        this.setName(name)
        this.setLastname(lastname)
        this.setEmail(email)
        this.setPassword(password)
        this.setPhone(phone)
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

    setLastname(lastname) {
        if (!lastname) throw ('El campo lastname es obligatorio')
        this.lastname = lastname
    }

    setEmail(email) {
        if (!email) throw ('El campo email es obligatorio')
        this.email = email
    }

    setPassword(password) {
        if (!password) throw ('El campo password es obligatorio')
        this.password = password
    }

    setPhone(phone) {
        if (!phone) throw ('El campo teléfono es obligatorio')
        this.phone = phone
    }

    setimage(image) {
        if (!image) throw ('El campo imagen es obligatorio')
        this.image = "/img/" + image
    }
}

export class UserLogin{
    constructor({ email, password}) {
        this.setEmail(email)
        this.setPassword(password)
    }

    setEmail(email) {
        if (!email) throw ('El campo email es obligatorio')
        this.email = email
    }

    setPassword(password) {
        if (!password) throw ('El campo password es obligatorio')
        this.password = password
    }
}