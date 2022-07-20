class NegociacaoController {
    constructor () {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    console.log(`interceptando ${prop}`);

                    Reflect.apply(target[prop], target, arguments);

                    self._negociacoesView.update(target);
                }
                return Reflect.get(target, prop, receiver)
            }
        });
    

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adiciona(event) {
        event.preventDefault();
        console.log(this._inputData.value);
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();          
        this._negociacoesView.update(this._listaNegociacoes);
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
            this._inputValor.value,
        ); 
    };

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas";
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);
    }
}

