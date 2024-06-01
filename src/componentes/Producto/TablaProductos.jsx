import React from 'react'

function TablaProductos({ Facturas, EliminarProductoFactura }) {

    return (
        <table className="table table-striped table-bordered mt-3">
            <thead>
                <tr>
                    <th>ID Producto</th>
                    <th>Descripción</th>
                    <th>Valor Unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {Facturas.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.Descripcion}</td>
                        <td>$ {item.PrecioUnitario.toFixed(2)}</td>
                        <td>{item.Cantidad}</td>
                        <td>$ {(item.PrecioUnitario * item.Cantidad).toFixed(2)}</td>
                        <td><button className="btn btn-danger" onClick={() => EliminarProductoFactura(item.id)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TablaProductos