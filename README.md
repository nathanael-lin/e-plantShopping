# e-plantShopping

A React.js front-end shopping application for **Paradise Nursery** — a fictional houseplant store. Built as a final project for a React course.

## Features

- **Landing Page** — Company background, name, and a "Get Started" button
- **Product Listing Page** — Browse 6+ houseplants across 3+ categories, each with thumbnail, name, price, and "Add to Cart" button (disables after adding)
- **Shopping Cart Page** — View all cart items with subtotals, adjust quantities (+/-), remove items, and proceed to checkout
- **Dynamic Cart Icon** — Header cart count updates in real time across all pages

## Tech Stack

- React.js (Vite)
- Redux Toolkit (`CartSlice` for global cart state)
- React-Redux (`Provider`, `useDispatch`, `useSelector`)

## Project Structure
```
src/
├── App.jsx # Landing page
├── App.css # Background image styles
├── AboutUs.jsx # Company info
├── ProductList.jsx # Product listing + cart logic
├── CartItem.jsx # Shopping cart page
├── CartSlice.jsx # Redux slice (addItem, removeItem, updateQuantity)
├── store.js # Redux store configuration
└── main.jsx # App entry point with Redux Provider
```

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```
