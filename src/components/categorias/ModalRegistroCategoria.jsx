import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ModalRegistroCategoria = ({
  showModal,
  setShowModal,
  nuevaCategoria,
  handleInputChange,
  handleAddCategoria,
}) => {
  const { t } = useTranslation();

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{t("categorias.modal.titulo")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{t("categorias.modal.nombreLabel")}</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={nuevaCategoria.nombre}
              onChange={handleInputChange}
              placeholder={t("categorias.modal.nombrePlaceholder")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t("categorias.modal.descripcionLabel")}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={nuevaCategoria.descripcion}
              onChange={handleInputChange}
              placeholder={t("categorias.modal.descripcionPlaceholder")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          {t("categorias.modal.cancelar")}
        </Button>
        <Button variant="primary" onClick={handleAddCategoria}>
          {t("categorias.modal.guardar")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalRegistroCategoria;
