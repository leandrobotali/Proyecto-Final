export default class Msj {
    constructor(id, { email, texto}) {
        this.setId(id)
        this.setEmail(email)
        this.setFecha()
        this.setTexto(texto)
    }

    setId(id) {
        if (!id) throw ('El campo id es obligatorio')
        this.id = id
    }

    setEmail(email) {
        if (!email) throw ('El campo email es obligatorio')
        this.email = email
    }

    setFecha() {
        this.fecha = new Date()
    }

    setTexto(texto) {
        if (!texto) throw ('El campo texto es obligatorio')
        this.texto = texto
    }
}