# Microfrontend-Commerce-System
A scalable microfrontend-based e-commerce platform built with React and Webpack Module Federation, featuring independent deployments, shared cart, authentication, and AWS-based CI/CD pipeline.

# 🛍️ Modular Commerce Platform (Microfrontend Architecture)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Webpack](https://img.shields.io/badge/Webpack-5-blue?logo=webpack)
![Module Federation](https://img.shields.io/badge/Microfrontend-Module%20Federation-purple)
![Redux](https://img.shields.io/badge/State-Redux%20Saga-green)
![Monorepo](https://img.shields.io/badge/Monorepo-Turborepo-orange)
![AWS](https://img.shields.io/badge/Deployment-AWS-yellow?logo=amazonaws)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🚀 Overview

A **production-grade microfrontend e-commerce platform** built using **React, Webpack 5 Module Federation, and AWS**.

This project demonstrates how to build a **scalable frontend architecture** where multiple independent applications (microfrontends) work together as a single system while maintaining **independent development and deployment pipelines**.

---

## 🧠 Key Highlights

- Microfrontend architecture using **Module Federation**
- Independent deployment of each application
- Shared cart across multiple microfrontends
- Centralized authentication system
- Monorepo setup using Turborepo/Nx
- AWS-based CI/CD pipeline
- Performance optimized and production-ready setup

---

## 🏗️ Architecture

### 🔹 Host (Shell App)
- Handles routing and navigation
- Manages authentication
- Maintains global state (cart, user)
- Dynamically loads microfrontends

---

### 🔹 Microfrontends (Remotes)

- 🥦 Groceries
- 📱 Electronics
- 🧸 Toys

Each microfrontend:
- Built independently
- Uses Redux + Saga
- Has its own deployment pipeline
- Exposes routes/components via Module Federation

---

### 🔹 Shared Packages

- UI Component Library (Button, Header, Card)
- Utility functions
- Analytics module

---

## 🧭 Architecture Diagram

![Architecture](./docs/architecture.png)

---

## ⚙️ Tech Stack

- React.js
- Webpack 5 (Module Federation)
- Redux + Redux Saga
- Turborepo / Nx (Monorepo)
- Mock Service Worker (MSW)
- AWS (S3, CloudFront, CodePipeline, CodeBuild)

---

## 🔥 Features

### 🧩 Microfrontend Integration
- Dynamic remote loading using Module Federation
- Lazy loading with fallback UI
- Independent builds and deployments

---

### 🛒 Shared Cart Across Applications
- Add products in one microfrontend
- Access the same cart in another microfrontend
- Cart managed at host level
- Persisted using localStorage

---

### 🔐 Authentication
- Centralized login system
- Token-based authentication
- Protected routes
- Token shared across microfrontends

---

### 📡 Communication Strategy
- URL-based routing (primary)
- Custom events (header updates)
- Shared modules for cross-app communication

---

### ⚡ Performance Optimization
- Code splitting and lazy loading
- Shared dependency optimization
- CloudFront CDN caching
- Bundle size optimization
- Memoization (React.memo, useMemo)
- Prefetching remote applications

---

### 🚨 Error Handling
- Error boundaries per microfrontend
- Retry mechanism for failed remote loading
- Graceful fallback UI

---

### 📊 Analytics Tracking
- Track page views and user interactions
- Centralized analytics module
- Easily extendable to external tools

---

### 🌐 Internationalization (i18n)
- Multi-language support (extendable)

---

## 📸 Screenshots

### 🏠 Host Application
![Host](./docs/screenshots/host.png)

### 🛒 Electronics Microfrontend
![Electronics](./docs/screenshots/electronics.png)

### 🔁 Shared Cart Across Apps
![Cart](./docs/screenshots/cart.png)

### 🔐 Authentication
![Login](./docs/screenshots/login.png)

### 🚨 Error Handling
![Error](./docs/screenshots/error.png)

---

## 📁 Project Structure
