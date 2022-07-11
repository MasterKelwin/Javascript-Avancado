class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this.quantidade;
    }

    get valor() {
        return this.valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}