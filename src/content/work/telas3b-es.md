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
---

## Descripción del Proyecto

Telas 3B es una aplicación web empresarial desarrollada para optimizar y digitalizar el proceso de producción de una manufactura textil. Este proyecto fue realizado como parte de mi Tecnología en Análisis y Desarrollo de Software en el SENA. Antes de este sistema, el seguimiento de órdenes se hacía manualmente; hoy todo el flujo —desde que un cliente hace un pedido hasta que sale despachado— queda registrado y visible en tiempo real.

## ¿Qué hace el sistema?

### Para Administradores
- Crean órdenes de producción y las asignan por etapas: **Corte → Confección → Estampado → Despacho**
- Gestionan la base de datos de clientes con historial completo de pedidos
- Controlan el inventario de telas e insumos con alertas de stock mínimo
- Monitorean métricas del negocio desde un dashboard centralizado
- Generan reportes de producción con tiempos estimados vs. reales

### Para Operarios
- Visualizan sus tareas asignadas por etapa de producción
- Registran el inicio y fin de cada trabajo
- Actualizan el progreso en tiempo real
- Ven el estado actual de las órdenes en las que trabajan

## Stack Tecnológico

### Frontend
- **React 18** · **TypeScript** · **Vite** · **Zustand** · **React Router DOM**
- **CSS Modules** con variables CSS personalizadas

### Backend
- **Java 17** · **Spring Boot 3** · **JPA/Hibernate** · **Maven**
- Arquitectura REST API stateless

### Base de Datos
- **MySQL 8** alojada en AWS RDS
- Modelado relacional con 6 tablas principales

### Autenticación
- **Firebase Authentication** (OAuth2 / JWT)
- Validación de tokens en backend
- Control de acceso basado en roles

### Infraestructura
- **AWS EC2** para el backend
- **AWS RDS** para la base de datos
- **pnpm** · **ESLint** · **Prettier** · **Husky** · **GitHub**

## Arquitectura

Arquitectura en capas con patrón MVC y comunicación desacoplada vía REST API:

```
React SPA (Vite)  ──→  Spring Boot REST API  ──→  MySQL (RDS)
   Firebase Auth  ──→  Token JWT validation
```

**Características arquitectónicas:**

- Separación clara entre frontend SPA y backend API stateless
- Control de acceso basado en roles (admin / operator) protegiendo rutas tanto en frontend como en backend
- ORM con Hibernate/JPA para mapeo objeto-relacional sin SQL manual
- Estado global reactivo con Zustand para sincronizar datos entre vistas sin prop-drilling
- Patrón Repository en el backend para desacoplar la lógica de negocio del acceso a datos

## Lo que construí

- **Diseño de base de datos**: Modelado completo de la base de datos relacional con 6 tablas (usuarios, clientes, órdenes, etapas de producción, tareas, inventario)
- **API REST completa**: Endpoints para CRUD de órdenes, tareas, clientes e inventario con Spring Boot
- **Frontend full-featured**: Dashboard dual (admin/operario), formularios con validación, tablas paginadas y filtros avanzados
- **Sistema de autenticación**: Integración Firebase con backend mediante interceptores Axios
- **Flujo de producción automatizado**: Las órdenes avanzan automáticamente de `pending` → `in-progress` → `completed` según el operario completa sus etapas
- **Despliegue en AWS**: Backend en EC2, base de datos en RDS, frontend optimizado con Vite

## Flujo de Trabajo

1. El administrador crea una orden y asigna cantidad, tipo de tela y fechas
2. El sistema genera automáticamente las tareas por etapa (Corte, Confección, Estampado, Despacho)
3. Los operarios ven sus tareas pendientes y registran inicio/fin
4. El sistema actualiza el estado de la orden en tiempo real
5. Cuando todas las etapas se completan, la orden se marca como finalizada
6. Se generan reportes de productividad y se controla el inventario utilizado
