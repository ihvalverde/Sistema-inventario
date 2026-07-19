package com.hatsumy.sistemaventas.repositories;

import com.hatsumy.sistemaventas.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // No necesitas escribir código aquí, JpaRepository ya trae 
    // save(), findAll(), deleteById(), etc.
}