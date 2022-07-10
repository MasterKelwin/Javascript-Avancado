var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

var tbody = document.querySelector('tbody');

var form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var tr = document.createElement('tr');

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value

    campos.forEach(function(campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
        campo.value = ""
    });

    

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].focus();

});