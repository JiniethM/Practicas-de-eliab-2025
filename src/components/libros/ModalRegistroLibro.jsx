import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ModalRegistroLibro = ({
  showModal,
  setShowModal,
  nuevoLibro,
  handleInputChange,
  handlePdfChange,
  handleAddLibro,
}) => {
  const { t } = useTranslation();

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{t("libros.modal.titulo")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{t("libros.modal.nombre")}</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nuevoLibro.nombre}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t("libros.modal.autor")}</Form.Label>
            <Form.Control
              type="text"
              name="autor"
              value={nuevoLibro.autor}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t("libros.modal.genero")}</Form.Label>
            <Form.Control
              type="text"
              name="genero"
              value={nuevoLibro.genero}
              onChange={handleInputChange}
              placeholder={t("libros.modal.placeholderGenero")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t("libros.modal.pdf")}</Form.Label>
            <Form.Control type="file" accept="application/pdf" onChange={handlePdfChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          {t("libros.modal.cancelar")}
        </Button>
        <Button variant="primary" onClick={handleAddLibro}>
          {t("libros.modal.guardar")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroLibro;
