import React, { useState } from 'react'
import CamposFactura from '../Factura/CamposFactura';
import CamposProductos from './CamposProductos';

function FormularioProducto({ Facturas, setFacturas }) {

    const AgregarNuevoProducto = () => {

        const NuevoProducto = { ...ProductosFactura, PrecioUnitario: parseFloat(ProductosFactura.PrecioUnitario), Cantidad: parseInt(ProductosFactura.Cantidad) };
        const facturaModificada = [...Facturas, NuevoProducto];
        setFacturas(facturaModificada);
        localStorage.setItem('facturas-guardadas', JSON.stringify(facturaModificada));
        setProductosFactura({ id: '', Descripcion: '', PrecioUnitario: '', Cantidad: '' });
    };

    const [ProductosFactura, setProductosFactura] = useState(
        { id: '', Descripcion: '', PrecioUnitario: '', Cantidad: '' }
    );

    const handleChange = (e) => {
        setProductosFactura({ ...ProductosFactura, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <CamposFactura />

            <CamposProductos ProductosFactura={ProductosFactura} handleChange={handleChange} />

            <div className='row' >
                <div className='col-md-12'>
                    <button type="button" className="btn btn-success w-100" onClick={AgregarNuevoProducto}>Agregar Producto</button>
                </div>
            </div>
        </form>
    )
}

export default FormularioProducto