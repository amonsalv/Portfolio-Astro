---
title: Ordenary
publishDate: 2026-07-15
img: /assets/ordenary.png
img_alt: Ordenary landing page showing the "Run your operation. Any industry. One tool." hero with a dashboard preview of orders, revenue, and pending tasks.
description: |
  A multi-tenant operations-management SaaS growing out of the Telas 3B system — one universal Order/Task/Item/Client model that relabels itself for any industry. Currently in active development, not live yet.
tags:
  - Full Stack
  - React
  - TypeScript
  - Spring Boot
  - Firebase
  - PostgreSQL
problem: |
  Telas 3B was built for one textile company. While maintaining it, the same shape kept showing up — orders move through stages, operators pick up tasks, inventory gets tracked — regardless of what the business actually made or sold. Ordenary is what happens when that observation becomes the product: instead of a system for one client, a universal Order/Task/Item/Operator/Client core that each workspace relabels to its own industry through an IndustryProfile — textile, workshop, restaurant, construction, and beyond.
solution:
  columns:
    - title: What it does
      items:
        - Multi-tenant workspaces, each speaking its own industry's language over the same underlying model
        - Orders, tasks, inventory and clients managed from a single dashboard, with role-based views for admins and operators
        - Reports, notifications, and low-stock alerts built on top of the same core data
        - Firebase authentication in front of a Spring Security-protected API
techStack:
  - category: Frontend
    items:
      - React 18
      - TypeScript
      - Vite
      - Zustand
      - Firebase Auth
      - Axios
      - Recharts
  - category: Backend
    items:
      - Java 17
      - Spring Boot 3
      - Spring Security
      - Spring Data JPA
      - PostgreSQL
      - Flyway
      - Bucket4j
  - category: Testing
    items:
      - Vitest — 290 tests across 62 files
      - Storybook component library
  - category: Infra
    items:
      - Docker Compose (PostgreSQL + backend)
outcome:
  steps:
    - Core Order/Task/Item/Operator/Client model built and relabeling correctly across industry profiles.
    - Frontend mid-migration from a legacy BEM stylesheet architecture to Tailwind CSS, component by component.
    - "290 tests across 62 files keep the multi-tenant surface honest as it grows."
    - Frontend runs locally against a Dockerized backend; production deployment is next.
---
