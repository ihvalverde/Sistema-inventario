package com.hatsumy.sistemaventas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
// Estas líneas aseguran que Spring busque en las subcarpetas correctas
@EntityScan(basePackages = "com.hatsumy.sistemaventas.entities")
@EnableJpaRepositories(basePackages = "com.hatsumy.sistemaventas.repositories")
public class SistemaVentasApplication {

	public static void main(String[] args) {
		SpringApplication.run(SistemaVentasApplication.class, args);
	}

}