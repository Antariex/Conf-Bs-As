const precioTicket = 200;

resumir = () => {
    let descuento = document.getElementById('categoria');
    let cantidad = document.getElementById('cantidad');
    let precio = cantidad * (precioTicket - ((precioTicket * descuento)/200));

    document.getElementById('compraTotal') = 'Total a pagar: $' + precio;

    console.log(precio)
}