class NegociacaoController {
    constructor () {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );
        
        let diaMesAno = helper.dataParaTexto(negociacao.data);

        console.log(data)
        console.log(diaMesAno) 

    }
}

/*
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
} */