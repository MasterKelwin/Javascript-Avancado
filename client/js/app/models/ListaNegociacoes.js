class ListaNegociacoes {

    constructor(update) {
        this._negociacoes = [];
        this._update = update;
    }

    adiciona (negociacao) {
        this._negociacoes.push(negociacao);
        this._update(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
<<<<<<< HEAD
=======
        this._update(this);
>>>>>>> 40da229bd4d563cefc7a61dba60a2212298236e9
    }

}