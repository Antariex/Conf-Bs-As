const precioTicket = 200;

resumir = () => {
    let cantidad = document.getElementById('cantidad').value;
    let descuento = document.getElementById('categoria').value;
    let precio = cantidad * (precioTicket - ((precioTicket * descuento)/100));

    document.getElementById('compraTotal').value = precio;
}