class NegociacaoController {
    constructor () {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView._update(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();    
        let diaMesAno = DateHelper.dataParaTexto(this._listaNegociacoes.negociacoes[0].data);
            
        this._negociacoesView._update(this._listaNegociacoes);

    }

    _limpaFormulario() {
        this._inputData.focus();
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    };
}

