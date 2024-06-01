import React from 'react'

function CamposProductos({ ProductosFactura, handleChange }) {
    return (
        <div className='row mb-3'>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">ID Producto</label>
                <input type="text" className="form-control" name="id" value={ProductosFactura.id} onChange={handleChange} />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Descripción</label>
                <input type="text" className="form-control" name="Descripcion" value={ProductosFactura.Descripcion} onChange={handleChange} />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Valor Unitario</label>
                <input type="number" className="form-control" name="PrecioUnitario" value={ProductosFactura.PrecioUnitario} onChange={handleChange} />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Cantidad</label>
                <input type="number" className="form-control" name="Cantidad" value={ProductosFactura.Cantidad} onChange={handleChange} />
            </div>
        </div>
    )
}

export default CamposProductos