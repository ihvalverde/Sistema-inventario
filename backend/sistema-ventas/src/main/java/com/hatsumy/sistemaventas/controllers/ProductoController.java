package com.hatsumy.sistemaventas.controllers;

import com.hatsumy.sistemaventas.entities.Producto;
import com.hatsumy.sistemaventas.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "*") // ¡Vital para que tu Frontend pueda conectarse!
public class ProductoController {

    @Autowired
    private ProductoRepository productoRepository;

    // Obtener todos los productos (GET)
    @GetMapping
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    // Guardar un producto nuevo (POST)
    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productoRepository.save(producto);
    }

    // Eliminar un producto (DELETE)
    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productoRepository.deleteById(id);
    }
}
