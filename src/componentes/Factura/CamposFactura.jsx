import React from 'react'

function CamposFactura() {
    return (
        <div className='row mb-3'>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Número de Factura:</label>
                <input type="text" className="form-control" value="1" readOnly disabled />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Nombre del Cliente:</label>
                <input type="text" className="form-control" value="Edgar Morillo" readOnly disabled />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Cédula:</label>
                <input type="text" className="form-control" value="12345" readOnly disabled />
            </div>
            <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Teléfono:</label>
                <input type="text" className="form-control" value="3445588" readOnly disabled />
            </div>
            <div className="col-12 col-md-12 mb-3">
                <label className="form-label">Correo:</label>
                <input type="email" className="form-control" value="lucho@dato.com" readOnly disabled />
            </div>
        </div>
    )
}

export default CamposFactura