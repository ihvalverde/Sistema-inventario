<div align="center">

# 🏪 Dulces Sueños — Sistema de Inventario y Ventas

**Tu baby boutique, siempre bajo control.**

[![Backend](https://img.shields.io/badge/Java%2017%20%7C%20Spring%20Boot-E76F00?style=for-the-badge&logo=openjdk&logoColor=white)](https://spring.io/)
[![Frontend](https://img.shields.io/badge/HTML5%20%7C%20CSS3%20%7C%20JS-333?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/)
[![Database](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

</div>

---

## 🍼 ¿Qué es Dulces Sueños?

Un **sistema full stack** para administrar el inventario de tu baby boutique de forma moderna y visual. Registra productos, controla el stock, visualiza métricas en un dashboard y exporta reportes a Excel — todo desde tu navegador.

> *Gestión inteligente para tu negocio de bebés.*

---

## 🎀 Categorías

| Categoría | Descripción |
|-----------|------------|
| **Ropa** | Vestidos, body sets, conjuntos |
| **Accesorios** | Gorros, calcetines, diademas |
| **Pañaleras** | Organizadores y neceser |

---

## 🛠️ Stack Tecnológico

```
┌─────────────────────────────────────────────────┐
│                    FRONTEND                      │
├─────────────────────────────────────────────────┤
│  HTML5 + CSS3    │  JavaScript vanilla          │
│  SweetAlert2     │  SheetJS (Export Excel)       │
│  Google Fonts    │  Quicksand                   │
└─────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│                    BACKEND                       │
├─────────────────────────────────────────────────┤
│  Java 17         │  Spring Boot 3.5             │
│  Spring Data JPA │  Lombok                      │
│  REST API        │  Maven                       │
└─────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────┐
│                  BASE DE DATOS                   │
├─────────────────────────────────────────────────┤
│  MySQL  │  Puerto 3306  │  Esquema: sistema_ventas │
└─────────────────────────────────────────────────┘
```

---

## ✨ Funcionalidades

### Panel de Control
- 📊 **Dashboard** — Total de productos, valor del inventario, alertas de stock bajo
- 🔍 **Filtros** — Filtrar productos por categoría en tiempo real
- 📋 **Datalist** — Sugerencias automáticas al escribir categorías

### CRUD de Productos
- ➕ **Crear** — Formulario con nombre, categoría, precio y stock
- ✏️ **Editar** — Carga los datos en el formulario con un clic
- 🗑️ **Eliminar** — Confirmación visual con SweetAlert2
- 📦 **Listar** — Tabla dinámica con todas las categorías

### Reportes
- 📊 **Exportar a Excel** — Descarga un reporte completo con un clic
- 💰 **Valor total** — Cálculo automático del valor del inventario
- ⚠️ **Alertas** — Productos con stock menor a 5 unidades

---

## 🚀 Guía de Ejecución

### Requisitos
- Java 17+ (con `JAVA_HOME` configurado)
- MySQL Server en puerto 3306
- Base de datos `sistema_ventas` (se crea automáticamente)

### 1. Backend (API REST)

```bash
cd backend/sistema-ventas

# Si tu terminal bloquea scripts:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

# Ejecutar
mvn spring-boot:run
```

El servidor arranca en `http://localhost:8080`

### 2. Frontend

```bash
cd frontend
# Opción 1: Abrir directamente
start index.html

# Opción 2: Con servidor local
npx serve .
```

---

## 🧪 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/productos` | Listar todos los productos |
| `POST` | `/api/productos` | Registrar un nuevo producto |
| `DELETE` | `/api/productos/{id}` | Eliminar un producto por ID |

### Ejemplos con curl

```bash
# Listar productos
curl http://localhost:8080/api/productos

# Crear producto
curl -X POST http://localhost:8080/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Body Estampado","categoria":"Ropa","precio":29.90,"stock":15}'

# Eliminar producto (ID 1)
curl -X DELETE http://localhost:8080/api/productos/1
```

---

## 📁 Estructura del Proyecto

```
Sistema-ventas/
├── 📄 database_dulces_sueños.sql   # Script de base de datos
├── 📄 script.sql                    # Script adicional
├── 📁 backend/
│   └── 📁 sistema-ventas/
│       ├── pom.xml                  # Dependencias Maven
│       └── 📁 src/main/
│           ├── java/com/hatsumy/sistemaventas/
│           │   ├── SistemaVentasApplication.java
│           │   ├── controllers/
│           │   │   └── ProductoController.java
│           │   ├── entities/
│           │   │   └── Producto.java
│           │   └── repositories/
│           │       └── ProductoRepository.java
│           └── resources/
│               └── application.properties
├── 📁 frontend/
│   ├── index.html                   # Interfaz principal
│   ├── 📁 css/
│   │   └── styles.css               # Estilos
│   └── 📁 js/
│       └── script.js                # Lógica CRUD + Dashboard
└── README.md
```

---

## 🗃️ Schema de la Base de Datos

```sql
CREATE TABLE productos (
  id        BIGINT AUTO_INCREMENT PRIMARY KEY,
  nombre    VARCHAR(255) NOT NULL,
  categoria VARCHAR(100),
  precio    DOUBLE NOT NULL,
  stock     INT NOT NULL
);
```

---

## 🎨 Paleta de Colores

| Color | HEX | Uso |
|-------|-----|-----|
| Fucsia | `#D90166` | Botones principales, acentos |
| Vibrante | `#E76F00` | Estado de edición |
| Alerta | `#FF6B6B` | Stock bajo |
| Texto | `#333333` | Texto principal |
| Fondo | `#FAF5FF` | Background suave |

---

## 📝 Notas

- Las credenciales de MySQL por defecto están en `application.properties`
- El frontend se conecta al backend en `http://localhost:8080/api/productos`
- La exportación a Excel usa SheetJS (carga vía CDN)
- SweetAlert2 maneja las alertas de confirmación

---

<div align="center">

**¿Necesitas ayuda?** Escríbeme por [GitHub](https://github.com/ihvalverde)

*Hecho con dedicación por Hatsumy* 🎀

</div>
