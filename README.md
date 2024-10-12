This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

This project follows a structured directory setup to maintain clarity and organization as the codebase grows. Here's a breakdown of the main directories and their purposes:

```
/app
  /api               # API routes for server-side logic
  /dashboard         # Dashboard related pages and layouts
  layout.tsx         # Global layout applied to all pages
  page.tsx           # Home page of the application
  /_lib              # Internal server-side utilities and functions
  /_components       # Internal components used only within the app's pages
/components          # Reusable UI components used across the entire app
/features            # Feature-specific components and logic, grouped by functionality
/lib                 # Global utility functions and hooks for the entire app
```

### Explanation

- **`/app`**: Contains all the pages, API routes, and layouts. This directory handles the routing and structure of the app.

  - **`/api`**: Houses server-side API routes that the application relies on.
  - **`/dashboard`**: Example of a nested route for dashboard-related pages.
  - **`layout.tsx`**: The global layout that wraps around every page in the app, containing elements like the header or footer.
  - **`/_lib`**: Holds server-side logic that is not directly exposed to the client but is used within the app.
  - **`/_components`**: Internal components specifically used for rendering within the app's pages or layouts.

- **`/components`**: Contains reusable UI components that can be used throughout the application, such as buttons or modals. These components are designed to be modular and adaptable.

- **`/features`**: Groups feature-specific components and logic together, organized by functionality. For example, a user profile or shopping cart feature would have all its related components and logic in one place.

- **`/lib`**: Contains global utility functions, hooks, and other reusable logic that can be used across the entire app. This includes things like API clients, data fetching functions, or formatting utilities.

This organized structure helps maintain a clean and scalable codebase, making it easier to develop and manage as your application grows.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
