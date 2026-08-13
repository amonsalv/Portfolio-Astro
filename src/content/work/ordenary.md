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
---

## How it started

Telas 3B was built for one textile company. While maintaining it, the same shape kept showing up — orders move through stages, operators pick up tasks, inventory gets tracked — regardless of what the business actually made or sold. Ordenary is what happens when that observation becomes the product: instead of a system for one client, a universal Order/Task/Item/Operator/Client core that each workspace relabels to its own industry through an `IndustryProfile` — textile, workshop, restaurant, construction, and beyond.

## What it does

- Multi-tenant workspaces, each speaking its own industry's language over the same underlying model
- Orders, tasks, inventory and clients managed from a single dashboard, with role-based views for admins and operators
- Reports, notifications, and low-stock alerts built on top of the same core data
- Firebase authentication in front of a Spring Security-protected API

## Tech stack

**Frontend:** React 18, TypeScript, Vite, Zustand, Firebase Auth, Axios, Recharts — mid-migration from a legacy BEM stylesheet architecture to Tailwind CSS, component by component.

**Backend:** Java 17, Spring Boot 3, Spring Security, Spring Data JPA, PostgreSQL with Flyway migrations, Bucket4j rate limiting.

**Testing:** Vitest, 290 tests across 62 files; Storybook for the component library.

**Infra:** Docker Compose for PostgreSQL + backend.

## Where it's at

Still in active development — not deployed anywhere yet. The frontend runs locally against a Dockerized backend while I work through the parts a single-client project like Telas 3B never forced me to solve: multi-tenancy, an industry-agnostic domain model, and a test suite that has to hold as the surface area grows. Production deployment is next.
