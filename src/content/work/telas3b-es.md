---
title: Telas 3B
publishDate: 2026-02-27
img: /assets/stock-4.jpg
img_alt: Sistema de gestión de producción textil Telas 3B
description: |
  Sistema web full-stack para la gestión integral del ciclo de producción de una empresa textil en Medellín. Digitaliza desde la creación de órdenes hasta el despacho, con seguimiento en tiempo real por etapas de producción.
tags:
  - Full Stack
  - React
  - Spring Boot
  - TypeScript
  - MySQL
  - AWS
problem: |
  Telas 3B es una aplicación web empresarial desarrollada para optimizar y digitalizar el proceso de producción de una manufactura textil — realizada como parte de mi Tecnología en Análisis y Desarrollo de Software en el SENA. Antes de este sistema, el seguimiento de órdenes se hacía manualmente; hoy todo el flujo, desde que un cliente hace un pedido hasta que sale despachado, queda registrado y visible en tiempo real.
solution:
  intro: |
    Dos dashboards, una sola fuente de verdad — el estado de la orden se actualiza en tiempo real a medida que el trabajo avanza en planta.
  columns:
    - title: Para Administradores
      items:
        - "Crean órdenes de producción y las asignan por etapas: Corte → Confección → Estampado → Despacho"
        - Gestionan la base de datos de clientes con historial completo de pedidos
        - Controlan el inventario de telas e insumos con alertas de stock mínimo
        - Monitorean métricas del negocio desde un dashboard centralizado
        - Generan reportes de producción con tiempos estimados vs. reales
    - title: Para Operarios
      items:
        - Visualizan sus tareas asignadas por etapa de producción
        - Registran el inicio y fin de cada trabajo
        - Actualizan el progreso en tiempo real
        - Ven el estado actual de las órdenes en las que trabajan
techStack:
  - category: Frontend
    items:
      - React 18
      - TypeScript
      - Vite
      - Zustand
      - React Router DOM
      - CSS Modules
  - category: Backend
    items:
      - Java 17
      - Spring Boot 3
      - JPA / Hibernate
      - Maven
  - category: Base de Datos
    items:
      - MySQL 8
      - AWS RDS
      - Modelo relacional de 6 tablas
  - category: Auth & Infra
    items:
      - Firebase Authentication
      - JWT
      - AWS EC2
      - pnpm
      - ESLint
      - Husky
architecture:
  code: |
    React SPA (Vite)  ──→  Spring Boot REST API  ──→  MySQL (RDS)
       Firebase Auth  ──→  Validación de token JWT
  description: |
    Separación clara entre el frontend SPA y un backend API stateless; control de acceso basado en roles (admin/operario) protegiendo rutas tanto en frontend como en backend; ORM con Hibernate/JPA; estado global reactivo con Zustand para sincronizar datos entre vistas sin prop-drilling; patrón Repository en el backend para desacoplar la lógica de negocio del acceso a datos.
outcome:
  highlights:
    - "Diseño de base de datos: modelado relacional completo con 6 tablas (usuarios, clientes, órdenes, etapas de producción, tareas, inventario)"
    - "API REST completa: endpoints CRUD para órdenes, tareas, clientes e inventario con Spring Boot"
    - "Frontend full-featured: dashboard dual, formularios con validación, tablas paginadas, filtros avanzados"
    - "Sistema de autenticación: integración Firebase con el backend mediante interceptores Axios"
    - "Despliegue en AWS: backend en EC2, base de datos en RDS, frontend optimizado con Vite"
  steps:
    - El administrador crea una orden y asigna cantidad, tipo de tela y fechas.
    - El sistema genera automáticamente las tareas por etapa — Corte, Confección, Estampado, Despacho.
    - Los operarios ven sus tareas pendientes y registran inicio y fin de cada trabajo.
    - "El estado de la orden se actualiza en tiempo real — pending → in-progress → completed."
    - La orden se marca como finalizada cuando todas las etapas se completan.
    - Se generan reportes de productividad y se controla el inventario utilizado automáticamente.
---
