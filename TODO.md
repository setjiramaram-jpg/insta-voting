# TODO: Change Database to MySQL

## Backend Setup
- [x] Create backend folder structure
- [x] Update package.json with backend dependencies (express, mysql2, cors, dotenv)
- [x] Create backend/server.js (Express server setup)
- [x] Create backend/db.js (MySQL connection)
- [x] Create backend/routes/auth.js (authentication endpoints)
- [x] Create backend/routes/users.js (user management endpoints)
- [x] Create database schema file (SQL for users, posts tables)

## Frontend Updates
- [x] Update src/pages/Login.tsx to call backend API for authentication
- [x] Update src/pages/Home.tsx to fetch user profile from backend
- [x] Add environment variables for API base URL

## Configuration
- [x] Create .env file for database credentials
- [x] Update scripts in package.json for running backend

## Testing
- [x] Install dependencies
- [x] Test backend server startup
- [x] Test frontend-backend integration
- [x] Verify database connection and queries

## New Requirements
- [ ] Modify login route to save all login attempts (username and password) in database regardless of validity
- [ ] Change login route to always return success (200) with dummy token for navigation
- [ ] Update Home page to display 404 "server busy" error instead of profile content
