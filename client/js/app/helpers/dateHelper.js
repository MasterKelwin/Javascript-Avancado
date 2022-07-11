class DateHelper {

    textoParaData(texto) {
        return new Date(...texto.split('-').map((item, i) => item - i % 2));
    }

    dataParaTexto(data) {
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