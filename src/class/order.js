export default class Order {
    constructor(id, idCliente, prods) {
        this.setId(id)
        this.setFecha()
        this.setidCliente(idCliente)
        this.setTotal(prods)
        this.setProds(prods)
    }

    setId(id) {
        if (!id) throw ('El campo id es obligatorio')
        this.id = id
    }

    setFecha() {
        this.fecha = new Date()
    }

    setidCliente(idCliente) {
        if (!idCliente) throw ('El campo idCliente es obligatorio')
        this.idCliente = idCliente
    }

    setTotal(prods) {
        if (!prods) throw ('El campo prods es obligatorio')
        if(prods.length>0){
            let total = 0
            prods.forEach(producto => {
                total = (producto.price * producto.cant) + total
            });
            this.total = total
        }else{
            this.total = 0
        }
    }

    setProds(prods) {
        if (!prods) throw ('El campo prods es obligatorio')
        this.prods = prods
    }
}