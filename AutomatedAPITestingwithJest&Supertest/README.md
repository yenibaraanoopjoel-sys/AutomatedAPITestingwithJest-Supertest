# Automated API Testing with Jest & Supertest

A comprehensive integration testing suite for authentication routes using Jest and Supertest.

## Project Structure

```
.
├── app.js                 # Express app (no listen() call)
├── server.js             # Server startup (imports app, calls listen)
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore patterns
├── models/
│   └── User.js          # MongoDB User schema with password hashing
├── routes/
│   └── auth.js          # Authentication routes (register & login)
└── tests/
    └── auth.test.js     # Integration tests
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Ensure MongoDB is running** (locally or via Docker):
   ```bash
   # Local MongoDB
   mongod

   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo
   ```

3. **Configure environment variables** in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/auth_dev
   MONGODB_URI_TEST=mongodb://localhost:27017/auth_test
   NODE_ENV=development
   PORT=5000
   ```

## Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests in watch mode:**
```bash
npm run test:watch
```

## Test Coverage

The test suite includes **20+ integration tests** covering:

### Register Endpoint (`POST /api/auth/register`)
- ✓ Register with valid data
- ✓ Reject duplicate email registration
- ✓ Reject missing name field
- ✓ Reject missing email field
- ✓ Reject missing password field
- ✓ Reject all missing fields
- ✓ Verify password hashing before storage

### Login Endpoint (`POST /api/auth/login`)
- ✓ Login with correct credentials
- ✓ Reject login with wrong password
- ✓ Reject login with non-existent email
- ✓ Reject missing email field
- ✓ Reject missing password field
- ✓ Reject all missing fields
- ✓ Case-insensitive email login

### Integration Tests
- ✓ Health endpoint verification
- ✓ Complete user flow (register → login)
- ✓ Password tampering prevention

## Key Features

### Architecture
- **Separation of Concerns**: `app.js` exports Express app, `server.js` handles startup
- **Test Database**: Uses separate test database (`MONGODB_URI_TEST`)
- **Lifecycle Hooks**: 
  - `beforeAll`: Connect to database
  - `afterEach`: Clear users collection
  - `afterAll`: Close database connection

### Security
- Passwords are hashed using bcryptjs with salt rounds = 10
- Password hashing done in pre-save middleware
- Passwords never returned in API responses
- Password comparison uses bcrypt

### Testing Best Practices
- Uses Supertest for HTTP assertions
- Tests both success and failure scenarios
- Verifies database state after operations
- Covers edge cases and validation
- Uses descriptive test names

## API Endpoints

### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400/409):**
```json
{
  "success": false,
  "message": "User already exists with this email"
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Development

**Start development server:**
```bash
npm start
```

The server will start on the port specified in `.env` (default: 5000).

## Why This Project Structure?

### app.js vs server.js
- **app.js**: Exports the Express application object, making it easier to test
- **server.js**: Handles the server startup (connecting to DB and calling `listen()`)
- This separation allows tests to import the app without starting an actual server

### Test Database Isolation
- Tests use `MONGODB_URI_TEST` instead of `MONGODB_URI`
- Each test run clears the test database to ensure isolation
- Prevents test data from polluting development database

### Lifecycle Hooks
- **beforeAll**: Establishes database connection once for all tests
- **afterEach**: Cleans up test data after each test
- **afterAll**: Properly closes database connection and drops test database

## Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **bcryptjs** - Password hashing
- **Jest** - Test runner
- **Supertest** - HTTP assertion library
- **dotenv** - Environment variable management

## Notes

- The test environment is automatically set to `test` when running `npm test`
- All sensitive data (passwords) is properly hashed and never exposed in responses
- Tests clean up after themselves to prevent side effects
- The test suite uses the `--forceExit` flag to ensure all connections are properly closed

---

For more information on the technologies used:
- [Jest Documentation](https://jestjs.io/)
- [Supertest GitHub](https://github.com/visionmedia/supertest)
- [Mongoose Documentation](https://mongoosejs.com/)
