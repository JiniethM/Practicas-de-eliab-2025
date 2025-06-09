import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      menu: {
        inicio: "Inicio",
        categorias: "Categorías",
        productos: "Productos",
        catalogo: "Catálogo",
        libros: "Libros",
        clima: "Clima",
        estadisticas: "Estadísticas",
        empleados: "Empleados",
        instalar: "Instalar App",
        cerrarSesion: "Cerrar Sesión",
        iniciarSesion: "Iniciar Sesión",
        menu: "Menú"
      },
      productos: {
        precio: "Precio",
        categoria: "Categoría",
        editar: "Editar"
      },
      categorias: {
        modal: {
          titulo: "Agregar Categoría",
          nombreLabel: "Nombre",
          nombrePlaceholder: "Ingresa el nombre",
          descripcionLabel: "Descripción",
          descripcionPlaceholder: "Ingresa la descripción",
          cancelar: "Cancelar",
          guardar: "Guardar"
        }
      },
      clima: {
        titulo: "Seleccionar Ubicación",
        automatica: "Ubicación Automática",
        manual: "Ubicación Manual",
        latitud: "Latitud",
        longitud: "Longitud",
        placeholderLatitud: "Ej. 12.10629",
        placeholderLongitud: "Ej. -85.36452",
        botonCargar: "Cargar",
        tabla: {
          hora: "Hora",
          temperatura: "Temperatura (°C)"
        }
      },
      libros: {
        modal: {
          titulo: "Agregar Libro",
          nombre: "Nombre",
          autor: "Autor",
          genero: "Género",
          placeholderGenero: "Ej: Ficción, No Ficción, Fantasía",
          pdf: "Documento PDF",
          cancelar: "Cancelar",
          guardar: "Guardar"
        }
      }
    }
  },
  en: {
    translation: {
      menu: {
        inicio: "Home",
        categorias: "Categories",
        productos: "Products",
        catalogo: "Catalog",
        libros: "Books",
        clima: "Weather",
        estadisticas: "Statistics",
        empleados: "Employees",
        instalar: "Install App",
        cerrarSesion: "Log Out",
        iniciarSesion: "Log In",
        menu: "Menu"
      },
      productos: {
        precio: "Price",
        categoria: "Category",
        editar: "Edit"
      },
      categorias: {
        modal: {
          titulo: "Add Category",
          nombreLabel: "Name",
          nombrePlaceholder: "Enter the name",
          descripcionLabel: "Description",
          descripcionPlaceholder: "Enter the description",
          cancelar: "Cancel",
          guardar: "Save"
        }
      },
      clima: {
        titulo: "Select Location",
        automatica: "Automatic Location",
        manual: "Manual Location",
        latitud: "Latitude",
        longitud: "Longitude",
        placeholderLatitud: "e.g. 12.10629",
        placeholderLongitud: "e.g. -85.36452",
        botonCargar: "Load",
        tabla: {
          hora: "Hour",
          temperatura: "Temperature (°C)"
        }
      },
      libros: {
        modal: {
          titulo: "Add Book",
          nombre: "Name",
          autor: "Author",
          genero: "Genre",
          placeholderGenero: "e.g. Fiction, Non-fiction, Fantasy",
          pdf: "PDF Document",
          cancelar: "Cancel",
          guardar: "Save"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
