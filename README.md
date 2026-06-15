# Zubair Manzoor Portfolio

A full-stack developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, Express, and MongoDB.

## Local setup

1. Copy `server/.env.example` to `server/.env`.
2. Add a MongoDB Atlas connection string and update the allowed client URL.
3. Run `pnpm install`.
4. Run `pnpm dev`.

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:5000`.

## Vercel contact form

The deployed frontend uses `api/contacts.js` to deliver contact form
messages through Resend. Configure these encrypted environment variables in
Vercel:

- `RESEND_API_KEY`
- `EMAIL_FROM`
- `CONTACT_TO_EMAIL`

Redeploy after changing any environment variable.

## Commands

- `pnpm dev` - run client and server in development
- `pnpm build` - create the production frontend build
- `pnpm start` - start the production API
- `pnpm check` - run frontend linting and server syntax checks
