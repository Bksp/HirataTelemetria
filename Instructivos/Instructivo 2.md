Instructivo 2: Códigos Mermaid para Diagramas UML
A continuación, se presentan los códigos Mermaid que el agente utilizará para renderizar los diagramas conceptuales exigidos.

1. Diagrama de Clases UML (Integra RF-10, RF-11, RF-12, RF-13)

Fragmento de código
classDiagram
    class Camion {
        +String patente
        +String modelo
        +int kilometraje
        +asignarRuta()
        +registrarMantenimiento()
    }
    class Sensor {
        <<Abstract>>
        +String idSensor
        +String estado
        +capturarDato()
    }
    class SensorGPS {
        +float latitud
        +float longitud
        +obtenerUbicacion()
    }
    class SensorTemperatura {
        +float temperaturaActual
        +float limiteCritico
        +verificarAlerta()
    }
    class Ruta {
        +String origen
        +String destino
        +float tiempoEstimado
    }
    class BaseDeDatosMySQL {
        +guardarDatoSensor()
        +consultarHistorial()
    }
    class Reporte {
        +Date fechaEmision
        +generarInformeRutas()
        +generarInformeRendimiento()
    }
    class Usuario {
        +String rol
        +visualizarDashboard()
    }

    Camion "1" -- "1..*" Sensor : posee
    Sensor <|-- SensorGPS
    Sensor <|-- SensorTemperatura
    Camion "1" -- "1" Ruta : realiza
    Sensor "1..*" -- "1" BaseDeDatosMySQL : envía datos a
    BaseDeDatosMySQL "1" -- "1..*" Reporte : provee datos para
    Usuario "1" -- "1..*" Reporte : solicita
2. Diagrama de Arquitectura de Alto Nivel (IoT)

Fragmento de código
flowchart TD
    subgraph Capa de Dispositivos (Camiones Hirata)
        GPS[Sensor GPS RF-10]
        Temp[Sensor Temperatura RF-13]
    end

    subgraph Capa de Conectividad
        Red[Red Móvil / Internet]
    end

    subgraph Capa de Procesamiento y Persistencia (RF-11)
        API[API de Recepción de Datos]
        DB[(Base de Datos MySQL)]
    end

    subgraph Capa de Aplicación y Presentación (GlassKit)
        Dash[Dashboard Personal Logística]
        Rep[Módulo de Reportes RF-12]
        Alertas[Sistema de Alertas]
    end

    GPS -->|Datos de Ubicación| Red
    Temp -->|Datos de Temperatura| Red
    Red --> API
    API --> DB
    DB --> Dash
    DB --> Rep
    DB --> Alertas