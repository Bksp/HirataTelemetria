# Hirata Logística - Portal IoT y Arquitectura UML

Este proyecto es un prototipo interactivo (Demo) desarrollado para visualizar y documentar la solución tecnológica IoT diseñada para la cadena de distribución Hirata. El sistema simula en tiempo real la ingesta de telemetría de la flota y presenta la documentación técnica de la arquitectura de software subyacente.

## 🚀 Funcionalidades Principales de la Demo

La demostración se divide en dos grandes módulos, accesibles desde el menú lateral (Navbar):

### 1. Panel de Control IoT (Dashboard)
Simula en tiempo real el comportamiento de tres camiones frigoríficos (H-101, H-102, H-103) cumpliendo con los requerimientos de negocio:
- **RF-10 (Monitoreo GPS):** Visualización de coordenadas en vivo, velocidad y ubicación satelital.
- **RF-13 (Control de Temperatura):** Gráfico interactivo de termómetros con límites críticos dinámicos. Permite ajustar el umbral térmico de forma independiente por camión para disparar alertas visuales al romper la cadena de frío.
- **RF-11 (Persistencia de Datos):** Consola simuladora de Base de Datos MySQL que muestra en tiempo real las inserciones de logs telemétricos (temperatura y ubicación) enviados desde el *Edge Gateway* del camión.
- **RF-12 (Emisión de Reportes):** Módulo de extracción de analíticas de rendimiento por unidad, con simulaciones de descarga en formato PDF y Excel.

### 2. Documentación Técnica UML
Módulo documental interactivo impulsado por Mermaid.js que ilustra el diseño del sistema mediante 5 diagramas fundamentales:
1. **Diagrama de Clases:** Estructura orientada a objetos (Camión, Sensor, Alerta, Base de Datos, Reporte).
2. **Diagrama de Arquitectura de Alto Nivel:** Flujo IoT detallado, desde la captura de hardware (GPS/Dallas DS18B20) hacia la CPU Edge en cabina, el transporte MQTT (4G LTE) y la nube.
3. **Diagrama de Actividades:** Lógica secuencial del flujo de monitoreo continuo.
4. **Diagrama de Secuencia:** Interacción sincrónica y asincrónica de la infraestructura técnica al consultar un reporte.
5. **Diagrama de Casos de Uso:** Interacción entre los usuarios (Administrador/Operador) y las funcionalidades del sistema.

---

## 🛠️ Tecnologías y Arquitectura UI

Este prototipo fue construido sobre **GlassKit UI**, una estructura diseñada con un enfoque estético *Glassmorphism* moderno y responsivo.
- **Core Front-end:** Vanilla JavaScript (ES6+), HTML5 Semántico y Web Components.
- **Estilos:** Bootstrap 5 (utilidades) y Custom CSS (variables nativas, flexbox, opacidades y blur).
- **Diagramas de Software:** [Mermaid.js](https://mermaid.js.org/) para renderizado y zoom en el navegador web.
- **Iconografía:** Bootstrap Icons (formato SVG).
- **Herramienta de Construcción:** Vite.

## ⚙️ Instalación y Uso Local

Para correr el proyecto localmente y modificar la demostración:

1. Instala las dependencias de desarrollo de Vite:
```bash
npm install
```

2. Levanta el servidor de desarrollo:
```bash
npm run dev
```

3. (Opcional) Compilar para producción (Minificado):
```bash
npm run build
```

## 🌐 Despliegue (Deploy)

El proyecto cuenta con un script preparado para compilar una versión *demo* y publicarla directamente en la rama `gh-pages`:
```bash
npm run deploy
```

---
*Prototipo funcional modelado para el proyecto de Integración de Sistemas - Caso de Estudio Hirata.*
