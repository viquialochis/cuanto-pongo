import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
//import '../Estilos/estilos.scss';


function CalculadorGastos() {
  const [participantes, setParticipantes] = useState([{ nombre: '', monto: '' }]);
  const [promedio, setPromedio] = useState(0);
  const [totalMonto, setTotalMonto] = useState(0);
  const [resultado, setResultado] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddParticipante = () => {
    setParticipantes([...participantes, { nombre: '', monto: '' }]);
  };

  const handleCambiarNombre = (index, newNombre) => {
    const actualizacionParticipantes = [...participantes];
    actualizacionParticipantes[index].nombre = newNombre;
    setParticipantes(actualizacionParticipantes);
  };

  const handleEliminarParticipante = (index) => {
    const actualizacionParticipantes = [...participantes];
    actualizacionParticipantes.splice(index, 1);
    setParticipantes(actualizacionParticipantes);
  };

  const handleCambiarMonto = (index, newMonto) => {
    const actualizacionParticipantes = [...participantes];
    actualizacionParticipantes[index].monto = newMonto;
    setParticipantes(actualizacionParticipantes);
  };

  const handleCalculate = () => {
    const participantesFiltrados = participantes.filter(participante => participante.nombre !== '' || participante.monto !== '');

    const participanteSinNombre = participantesFiltrados.find(participante => participante.nombre === '' && participante.monto !== '');
    if (participanteSinNombre) {
      setShowAlert(true);
      return;
    }

    const total = participantesFiltrados.reduce((acum, participante) => acum + parseFloat(participante.monto || 0), 0);
    setTotalMonto(total);

    const montoPromedio = total / participantesFiltrados.length;

    setPromedio(montoPromedio);

    const pagos = participantesFiltrados.map(participante => ({
      nombre: participante.nombre,
      debe: parseFloat(participante.monto || 0) - montoPromedio
    }));

    const deudores = pagos.filter(amigo => amigo.debe <= 0);
    const recibenDinero = pagos.filter(amigo => amigo.debe > 0);

    console.log("Deudores:", deudores);
    console.log("Reciben dinero:", recibenDinero);

    // Ordenar deudores de menor a mayor debe
    deudores.sort((a, b) => a.debe - b.debe);
    // Ordenar recibenDinero de mayor a menor monto
    recibenDinero.sort((a, b) => b.debe - a.debe);

    console.log("Deudores:", deudores);
    console.log("Reciben dinero:", recibenDinero);

    const transacciones = [];

    deudores.forEach(deudor => {
      recibenDinero.forEach(acreedor => {
        const montoTransferir = Math.min(Math.abs(deudor.debe), acreedor.debe);
        console.log("Monto a transferir:", montoTransferir);
        if (montoTransferir > 0) {
          transacciones.push({ deudor: deudor.nombre, acreedor: acreedor.nombre, cantidad: montoTransferir });
          deudor.debe += montoTransferir;
          acreedor.debe -= montoTransferir;
        }
      });
    });

    console.log("Transacciones:", transacciones);
    setResultado(transacciones);
  };

  const handleLimpiar = () => {
    setParticipantes([{ nombre: '', monto: '' }]);
    setPromedio(0);
    setTotalMonto(0);
    setResultado([]);
  };

  return (
    <div className="container-fluid px-0">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Modal show={showAlert} onHide={() => setShowAlert(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Por favor, ingrese un nombre para todos los participantes.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAlert(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          {participantes.map((participante, index) => (
            <div key={index} className="text-center">
              <div className="form-group">
                <label>
                  👤
                  <input type="text" className="form-control mx-2" placeholder="Nombre" value={participante.nombre} onChange={(e) => handleCambiarNombre(index, e.target.value)} />
                </label>
                <label>
                  💲
                  <input type="number" className="form-control mx-2" placeholder="Cuanto gastó?" value={participante.monto} onChange={(e) => handleCambiarMonto(index, e.target.value)} />
                </label>
                <button className="btn btn-danger mx-2 btn-sm" onClick={() => handleEliminarParticipante(index)}> ❌ </button>
              </div>
              <br />
            </div>
          ))}

          
          <div className="d-flex justify-content-center mb-3" style={{}}>
            <button className="btn btn-primary mx-2" onClick={handleAddParticipante}>Agregar</button>
            <button className="btn btn-primary mx-2" onClick={handleLimpiar}>Limpiar</button>
          </div>

          <div className="text-center">
            <button className="btn btn-success" onClick={handleCalculate}>Calcular</button>
          </div>

          <p className="text-center my-4">
            Gasto total: ${totalMonto.toFixed(2)}
            <br />
            Cada uno: ${promedio.toFixed(2)}
          </p>


          {resultado.length > 0 && (
            <div className='d-flex  flex-column align-items-center'>
              <p style={{ fontSize: '20px' , fontWeight: 'bold'}}>DETALLES DE PAGO</p>
              <ul style={{paddingLeft: '15px'}}>
                {resultado.map((transaccion, index) => (
                  <li key={index}>
                    {transaccion.deudor.charAt(0).toUpperCase() + transaccion.deudor.slice(1).toLowerCase()} {transaccion.cantidad > 0 ? "debe pagar" : "recibe"} ${Math.abs(transaccion.cantidad).toFixed(2)} a {transaccion.acreedor.charAt(0).toUpperCase() + transaccion.acreedor.slice(1).toLowerCase()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



export default CalculadorGastos;
