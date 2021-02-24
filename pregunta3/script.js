function submit() {
    var nombre = document.getElementById("nombre").value
    var orientacion = document.getElementById("orientacion").value
    var cantidad = document.getElementById("cantidad").value

    if (cantidad > 50) {
        var estado = ("+ " + 50);
    } else if (cantidad < 50) {
        var estado = ("- " + 50);
    } else if (cantidad = 50) {
        var estado = ("= " + 50);
    }

    document.getElementById("Datos").insertRow(-1).innerHTML = '<tr><td>' + nombre +
        '<tr><td>' + orientacion + '<tr><td>' + cantidad + '<tr><td>' + status + '<tr><td>'
}

function getGanador()

