# AutoExpo MERN Upgrade

This project upgrades your original first-year static `AutoExpo` website into a MERN-style car discovery and comparison app.

## What changed

- `client/` now contains a React + Vite frontend.
- `server/` now contains an Express API with Mongo-ready Mongoose schema support.
- Users can browse cars, filter by brand, search models, and compare up to 3 cars side by side.
- If MongoDB is not connected yet, the app still works using built-in sample data so you can demo it easily in college.

## Project structure

```text
client/
  public/
  src/
server/
  src/
```

## How to run

1. Install dependencies:

```bash
npm install
npm run install:all
```

2. Create env files if needed:

- Copy `server/.env` to `server/.env`
- Copy `client/.env` to `client/.env`

3. Start the app:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## MongoDB support

Add your Mongo connection string inside `server/.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

When `MONGO_URI` is missing, the server automatically uses sample car data for presentation/demo purposes.


