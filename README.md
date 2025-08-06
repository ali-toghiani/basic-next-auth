# Basic Next.js Authentication App

A simple authentication flow using Next.js and React Context API. This project demonstrates basic user authentication, protected routes, and dashboard functionality.

## Features

- User authentication with phone number validation
- Protected routes with middleware
- User dashboard with profile information
- Form validation using Zod
- Responsive UI components
- TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 15.4.5
- **UI**: Custom components with SCSS
- **State Management**: React Context API
- **Form Validation**: Zod
- **Styling**: SCSS modules
- **Language**: TypeScript

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable UI components
- `/src/context` - React Context for state management
- `/src/hooks` - Custom React hooks
- `/src/types` - TypeScript type definitions
- `/src/validation` - Zod validation schemas
- `/src/styles` - Global styles and variables
- `/src/consts` - Constants used throughout the app
- `/src/enums` - Enumerations for routes and other values

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Flow

1. User enters phone number on the login page
2. Phone number is validated using Zod schema
3. On successful validation, a random user is fetched from the API
4. User data is stored in Context API and localStorage
5. User is redirected to the dashboard

## Deployment

This application can be deployed on Vercel or any other hosting platform that supports Next.js applications.

## Future Improvements

- Add proper authentication with JWT or OAuth
- Implement more comprehensive form validation
- Add unit and integration tests
- Enhance security features
- Improve accessibility