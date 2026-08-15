---
title: Telas 3B
publishDate: 2026-02-27
img: /assets/stock-4.jpg
img_alt: Telas 3B textile production management system
description: |
  Full-stack web system for comprehensive management of the production cycle of a textile company in Medellín. Digitizes from order creation to dispatch, with real-time tracking by production stages.
tags:
  - Full Stack
  - React
  - Spring Boot
  - TypeScript
  - MySQL
  - AWS
problem: |
  Telas 3B is an enterprise web application developed to optimize and digitalize the production process of a textile manufacturing company — completed as part of my Technology degree in Software Analysis and Development at SENA. Before this system, order tracking was done manually; today, the entire flow, from when a customer places an order to when it's dispatched, is recorded and visible in real time.
solution:
  intro: |
    Two dashboards, one shared source of truth — order status updates in real time as work moves through the floor.
  columns:
    - title: For Administrators
      items:
        - "Create production orders and assign them by stages: Cutting → Sewing → Printing → Dispatch"
        - Manage the customer database with complete order history
        - Control fabric and supply inventory with minimum stock alerts
        - Monitor business metrics from a centralized dashboard
        - Generate production reports with estimated vs. actual times
    - title: For Operators
      items:
        - View their assigned tasks by production stage
        - Record the start and end of each job
        - Update progress in real time
        - See the current status of the orders they're working on
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
  - category: Database
    items:
      - MySQL 8
      - AWS RDS
      - 6-table relational model
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
       Firebase Auth  ──→  Token JWT validation
  description: |
    Clear separation between the SPA frontend and a stateless API backend; role-based access control (admin/operator) protecting routes on both frontend and backend; ORM with Hibernate/JPA; reactive global state with Zustand to sync data across views without prop-drilling; Repository pattern on the backend to decouple business logic from data access.
outcome:
  highlights:
    - "Database design: complete relational modeling with 6 tables (users, customers, orders, production stages, tasks, inventory)"
    - "Complete REST API: CRUD endpoints for orders, tasks, customers, and inventory with Spring Boot"
    - "Full-featured frontend: dual dashboard, validated forms, paginated tables, advanced filters"
    - "Authentication system: Firebase integration with the backend via Axios interceptors"
    - "AWS deployment: backend on EC2, database on RDS, frontend optimized with Vite"
  steps:
    - Administrator creates an order and assigns quantity, fabric type, and dates.
    - System auto-generates tasks by stage — Cutting, Sewing, Printing, Dispatch.
    - Operators see pending tasks and record start and end times as they work.
    - "Order status updates in real time — pending → in-progress → completed."
    - Order is marked finished once every stage is complete.
    - Productivity reports are generated and inventory usage is tracked automatically.
---
