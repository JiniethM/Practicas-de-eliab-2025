import React, { useState } from "react";
import ModalRegistroEmpleado from "./ModalRegistroEmpleado";
import TablaEmpleados from "./TablaEmpleados";

// Datos iniciales del formulario
const empleadoInicial = {
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  cedula: "",
  contraseña: "",
  confirmarContraseña: "",
  fechaNacimiento: "",
  foto: null,
};

const GestionEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState(empleadoInicial);
  const [showModal, setShowModal] = useState(false);

  // Paginación básica
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Abrir modal
  const handleOpenModal = () => {
    setNuevoEmpleado(empleadoInicial);
    setShowModal(true);
  };

  // Agregar empleado
  const handleAddEmpleado = () => {
    const nuevo = {
      ...nuevoEmpleado,
      id: Date.now(), // simulamos id único
    };
    setEmpleados([...empleados, nuevo]);
    setShowModal(false);
  };

  // Datos paginados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const empleadosPaginados = empleados.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mt-4">
      <h3>Gestión de Empleados</h3>
      <button className="btn btn-primary mb-3" onClick={handleOpenModal}>
        Agregar Nuevo Empleado
      </button>

      <TablaEmpleados
        empleados={empleadosPaginados}
        totalItems={empleados.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <ModalRegistroEmpleado
        showModal={showModal}
        setShowModal={setShowModal}
        nuevoEmpleado={nuevoEmpleado}
        setNuevoEmpleado={setNuevoEmpleado}
        handleAddEmpleado={handleAddEmpleado}
      />
    </div>
  );
};

export default GestionEmpleados;
