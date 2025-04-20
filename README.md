# Shoe Store E-Commerce Project

## Project Overview

**Name:** Shoe Store  
**Stack:** Next.js (App Router), Tailwind CSS, Prisma (PostgreSQL), NextAuth.js, Stripe, React Hook Form, ShadCN UI  
**Goal:** Build a responsive, performant, SEO-friendly shoe e-commerce app with features like authentication, product filtering, cart/checkout, and admin dashboard.

## Core Features

### Customer-Side Features:
- User registration and login (NextAuth with credentials, social logins)
- Browse shoes by category, brand, size, and color
- Product search and filtering
- Product details page with images, description, and reviews
- Add to cart and manage cart items
- Checkout process with Stripe integration
- Order history and tracking
- User profile management

### Admin-Side Features:
- Admin dashboard for managing products, orders, and users
- Add, edit, and delete products
- Manage inventory and stock levels
- View and process orders
- User management (view, edit, delete users)
- Sales analytics and reports

## Stack Details

- **Next.js:** Framework for building the application
- **Tailwind CSS:** Utility-first CSS framework for styling
- **Prisma:** ORM for database management (PostgreSQL)
- **NextAuth.js:** Authentication library
- **Stripe:** Payment processing
- **React Hook Form:** Form management
- **ShadCN UI:** UI components library

## Setting Up the Development Environment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/shoe-store.git
   cd shoe-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   DATABASE_URL=your-database-url
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Run database migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Running the Project Locally

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Contributing to the Project

We welcome contributions from the community! To contribute, please follow these steps:

1. **Fork the repository:**
   Click the "Fork" button at the top right of this page.

2. **Clone your forked repository:**
   ```bash
   git clone https://github.com/your-username/shoe-store.git
   cd shoe-store
   ```

3. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes and commit them:**
   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

5. **Push your changes to your forked repository:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a pull request:**
   Go to the original repository on GitHub and click the "New Pull Request" button.

Thank you for your contributions!
