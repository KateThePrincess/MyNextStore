# 🛍️ Next.js Store

A fully functional e-commerce store built with **Next.js**, using **ShadCN UI** for styling. The store includes authentication with **Clerk**, secure payments with **Stripe**, and various e-commerce functionalities.

## 🌐 Production Build

You can view the live production version of the store here:  
[https://my-next-store-seven.vercel.app/](https://my-next-store-seven.vercel.app/))

## 🚀 Features

- **Admin Features**
  - Create new products
  - Edit existing products

- **User Features**
  - Browse and view products
  - Leave reviews on products
  - Add products to favorites
  - Secure checkout with Stripe payments

- **Authentication**
  - User authentication powered by **Clerk**
  - Only authenticated users can checkout, review, and favorite products
  - Admin users have special privileges
    
- **Databse**
  - postgreSQL
  - Prisma

## 🛠️ Tech Stack

- **Next.js** – React framework for performance and SEO
- **ShadCN UI** – Modern UI components
- **Clerk** – Authentication & user management
- **Stripe** – Payment processing
- **Prisma** – ORM for database management
- **Tailwind CSS** – Styling alongside ShadCN

## 🔎 How It Works

### 🛠 Admin Features
- Admin users can **create new products** and **edit existing ones** through the admin dashboard.  
- Products are stored in the database using **Prisma ORM**.

### 👥 User Features
- **Authentication**: Users must **sign in with Clerk** to access certain features like checkout, reviews, and favorites.  
- **Product Reviews**: Authenticated users can **leave reviews** on products.  
- **Favorites**: Users can **add products to their favorites** and view them in their profile.  
- **Secure Checkout**: Users can **purchase products using Stripe**, ensuring safe and fast transactions.  

### 💳 Payments (Stripe)
- Users proceed to checkout, where **Stripe handles the payment securely**.  
- After a successful transaction, **order details are saved**.  


