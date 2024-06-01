import React, { useState } from 'react'
import CamposFactura from '../Factura/CamposFactura';
import CamposProductos from './CamposProductos';
import Notificacion from '../Notificacion/Notificacion';

function FormularioProducto({ Facturas, setFacturas }) {

    const [notificacionVisible, setNotificacionVisible] = useState(false);

    const [mensaje, setmensaje] = useState('');

    const [ProductosFactura, setProductosFactura] = useState(
        { id: '', Descripcion: '', PrecioUnitario: '', Cantidad: '' }
    );

    const AgregarNuevoProducto = () => {
        if (ProductosFactura.id === '' ||
            ProductosFactura.Descripcion === '' ||
            ProductosFactura.PrecioUnitario === '' ||
            ProductosFactura.Cantidad === '') {
            setmensaje({
                mensaje: "!faltan campos por diligenciar!",
                tipo: "danger"
            })
            setNotificacionVisible(true);
            return;
        }

        const NuevoProducto = { ...ProductosFactura, PrecioUnitario: parseFloat(ProductosFactura.PrecioUnitario), Cantidad: parseInt(ProductosFactura.Cantidad) };
        const facturaModificada = [...Facturas, NuevoProducto];
        setFacturas(facturaModificada);
        localStorage.setItem('facturas-guardadas', JSON.stringify(facturaModificada));
        setProductosFactura({ id: '', Descripcion: '', PrecioUnitario: '', Cantidad: '' });
        setmensaje({
            mensaje: "!Producto Agregado Correctamente!",
            tipo: "success"
        })
        setNotificacionVisible(true);
    };

    const handleChange = (e) => {
        setProductosFactura({ ...ProductosFactura, [e.target.name]: e.target.value });
    };

    return (
        <form>
            <Notificacion
                tipo={mensaje.tipo}
                mensaje={mensaje.mensaje}
                visible={notificacionVisible}
                setVisible={setNotificacionVisible}
            />

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