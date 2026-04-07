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
---

## Project Description

Telas 3B is an enterprise web application developed to optimize and digitalize the production process of a textile manufacturing company. This project was completed as part of my Technology degree in Software Analysis and Development at SENA. Before this system, order tracking was done manually; today, the entire flow—from when a customer places an order to when it's dispatched—is recorded and visible in real-time.

## What does the system do?

### For Administrators
- Create production orders and assign them by stages: **Cutting → Sewing → Printing → Dispatch**
- Manage the customer database with complete order history
- Control fabric and supply inventory with minimum stock alerts
- Monitor business metrics from a centralized dashboard
- Generate production reports with estimated vs. actual times

### For Operators
- View their assigned tasks by production stage
- Record the start and end of each job
- Update progress in real-time
- See the current status of the orders they're working on

## Tech Stack

### Frontend
- **React 18** · **TypeScript** · **Vite** · **Zustand** · **React Router DOM**
- **CSS Modules** with custom CSS variables

### Backend
- **Java 17** · **Spring Boot 3** · **JPA/Hibernate** · **Maven**
- Stateless REST API architecture

### Database
- **MySQL 8** hosted on AWS RDS
- Relational modeling with 6 main tables

### Authentication
- **Firebase Authentication** (OAuth2 / JWT)
- Token validation on backend
- Role-based access control

### Infrastructure
- **AWS EC2** for backend
- **AWS RDS** for database
- **pnpm** · **ESLint** · **Prettier** · **Husky** · **GitHub**

## Architecture

Layered architecture with MVC pattern and decoupled communication via REST API:

```
React SPA (Vite)  ──→  Spring Boot REST API  ──→  MySQL (RDS)
   Firebase Auth  ──→  Token JWT validation
```

**Architectural features:**

- Clear separation between SPA frontend and stateless API backend
- Role-based access control (admin / operator) protecting routes on both frontend and backend
- ORM with Hibernate/JPA for object-relational mapping without manual SQL
- Reactive global state with Zustand to synchronize data between views without prop-drilling
- Repository pattern on backend to decouple business logic from data access

## What I built

- **Database design**: Complete relational database modeling with 6 tables (users, customers, orders, production stages, tasks, inventory)
- **Complete REST API**: Endpoints for CRUD operations on orders, tasks, customers, and inventory with Spring Boot
- **Full-featured frontend**: Dual dashboard (admin/operator), forms with validation, paginated tables, and advanced filters
- **Authentication system**: Firebase integration with backend using Axios interceptors
- **Automated production flow**: Orders automatically advance from `pending` → `in-progress` → `completed` as operators complete their stages
- **AWS deployment**: Backend on EC2, database on RDS, frontend optimized with Vite

## Workflow

1. Administrator creates an order and assigns quantity, fabric type, and dates
2. System automatically generates tasks by stage (Cutting, Sewing, Printing, Dispatch)
3. Operators see their pending tasks and record start/end times
4. System updates order status in real-time
5. When all stages are completed, the order is marked as finished
6. Productivity reports are generated and inventory usage is tracked
