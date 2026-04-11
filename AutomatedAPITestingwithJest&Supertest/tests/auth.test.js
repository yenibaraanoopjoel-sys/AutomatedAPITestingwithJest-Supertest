const request = require('supertest');
const mongoose = require('mongoose');
const { app, connectDB } = require('../app');
const User = require('../models/User');

describe('Authentication Routes Integration Tests', () => {
  const testUser = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  };

  // Setup: Connect to test database before all tests
  beforeAll(async () => {
    // Set NODE_ENV to test to use test database
    process.env.NODE_ENV = 'test';
    await connectDB();
  });

  // Cleanup: Clear users after each test
  afterEach(async () => {
    await User.deleteMany({});
  });

  // Teardown: Close database connection after all tests
  afterAll(async () => {
    // Delete test database
    await mongoose.connection.db.dropDatabase();
    // Close connection
    await mongoose.connection.close();
  });

  describe('POST /api/auth/register', () => {
    // Test 1: Register with valid data
    it('should register a user with valid data', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);

      expect(response.body).toMatchObject({
        success: true,
        message: 'User registered successfully',
      });
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.user.name).toBe(testUser.name);
      expect(response.body.user.email).toBe(testUser.email);
      expect(response.body.user).not.toHaveProperty('password');

      // Verify user was saved to database
      const savedUser = await User.findOne({ email: testUser.email });
      expect(savedUser).toBeDefined();
      expect(savedUser.name).toBe(testUser.name);
    });

    // Test 2: Register with existing email (duplicate)
    it('should reject registration with existing email', async () => {
      // Create first user
      await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);

      // Try to create another user with same email
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Jane Doe',
          email: testUser.email, // Same email
          password: 'password456',
        })
        .expect(409);

      expect(response.body).toMatchObject({
        success: false,
        message: 'User already exists with this email',
      });
    });

    // Test 3: Register with missing name
    it('should reject registration with missing name', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: testUser.email,
          password: testUser.password,
        })
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide name, email, and password',
      });
    });

    // Test 4: Register with missing email
    it('should reject registration with missing email', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          name: testUser.name,
          password: testUser.password,
        })
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide name, email, and password',
      });
    });

    // Test 5: Register with missing password
    it('should reject registration with missing password', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          name: testUser.name,
          email: testUser.email,
        })
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide name, email, and password',
      });
    });

    // Test 6: Register with all missing fields
    it('should reject registration with all missing fields', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({})
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide name, email, and password',
      });
    });

    // Test 7: Verify password is hashed in database
    it('should hash password before saving to database', async () => {
      await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);

      const savedUser = await User.findOne({ email: testUser.email });
      expect(savedUser.password).not.toBe(testUser.password);
      expect(savedUser.password.length).toBeGreaterThan(20); // Hashed passwords are longer
    });
  });

  describe('POST /api/auth/login', () => {
    // Setup for login tests: Create a user before each login test
    beforeEach(async () => {
      await request(app)
        .post('/api/auth/register')
        .send(testUser);
    });

    // Test 1: Login with correct credentials
    it('should login user with correct credentials', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: testUser.password,
        })
        .expect(200);

      expect(response.body).toMatchObject({
        success: true,
        message: 'Login successful',
      });
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.user.name).toBe(testUser.name);
      expect(response.body.user.email).toBe(testUser.email);
      expect(response.body.user).not.toHaveProperty('password');
    });

    // Test 2: Login with wrong password
    it('should reject login with wrong password', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: 'wrongpassword',
        })
        .expect(401);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Invalid email or password',
      });
    });

    // Test 3: Login with non-existent email
    it('should reject login with non-existent email', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: testUser.password,
        })
        .expect(401);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Invalid email or password',
      });
    });

    // Test 4: Login with missing email
    it('should reject login with missing email', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          password: testUser.password,
        })
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide email and password',
      });
    });

    // Test 5: Login with missing password
    it('should reject login with missing password', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
        })
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide email and password',
      });
    });

    // Test 6: Login with all missing fields
    it('should reject login with all missing fields', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({})
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Please provide email and password',
      });
    });

    // Test 7: Case-insensitive email login
    it('should login with email in different case', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email.toUpperCase(),
          password: testUser.password,
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.user.email).toBe(testUser.email.toLowerCase());
    });
  });

  describe('Health and Integration', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Server is running');
    });

    it('should handle complete user flow: register then login', async () => {
      // Register
      const registerRes = await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);

      const userId = registerRes.body.user.id;

      // Login
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: testUser.password,
        })
        .expect(200);

      expect(loginRes.body.user.id).toBe(userId);
      expect(loginRes.body.user.email).toBe(testUser.email);
    });

    it('should not allow registration and login with tampered password', async () => {
      // Register user
      await request(app)
        .post('/api/auth/register')
        .send(testUser)
        .expect(201);

      // Try to login with slightly modified password
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: testUser.email,
          password: testUser.password + 'extra',
        })
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
});
