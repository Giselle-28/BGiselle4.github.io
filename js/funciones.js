

function resumir() {
    const precioTicket = 200;
    var cantidadTicket = document.getElementById('cantidad').value;
    console.log(cantidadTicket);
    var descuento = document.getElementById('categoria').value;
    console.log(descuento);
    var precio  = cantidadTicket * (precioTicket - ((precioTicket * descuento)/100));
    document.getElementById('totalcompra').value = 'Total a Pagar: $'+precio;
}