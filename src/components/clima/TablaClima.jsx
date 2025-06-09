import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TablaClima = ({ datosPorHora }) => {
  const { t } = useTranslation();

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>{t("clima.tabla.hora")}</th>
          <th>{t("clima.tabla.temperatura")}</th>
        </tr>
      </thead>
      <tbody>
        {datosPorHora.map((dato, indice) => (
          <tr key={indice}>
            <td>{dato.hora}</td>
            <td>{dato.temperatura}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablaClima;
