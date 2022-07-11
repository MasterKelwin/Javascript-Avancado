class NegociacaoController {
    constructor () {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
            );
        console.log(data)

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );
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