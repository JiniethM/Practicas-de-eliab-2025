import { Zoom } from "react-awesome-reveal";
import { Card, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TarjetaProducto = ({ producto, onEdit }) => {
  const { t } = useTranslation();

  return (
    <Col lg={3} md={4} sm={12} className="mb-4">
      <Zoom triggerOnce>
        <Card>
          {producto.imagen && (
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
          )}
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {t("productos.precio")}: C${producto.precio} <br />
              {t("productos.categoria")}: {producto.categoria}
            </Card.Text>

            <Button variant="warning" onClick={() => onEdit(producto)}>
              {t("productos.editar")}
            </Button>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default TarjetaProducto;
