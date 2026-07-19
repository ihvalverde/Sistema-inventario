const URL_API = "http://localhost:8080/api/productos";
let productosGlobales = [];
let editandoId = null;

async function cargarProductos() {
    try {
        const res = await fetch(URL_API);
        productosGlobales = await res.json();
        actualizarFiltrosYDataList(productosGlobales);
        mostrarProductos(productosGlobales);
    } catch (e) { console.error("Error:", e); }
}

// MODIFICAR: Función mostrar para que actualice el Dashboard
function mostrarProductos(productos) {
    const tabla = document.getElementById("tabla-productos");
    tabla.innerHTML = "";

    let totalProductos = productos.length;
    let valorTotal = 0;
    let alertasStock = 0;

    productos.forEach(p => {
        const stockBajo = p.stock < 5;
        if(stockBajo) alertasStock++;
        valorTotal += (p.precio * p.stock);

        const stockClass = stockBajo ? "low-stock" : "";
        
        tabla.innerHTML += `
            <tr>
                <td><strong>${p.nombre}</strong></td>
                <td><span class="badge">${p.categoria || 'General'}</span></td>
                <td><span class="currency">S/.</span><span class="price">${p.precio.toFixed(2)}</span></td>
                <td><span class="${stockClass}">${p.stock} unidades</span></td>
                <td>
                    <button class="btn-edit" onclick='prepararEdicion(${JSON.stringify(p)})'>Editar</button>
                    <button class="btn-delete" onclick="eliminarProducto(${p.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });

    // Actualizar Dashboard
    document.getElementById("total-productos").innerText = totalProductos;
    document.getElementById("valor-inventario").innerText = `S/. ${valorTotal.toFixed(2)}`;
    document.getElementById("alertas-stock").innerText = alertasStock;
}

// NUEVA FUNCIÓN: Exportar a Excel
function exportarExcel() {
    if(productosGlobales.length === 0) return Swal.fire('Error', 'No hay datos para exportar', 'error');

    const dataParaExcel = productosGlobales.map(p => ({
        Nombre: p.nombre,
        Categoría: p.categoria,
        Precio: p.precio,
        Stock: p.stock,
        'Valor Total': (p.precio * p.stock)
    }));

    const ws = XLSX.utils.json_to_sheet(dataParaExcel);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario Dulces Sueños");
    XLSX.writeFile(wb, "Reporte_Inventario_Dulces_Sueños.xlsx");
}

// Actualiza las opciones del filtro y las sugerencias del input según lo que haya en la BD
function actualizarFiltrosYDataList(productos) {
    const categorias = [...new Set(productos.map(p => p.categoria).filter(c => c))];
    
    // Actualizar Datalist (Sugerencias al escribir)
    const dl = document.getElementById("categorias-list");
    dl.innerHTML = categorias.map(c => `<option value="${c}">`).join("");

    // Actualizar Select de Filtro
    const sel = document.getElementById("filtro-categoria");
    const valActual = sel.value;
    sel.innerHTML = '<option value="todos">Mostrar Todo</option>' + 
                    categorias.map(c => `<option value="${c}">${c}</option>`).join("");
    sel.value = valActual;
}

function filtrarProductos() {
    const cat = document.getElementById("filtro-categoria").value;
    const filtrados = (cat === "todos") ? productosGlobales : productosGlobales.filter(p => p.categoria === cat);
    mostrarProductos(filtrados);
}

document.getElementById("producto-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const p = {
        nombre: document.getElementById("nombre").value,
        categoria: document.getElementById("categoria").value,
        precio: document.getElementById("precio").value,
        stock: document.getElementById("stock").value
    };

    if (editandoId) p.id = editandoId;

    await fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p)
    });

    cancelarEdicion();
    cargarProductos();
});

// MODIFICAR: Mostrar botón cancelar al editar
function prepararEdicion(p) {
    editandoId = p.id;
    document.getElementById("nombre").value = p.nombre;
    document.getElementById("categoria").value = p.categoria;
    document.getElementById("precio").value = p.precio;
    document.getElementById("stock").value = p.stock;
    
    const btnGuardar = document.getElementById("btn-guardar");
    const btnCancelar = document.getElementById("btn-cancelar");

    btnGuardar.innerText = "Actualizar Cambios";
    btnGuardar.style.backgroundColor = "var(--accent-vibrant)";
    btnCancelar.style.display = "block"; // APARECE BOTÓN CANCELAR
}

// MODIFICAR: Ocultar botón cancelar al terminar
function cancelarEdicion() {
    editandoId = null;
    document.getElementById("producto-form").reset();
    
    const btnGuardar = document.getElementById("btn-guardar");
    const btnCancelar = document.getElementById("btn-cancelar");

    btnGuardar.innerText = "Registrar Producto";
    btnGuardar.style.backgroundColor = "var(--primary-fucsia)";
    btnCancelar.style.display = "none"; // DESAPARECE BOTÓN CANCELAR
}

// MODIFICAR: Función para eliminar con cuadro bonito
async function eliminarProducto(id) {
    Swal.fire({
        title: '¿Eliminar este artículo?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d90166',
        cancelButtonColor: '#4a5568',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, mantener'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await fetch(`${URL_API}/${id}`, { method: 'DELETE' });
            cargarProductos();
            Swal.fire('¡Eliminado!', 'El producto ha sido quitado.', 'success');
        }
    });
}

cargarProductos();