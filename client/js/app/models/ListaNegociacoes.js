class ListaNegociacoes {

    constructor(update) {
        this._negociacoes = [];
        //this._update = update;
    }

    adiciona (negociacao) {
        // this._negociacoes = [].concat(this._negociacoes, negociacao);
        this._negociacoes.push(negociacao);
        //this._update(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

}