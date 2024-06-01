import React, { useState } from 'react';
import FormularioProducto from '../Producto/FormularioProducto';
import TablaProductos from '../Producto/TablaProductos';

function Factura() {

    const initialFacturas = JSON.parse(localStorage.getItem('facturas-guardadas')) || [];

    const [Facturas, setFacturas] = useState(initialFacturas);

    const porcentajeiva = 0.19;
    
    const subtotal = Facturas.reduce(
        (total, item) =>
            total + (item.PrecioUnitario * item.Cantidad)
        , 0);

    const iva = subtotal * porcentajeiva;
    
    const total = subtotal + iva;

    const EliminarProductoFactura = (id) => {
        const facturaEliminada = setFacturas(Facturas.filter(Factura => Factura.id !== id));
        localStorage.setItem('facturas-guardadas', JSON.stringify(facturaEliminada));
    };

    return (
        <div className="container mt-5">

            <h1 className='fw-bold text-center'>Factura</h1>

            <FormularioProducto Facturas={Facturas} setFacturas={setFacturas} />

            <TablaProductos Facturas={Facturas} EliminarProductoFactura={EliminarProductoFactura} />

            <div className="mt-3 text-end">
                <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                <h5>IVA ({porcentajeiva * 100}%): ${iva.toFixed(2)}</h5>
                <h5>Total: ${total.toFixed(2)}</h5>
            </div>
        </div>
    );
}

export default Factura;
