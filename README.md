# Netlify Edge Functions with Prisma Accelerate

This guide outlines how to utilize Prisma Accelerate's connection pooling with
Netlify Edge functions.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- Netlify CLI:

  ```bash
  npm install netlify-cli -g
  ```

- Latest version of Deno in your project

## Getting Started

1. **Set Up Environment Variables**: Create an `.env` file in your project
   directory and define the required environment variables:

   ```bash
   DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=__API_KEY__"
   DIRECT_URL="postgresql://user:password@host:port/db_name?schema=public"
   ```

2. **Run Migrations and Generate Prisma Client**:

   Execute the following commands in your terminal:

   ```bash
   deno run -A npm:prisma migrate dev --name init
   ```

   Generate your Prisma Client:

   ```bash
   deno run -A --unstable npm:prisma generate --no-engine
   ```

3. **Start Your Project**:

   Launch your project locally using Netlify Dev:

   ```bash
   netlify dev
   ```

## Deploy to Production

Make sure you're logged in to Netlify using the CLI:

```bash
netlify login
```

### Deploy to Netlify

1. **Set Environment Variables**:

   Update your project's environment variables on Netlify using the CLI:

   ```bash
   netlify env:set DATABASE_URL "prisma://accelerate.prisma-data.net/?api_key=__API_KEY__"
   ```

   ```bash
   netlify env:set DIRECT_URL "postgresql://user:password@host:port/db_name?schema=public"
   ```

2. **Deploy to Netlify**:

   Trigger the deployment process to Netlify:

   ```bash
   netlify deploy --prod
   ```

   - **Output**:

     Upon successful deployment, you'll receive deployment details including
     logs and URLs to access your deployed application.

3. **Test Your API**:

   Navigate to the `/hello` endpoint of your deployed application to verify that
   your API is functioning correctly.
