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
