# Peer Tutor Automation

Local-first peer tutoring automation app.

## Project Structure

```
Peer_Tutor_Automation/
├── frontend/          # Next.js (React) + Tailwind CSS + Auth.js (NextAuth)
│   └── src/
│       ├── app/                       # Next.js App Router
│       │   └── api/auth/[...nextauth] # NextAuth route handler
│       ├── auth.ts                    # NextAuth (Auth.js) config
│       └── lib/api.ts                 # API client → backend
└── backend/           # Local Node.js server
    ├── src/
    │   ├── index.ts          # Express entry (HTTP API)
    │   ├── routes/           # API route definitions
    │   ├── db/               # Drizzle ORM + SQLite client + schema
    │   ├── automation/       # XLSX (SheetJS) utilities
    │   └── cron/             # node-cron scheduled jobs
    ├── drizzle.config.ts
    └── data/                 # local SQLite database files
```

The frontend and backend are separate processes; they communicate over HTTP via the API client in `frontend/src/lib/api.ts`, which calls endpoints defined under `backend/src/routes/`.

## Tech Stack

| Layer            | Technology                          |
| ---------------- | ----------------------------------- |
| Frontend         | Next.js (React) + TypeScript        |
| Styling          | Tailwind CSS                        |
| Authentication   | Auth.js (NextAuth) via OAuth        |
| Backend          | Node.js + Express (runs locally)    |
| Database         | SQLite3 (`better-sqlite3`)          |
| ORM              | Drizzle ORM (+ drizzle-kit)         |
| Automation       | XLSX (SheetJS)                      |
| Task Runner      | node-cron                           |

> The entire backend (including the database) runs **locally**.

## Getting Started

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run db:generate   # generate SQL migrations from schema
npm run db:migrate    # apply migrations to local SQLite
npm run dev           # start API on http://localhost:4000
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev           # start app on http://localhost:3000
```

## Communication

All frontend ↔ backend traffic flows through API functions:

- Frontend: `frontend/src/lib/api.ts` (`apiFetch`) → calls backend
- Backend: `backend/src/routes/` → defines HTTP endpoints

No direct database access from the frontend.