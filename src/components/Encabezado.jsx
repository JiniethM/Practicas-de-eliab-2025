import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "/logojinieth1.png";
import { useAuth } from "../database/authcontext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

const Encabezado = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const [solicitudInstalacion, setSolicitudInstalacion] = useState(null);
  const [mostrarBotonInstalacion, setMostrarBotonInstalacion] = useState(false);
  const [esDispositivoIOS, setEsDispositivoIOS] = useState(false);

  useEffect(() => {
    const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setEsDispositivoIOS(esIOS);
  }, []);

  useEffect(() => {
    const manejarSolicitudInstalacion = (evento) => {
      evento.preventDefault();
      setSolicitudInstalacion(evento);
      setMostrarBotonInstalacion(true);
    };

    window.addEventListener("beforeinstallprompt", manejarSolicitudInstalacion);

    return () => {
      window.removeEventListener("beforeinstallprompt", manejarSolicitudInstalacion);
    };
  }, []);

  const handleLogout = async () => {
    try {
      setIsCollapsed(false);
      localStorage.removeItem("adminEmail");
      localStorage.removeItem("adminPassword");
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  const handleNavigate = (path) => {
    navigate(path);
    setIsCollapsed(false);
  };

  const instalacion = async () => {
    if (!solicitudInstalacion) return;
    try {
      await solicitudInstalacion.prompt();
      const { outcome } = await solicitudInstalacion.userChoice;
      console.log(outcome === "accepted" ? "Instalación aceptada" : "Instalación rechazada");
    } catch (error) {
      console.error("Error al intentar instalar la PWA:", error);
    } finally {
      setSolicitudInstalacion(null);
      setMostrarBotonInstalacion(false);
    }
  };

  return (
    <Navbar expand="sm" fixed="top" className="color-navbar shadow-navbar">
      <Container fluid>
        <Navbar.Brand
          onClick={() => handleNavigate("/inicio")}
          className="text-white logo-titulo d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img alt="" src={logo} width="30" height="30" className="me-2" />
          <strong className="brand-text d-none d-sm-inline">Suplidora de Belleza Jinieth</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleToggle} />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
          show={isCollapsed}
          onHide={() => setIsCollapsed(false)}
          className="bg-light"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column flex-sm-row justify-content-end w-100">
              <Nav.Link onClick={() => handleNavigate("/inicio")} className="nav-link-style">
                Inicio
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/categorias")} className="nav-link-style">
                Categorías
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/productos")} className="nav-link-style">
                Productos
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/catalogo")} className="nav-link-style">
                Catálogo
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/libros")} className="nav-link-style">
                Libros
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/clima")} className="nav-link-style">
                Clima
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/estadisticas")} className="nav-link-style">
                Estadísticas
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigate("/empleados")} className="nav-link-style">
                Empleados
              </Nav.Link>
              {!esDispositivoIOS && mostrarBotonInstalacion && (
                <Nav.Link onClick={instalacion} className="nav-link-style">
                  Instalar App <i className="bi bi-download"></i>
                </Nav.Link>
              )}
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout} className="nav-link-style">
                  Cerrar Sesión
                </Nav.Link>
              ) : (
                <Nav.Link onClick={() => handleNavigate("/")} className="nav-link-style">
                  Iniciar Sesión
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Encabezado;
