# 🏪 Sistema de Gestión de Inventario y Ventas

<p align="center">
  <img src="https://img.shields.io/badge/Backend-Java%2017%20%7C%20Spring%20Boot-orange?style=for-the-badge&logo=spring" alt="Backend">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=for-the-badge&logo=javascript" alt="Frontend">
  <img src="https://img.shields.io/badge/Base%20de%20Datos-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="Database">
</p>

---

## 📝 Descripción del Proyecto

Este es un **Sistema Full Stack** integral diseñado para la administración de inventario y control comercial. Cuenta con una arquitectura desacoplada compuesta por un backend robusto en **Java con Spring Boot** que expone una API RESTful, y una interfaz de usuario dinámica construida con **tecnologías web nativas (HTML5, CSS3, JavaScript)** que interactúa en tiempo real con los servicios del servidor.

---

## 📦 Prerrequisitos

Antes de iniciar la aplicación, asegúrate de contar con la siguiente configuración local:

*   **Java 17** (o superior) instalado con la variable de entorno `JAVA_HOME` configurada correctamente.
*   **MySQL Server** ejecutándose en el puerto estándar `3306`.
*   **Base de datos configurada:** Debe existir un esquema llamado `sistema_ventas`.
    *   *Nota: Edita los parámetros en `src/main/resources/application.properties`.*
*   💡 **No se requiere Node.js / npm:** Toda la UI está desarrollada sobre HTML estático de alto rendimiento.

---

## 🛠️ Estructura del Proyecto

La raíz del espacio de trabajo está organizada de forma modular para separar los entornos de servidor y cliente:

```text
Sistema-ventas/
├─ backend/                  # API Rest construida con Spring Boot (Código Java)
│   └─ sistema-ventas/       # Proyecto base y dependencias Maven
├─ frontend/                 # Interfaz gráfica estática que consume la API
│   └─ index.html            # Página web principal de control
└─ README.md                 # Documentación del sistema
```
---

## ▶️ Guía de Ejecución Local
Sigue estos pasos ordenados en tu terminal para inicializar todo el ecosistema de la aplicación:

1️⃣ Inicializar el Backend (API REST)
Abre una consola de PowerShell y muévete al directorio raíz del código fuente en Java:

PowerShell
cd C:\Users\unjfs\Documents\Proyectos\Sistema-ventas\backend\sistema-ventas
(Opcional) Si tu terminal restringe la ejecución de scripts externos, habilita temporalmente el wrapper de Maven con la siguiente directiva:

PowerShell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
Arranca el servidor Spring Boot mediante el comando Maven integrado:

PowerShell
mvn spring-boot:run
Una vez completado el despliegue de las dependencias y la compilación, la consola mostrará las siguientes trazas de confirmación:

Plaintext
Tomcat started on port 8080 (http)
Started SistemaVentasApplication in X.xxx seconds
⚠️ Resolución de conflictos de puertos: Si el puerto 8080 ya se encuentra ocupado por otro servicio de tu máquina, puedes remapear la salida agregando la siguiente propiedad dentro de src/main/resources/application.properties:

Properties
server.port=8081  # O cualquier puerto libre de tu preferencia
2️⃣ Inicializar la Interfaz de Usuario (Frontend)
El cliente web consume los endpoints expuestos por el backend en la ruta base http://localhost:8080/api/productos.

Para interactuar con el módulo visual:

Abre tu navegador web preferido (Chrome, Edge, Firefox, etc.).

Accede directamente cargando la ruta física del archivo principal:

Fragmento de código
file:///C:/Users/unjfs/Documents/Proyectos/Sistema-ventas/frontend/index.html
(Alternativamente, si deseas servirlo de forma web, puedes usar npx serve dentro del directorio frontend, aunque la carga directa es completamente funcional).

Al ingresar, se cargará una cuadrícula dinámica interactiva controlada por frontend/js/script.js, permitiéndote realizar operaciones síncronas GET, POST y DELETE para listar, registrar y dar de baja productos en tiempo real.

🧪 Pruebas Manuales de la API (Endpoints)
Si deseas realizar peticiones directas de depuración a los endpoints sin utilizar la interfaz visual, puedes interactuar mediante herramientas como Postman o directamente desde tu consola usando comandos curl:

Bash
# 🔍 Listar todos los productos del inventario
curl http://localhost:8080/api/productos

# ➕ Registrar un nuevo artículo en stock
curl -X POST http://localhost:8080/api/productos \
     -H "Content-Type: application/json" \
     -d '{"nombre":"Caramelo","categoria":"Dulce","precio":0.99,"stock":200}'

# ❌ Eliminar un producto específico por su ID (ejemplo: ID 1)
curl -X DELETE http://localhost:8080/api/productos/1
Desarrollado con dedicación y enfoque en código limpio por Iara Hatsumy.
