# 🚗 AutoExpo

<p align="center">
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/JavaScript-Full%20Stack-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<p align="center">
  <strong>Discover. Compare. Choose.</strong>
</p>

<p align="center">
  A modern full-stack car discovery and comparison platform built with React, Node.js, Express and MongoDB-ready architecture.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-comparison-engine">Comparison</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

---

# 🏁 What is AutoExpo?

**AutoExpo** is a full-stack car discovery and comparison application that allows users to explore vehicles, search for specific models, filter cars by brand, and compare multiple cars side by side.

The project started as a **static first-year web project** and was later transformed into a modern **React + Vite frontend with an Express backend and MongoDB-ready data architecture**.

The goal of the upgrade was not simply to redesign the UI, but to turn a static website into an application with a proper frontend, backend, API layer, and extensible data model.

```text
       STATIC WEBSITE
             │
             ▼
     ┌───────────────┐
     │    AutoExpo   │
     └───────┬───────┘
             │
             │ MERN Upgrade
             ▼
┌─────────────────────────────┐
│       Modern AutoExpo       │
│                             │
│ React + Vite                │
│ Express REST API            │
│ MongoDB / Mongoose Ready    │
│ Search + Filters            │
│ Multi-Car Comparison        │
└─────────────────────────────┘
```

---

# ✨ The Experience

AutoExpo focuses on a simple idea:

> **Finding the right car shouldn't require opening ten different tabs.**

Users can:

```text
🔎 Search
   ↓
🚘 Discover Cars
   ↓
🎯 Filter by Brand
   ↓
➕ Select Cars
   ↓
⚖️ Compare Up to 3
   ↓
💡 Make an Informed Choice
```

---

# 🚘 Features

## 🔎 Smart Car Discovery

Browse available vehicles and quickly find models that match your interests.

* Search car models
* Browse available vehicles
* Filter by brand
* Explore car information

---

## 🎯 Brand Filtering

Quickly narrow down the available vehicles using brand-based filtering.

```text
All
 ├── BMW
 ├── Audi
 ├── Mercedes
 ├── Toyota
 └── ... 
```

---

## ⚖️ Side-by-Side Comparison

One of the main features of AutoExpo is the ability to compare **up to three cars simultaneously**.

Instead of switching between different pages:

```text
             CAR COMPARISON

        BMW        Audi       Mercedes
       ─────      ─────       ────────
Price    ✓          ✓            ✓
Engine   ✓          ✓            ✓
Model    ✓          ✓            ✓
Specs    ✓          ✓            ✓
```

This makes it easier to evaluate multiple options at once.

---

## 🧩 Full-Stack Architecture

The application separates the frontend and backend into independent layers.

```text
                         USER
                           │
                           ▼
                 ┌──────────────────┐
                 │   React + Vite   │
                 │    Frontend      │
                 └────────┬─────────┘
                          │
                          │ HTTP / REST
                          ▼
                 ┌──────────────────┐
                 │ Express.js API   │
                 │     Server       │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Mongoose Models  │
                 │   Data Layer     │
                 └────────┬─────────┘
                          │
                    ┌─────┴─────┐
                    │           │
                    ▼           ▼
                MongoDB      Sample Data
```

---

# 🧠 A Practical Fallback

One useful design decision in AutoExpo is that the application **doesn't completely depend on MongoDB being available for a demo**.

If `MONGO_URI` isn't configured, the backend can use built-in sample car data.

```text
             Start Application
                    │
                    ▼
              MongoDB Available?
                 /       \
               YES        NO
                │          │
                ▼          ▼
             MongoDB    Sample Data
                │          │
                └────┬─────┘
                     ▼
                 REST API
                     │
                     ▼
                React Client
```

This makes the project easier to run and demonstrate without requiring every environment to have a configured database.

---

# 🏗️ Project Architecture

```text
AutoExpo/
│
├── client/
│   ├── public/
│   └── src/
│
├── server/
│   └── src/
│
├── package.json
└── README.md
```

### Client

The frontend is responsible for:

* User interface
* Car discovery
* Search
* Filtering
* Comparison experience
* API communication

### Server

The backend provides:

* Express server
* REST API
* Car data handling
* Mongoose schema support
* MongoDB integration
* Sample-data fallback

---

# 🛠️ Technology Stack

### Frontend

**React + Vite**

Used for building the interactive car discovery and comparison interface.

### Backend

**Node.js + Express.js**

Provides the API layer and handles application-side data operations.

### Database

**MongoDB + Mongoose**

Provides a MongoDB-ready data layer with Mongoose schema support.

### Development

**JavaScript • npm • Git • GitHub**

---

# 📸 Application Showcase

> Add your best screenshots below. A strong README should show the product before asking the recruiter to read about it.

### 🏠 Car Discovery

```text
Add screenshot here
```

### 🔎 Search & Filtering

```text
Add screenshot here
```

### ⚖️ Car Comparison

```text
Add screenshot here
```

> Replace the placeholders above with actual repository images such as `![Home](path/to/image.png)`.

---

# ⚡ Getting Started

## Prerequisites

Make sure you have:

* Node.js
* npm
* MongoDB *(optional when using sample data)*

---

## 1. Clone

```bash
git clone https://github.com/iamsuyashhhhh/AutoExpo.git
cd AutoExpo
```

---

## 2. Install Dependencies

Install the project dependencies:

```bash
npm install
npm run install:all
```

---

## 3. Environment Variables

Configure the environment files required by the application.

### Server

Create/configure:

```text
server/.env
```

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

### Client

If your frontend requires environment variables, configure:

```text
client/.env
```

Use the environment variable names expected by the application.

---

# ▶️ Run the Application

Start both the frontend and backend using:

```bash
npm run dev
```

Default development endpoints:

```text
Frontend → http://localhost:5173
Backend  → http://localhost:5000
```

---

# 🍃 MongoDB Configuration

To connect AutoExpo to MongoDB, add your connection string to:

```text
server/.env
```

```env
MONGO_URI=your_mongodb_connection_string
```

When MongoDB isn't configured, the application can fall back to its built-in sample data for demonstration.

---

# 🔌 API Layer

The backend exposes an API layer between the React client and the data source.

```text
React
  │
  │ HTTP Request
  ▼
Express API
  │
  ├── MongoDB
  │
  └── Sample Data
  │
  ▼
JSON Response
  │
  ▼
React UI
```

This separation makes it easier to replace or extend the underlying data source without rebuilding the frontend.

---

# 📈 From Static Website to Full-Stack Application

One of the main goals of this project was to evolve an existing static website into a more structured application.

| Earlier Version          | AutoExpo               |
| ------------------------ | ---------------------- |
| Static website           | Full-stack application |
| Static UI                | React components       |
| No backend layer         | Express REST API       |
| Static data              | API-driven data        |
| Limited interaction      | Search & filtering     |
| Basic car display        | Multi-car comparison   |
| No database architecture | MongoDB/Mongoose ready |

This transformation provided practical experience in moving from **frontend-only development to full-stack application architecture**.

---

# 🧠 What I Learned

Through the AutoExpo upgrade, I gained practical experience with:

* React application architecture
* Vite-based frontend development
* Express.js backend development
* REST API integration
* MongoDB and Mongoose concepts
* Environment configuration
* Client-server communication
* Search and filtering logic
* Multi-item comparison interfaces
* Designing applications around reusable components
* Migrating a static project toward a full-stack architecture

---

# 🚀 Future Ideas

Potential directions for future versions:

* 🔐 User authentication
* ❤️ Save favorite cars
* 📊 Advanced specification comparison
* 💰 Price comparison
* 🧮 EMI calculator
* 📍 Dealer/location search
* ⭐ User reviews and ratings
* ☁️ Cloud deployment
* 📱 Improved mobile experience

---

# 👨‍💻 Author

### Suyash Saxena

**Computer Engineering Student | Data Engineering & Software Development**

<p>
  <a href="https://github.com/iamsuyashhhhh">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
</p>

---

<p align="center">
  <b>🚗 AutoExpo — Discover. Compare. Choose.</b>
  <br/>
  <sub>React • Vite • Node.js • Express.js • MongoDB</sub>
</p>

<p align="center">
  ⭐ If you like the project, consider giving it a star!
</p>
