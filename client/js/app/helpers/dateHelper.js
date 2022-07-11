class DateHelper {

    constructor () {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd')
        };

        return new Date(...texto.split('-').map((item, i) => item - i % 2));
    }

    static dataParaTexto(data) {
        let month = data.getMonth();
        month++;
        if(month < 10) {
            month = `0${month}`
        }

        let day = data.getDate();
        if(day < 10) {
            day = `0${day}`
        }

        return `${day}/${month}/${data.getFullYear()}`        
    }
}