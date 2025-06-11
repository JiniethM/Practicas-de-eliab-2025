import React from "react";
import { Table } from "react-bootstrap";
import Paginacion from "../ordenamiento/Paginacion";

const TablaEmpleados = ({
  empleados,
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Cédula</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {empleados.length > 0 ? (
            empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.correo}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.cedula}</td>
                <td>{empleado.fechaNacimiento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No hay empleados registrados</td>
            </tr>
          )}
        </tbody>
      </Table>
      
      <Paginacion
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default TablaEmpleados;
