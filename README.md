# Architecture Decisions

## Why Next.js App Router

The App Router was chosen because it provides:
- server components
- nested layouts
- scalable routing
- improved data-fetching patterns
- better long-term extensibility

This architecture keeps frontend and backend workflows structured while supporting production-style routing patterns.

---

## Why Prisma ORM

Prisma was selected because it provides:
- type-safe database access
- schema-driven development
- strong PostgreSQL support
- scalable relational querying
- clean migration workflows

This significantly improves developer reliability and maintainability.

---

## Database Normalization Strategy

The database architecture separates:
- companies
- compensation entries

This normalization approach:
- prevents duplicate company records
- improves query scalability
- supports analytics workflows
- enables structured comparisons

Company names are normalized before insertion to reduce inconsistencies such as:
- Google India
- Google LLC
- Google Pvt Ltd

all mapping into a consistent normalized representation.

---

## Why Server Rendering

Server rendering was used for:
- dashboard data
- analytics pages
- company insights

Benefits:
- improved reliability
- reduced client-side complexity
- better data consistency
- scalable rendering patterns

This aligns well with analytics-oriented applications.

---

## API Architecture

The application uses route-based API handlers for:
- compensation fetching
- filtering
- analytics
- comparison workflows
- compensation submissions

This keeps frontend and backend concerns modular and extensible.

---

# Tradeoffs

## Prioritized
- clean architecture
- scalable backend design
- reliable data workflows
- structured compensation systems

## Deprioritized
- authentication complexity
- excessive UI animations
- social/community features
- premature microservice patterns

The goal was to build a focused MVP with strong engineering fundamentals.

---

# Scaling Considerations

The architecture was designed with future scalability in mind.

Potential future improvements:
- Redis caching
- full-text search
- advanced analytics pipelines
- authentication and saved comparisons
- pagination optimization
- event-driven ingestion workflows

The current structure supports these upgrades without major rewrites.