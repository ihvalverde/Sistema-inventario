# Sistema Ventas – README

## 📦 Prerrequisitos
- **Java 17** (o superior) instalado y configurado en la variable `JAVA_HOME`.
- **Maven** (se incluye el wrapper `mvnw` en el proyecto, así que no es obligatorio instalar Maven globalmente).
- **MySQL** corriendo en `localhost:3306` con la base de datos `sistema_ventas`.
- Usuario MySQL: `root` / Contraseña: `h100704sc` (puedes modificar `src/main/resources/application.properties` si usas otro usuario/clave).
- **Node**/NPM no son necesarios porque el frontend es solo HTML estático.

## 🛠️ Estructura del proyecto
```
Sistema-ventas/
├─ backend/          # API Spring Boot
│   └─ sistema-ventas/ (código Java)
├─ frontend/         # HTML estático que consume la API
│   └─ index.html    # página principal
└─ README.md         # <-- este archivo
```

## ▶️ Ejecutar el backend (API)
1. Abre una terminal y navega al directorio del backend:
   ```powershell
   cd C:\Users\unjfs\Documents\Proyectos\Sistema-ventas\backend\sistema-ventas
   ```
2. (Opcional) permite la ejecución del wrapper en PowerShell:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
   ```
3. Inicia la aplicación con Maven:
   ```powershell
   .\mvnw.cmd spring-boot:run
   ```
   - La consola mostrará algo similar a:
     ```
     Tomcat started on port 8080 (http)
     Started SistemaVentasApplication in X.xxx seconds
     ```
   - Si el puerto 8080 está ocupado, cambia el puerto editando `src/main/resources/application.properties` y agrega:
     ```properties
     server.port=8081   # o cualquier puerto libre
     ```

## 🌐 Abrir la interfaz de usuario (frontend)
El frontend es un archivo HTML estático que llama a la API en `http://localhost:8080/api/productos` (o al puerto que hayas configurado).
1. Abre el navegador.
2. Navega a la ruta del archivo `index.html`:
   ```
   file:///C:/Users/unjfs/Documents/Proyectos/Sistema-ventas/frontend/index.html
   ```
   - También puedes servir la carpeta `frontend` con cualquier servidor estático (por ejemplo `npx serve`), aunque no es necesario.
3. Verás la tabla de **Productos**. El JavaScript (`frontend/js/script.js`) hace peticiones `GET`, `POST` y `DELETE` a la API para listar, crear y eliminar productos.

## 🧪 Probar la API manualmente (opcional)
Con `curl` o Postman puedes interactuar directamente:
```bash
# Listar todos los productos
curl http://localhost:8080/api/productos

# Crear un nuevo producto
curl -X POST http://localhost:8080/api/productos \
     -H "Content-Type: application/json" \
     -d '{"nombre":"Caramelo","categoria":"Dulce","precio":0.99,"stock":200}'

# Eliminar un producto (ejemplo id=1)
curl -X DELETE http://localhost:8080/api/productos/1
```

## ✅ Verificación rápida
- **Backend**: la consola muestra `Started SistemaVentasApplication` sin errores.
- **Frontend**: al abrir `index.html` la tabla debería cargar los productos que tienes en la base de datos.
- **Base de datos**: verifica con TablePlus o MySQL Workbench que la tabla `productos` contiene los registros.

---
**¡Listo!** Con estos pasos tu proyecto `Sistema‑ventas` debería estar corriendo y accesible tanto vía API como vía la interfaz web.
