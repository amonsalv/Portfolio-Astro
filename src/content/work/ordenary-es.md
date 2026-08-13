---
title: Ordenary
publishDate: 2026-07-15
img: /assets/ordenary.png
img_alt: Landing page de Ordenary mostrando el hero "Run your operation. Any industry. One tool." con una vista previa del dashboard de órdenes, ingresos y tareas pendientes.
description: |
  Una SaaS de gestión de operaciones multi-tenant que nació del sistema de Telas 3B — un modelo universal de Órdenes/Tareas/Items/Clientes que se adapta a cualquier industria. Actualmente en desarrollo activo, todavía no está en vivo.
tags:
  - Full Stack
  - React
  - TypeScript
  - Spring Boot
  - Firebase
  - PostgreSQL
---

## Cómo empezó

Telas 3B se construyó para una sola empresa textil. Mientras lo mantenía, la misma forma seguía apareciendo: las órdenes avanzan por etapas, los operarios toman tareas, el inventario se controla, sin importar realmente qué fabricara o vendiera el negocio. Ordenary es lo que pasa cuando esa observación se convierte en producto: en lugar de un sistema para un solo cliente, un core universal de Orden/Tarea/Item/Operario/Cliente que cada workspace re-etiqueta a su propia industria mediante un `IndustryProfile` — textil, taller, restaurante, construcción y más.

## Qué hace

- Workspaces multi-tenant, cada uno hablando el idioma de su industria sobre el mismo modelo subyacente
- Órdenes, tareas, inventario y clientes gestionados desde un único dashboard, con vistas diferenciadas por rol para administradores y operarios
- Reportes, notificaciones y alertas de stock bajo construidos sobre la misma data central
- Autenticación con Firebase frente a una API protegida con Spring Security

## Stack tecnológico

**Frontend:** React 18, TypeScript, Vite, Zustand, Firebase Auth, Axios, Recharts — en migración progresiva de una arquitectura de estilos BEM legacy hacia Tailwind CSS, componente por componente.

**Backend:** Java 17, Spring Boot 3, Spring Security, Spring Data JPA, PostgreSQL con migraciones Flyway, rate limiting con Bucket4j.

**Testing:** Vitest, 290 tests en 62 archivos; Storybook para la librería de componentes.

**Infraestructura:** Docker Compose para PostgreSQL + backend.

## En qué punto está

Todavía en desarrollo activo — sin desplegar en ningún lado por ahora. El frontend corre en local contra un backend dockerizado mientras resuelvo las partes que un proyecto de un solo cliente como Telas 3B nunca me obligó a resolver: multi-tenancy, un modelo de dominio agnóstico de industria, y una suite de tests que tiene que sostenerse a medida que crece la superficie del producto. El despliegue a producción es el siguiente paso.
