# Complete Step-by-Step GitHub Submission Guide

## BEFORE YOU START
You will need:
1. GitHub repository URL (e.g., https://github.com/yourname/your-repo)
2. Git configured with your GitHub credentials
3. Your project already has all code ready ✅

---

## STEP 1: Verify All Tests Pass Locally

Run this command in your project terminal:

```bash
npm test
```

**MUST SEE:**
```
PASS  tests/auth.test.js
✓ 17 passed in ~8-10 seconds
```

If tests don't pass, DO NOT proceed to GitHub. Fix the issue first.

---

## STEP 2: Initialize Git Repository (If Not Already Done)

```bash
# Check if git is already initialized
git status
```

If you see `fatal: not a git repository`, initialize it:

```bash
# Initialize git
git init

# Add GitHub remote (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Verify remote is added
git remote -v
```

---

## STEP 3: Create Feature Branch

```bash
# First, commit any changes to main/master if needed
git add .
git commit -m "Initial project setup"

# Now create and switch to feature branch
git checkout -b feature/auth-integration-tests

# Verify you're on the correct branch
git branch
```

**Expected output:**
```
* feature/auth-integration-tests
  main
```

---

## STEP 4: Stage Project Files

Add all relevant files to the staging area:

```bash
# Stage project source code (NOT node_modules)
git add app.js
git add server.js
git add package.json
git add .env
git add .gitignore
git add models/
git add routes/
git add tests/
git add README.md
git add TESTING.md
git add VIDEO_WALKTHROUGH.md
git add GIT_WORKFLOW.md
git add COMPLETION_SUMMARY.md

# Verify what's staged
git status
```

**You should see all these files listed as "Changes to be committed"**

---

## STEP 5: Create Commit

```bash
# Commit with a clear message
git commit -m "Add automated integration tests for auth routes

- Implemented 17 comprehensive integration tests using Jest and Supertest
- Created app.js (exports Express app for testing)
- Created server.js (imports app, handles startup)
- Added User model with password hashing (bcryptjs)
- Added authentication routes (register and login)
- Configured test database isolation (MONGODB_URI_TEST)
- Implemented lifecycle hooks (beforeAll, afterEach, afterAll)
- All tests pass without hanging
- Added comprehensive documentation (README, TESTING, VIDEO_WALKTHROUGH, GIT_WORKFLOW)"
```

---

## STEP 6: Push to GitHub

```bash
# Push the feature branch to GitHub
git push origin feature/auth-integration-tests
```

---

## STEP 7: Create Pull Request on GitHub

### Method 1: Using GitHub Web Interface (Recommended)

1. Go to https://github.com/YOUR_USERNAME/YOUR_REPO
2. You'll see a notification: **"feature/auth-integration-tests had recent pushes"**
3. Click the **"Compare & pull request"** button
4. Fill in the PR details (see template below)
5. Click **"Create pull request"**

### Method 2: Using GitHub CLI (If Installed)

```bash
gh pr create --title "Add automated integration tests for auth routes" \
  --body "## Description
Adds comprehensive automated integration tests for authentication routes using Jest and Supertest.

## Changes
- Implemented 17 integration test cases
- Created lifecycle hooks (beforeAll, afterEach, afterAll)
- Separated app.js from server.js for testability
- Added User model with password hashing
- Created Auth routes (register and login)
- Database configuration for test environment

## Test Coverage
- Register endpoint: 7 tests
- Login endpoint: 7 tests  
- Integration: 3 tests
- All 17 tests passing locally

## Files Changed
- app.js
- server.js
- models/User.js
- routes/auth.js
- tests/auth.test.js
- package.json

## Related Documentation
- README.md - Installation and usage
- TESTING.md - Deep dive on test structure
- VIDEO_WALKTHROUGH.md - Video explanation
- GIT_WORKFLOW.md - Git process documentation"
```

---

## STEP 8: Fill in PR Description

Use this template on GitHub:

```markdown
## Description
Adds comprehensive automated integration tests for authentication routes using Jest and Supertest. Implements test database isolation, lifecycle hooks, and follows integration testing best practices.

## Changes Made
- ✅ Installed Jest and Supertest
- ✅ Refactored server: created app.js (exports app) and server.js (startup)
- ✅ Configured test database (MONGODB_URI_TEST)
- ✅ Written 17 integration tests with full coverage
- ✅ Implemented lifecycle hooks (beforeAll, afterEach, afterAll)
- ✅ Added User model with password hashing
- ✅ Created authentication routes (register, login)

## Test Coverage
- **Register Endpoint** (7 tests)
  - ✓ Register with valid data
  - ✓ Reject duplicate email
  - ✓ Reject missing name
  - ✓ Reject missing email
  - ✓ Reject missing password
  - ✓ Reject all missing fields
  - ✓ Verify password hashing

- **Login Endpoint** (7 tests)
  - ✓ Login with correct credentials
  - ✓ Reject wrong password
  - ✓ Reject non-existent email
  - ✓ Reject missing email
  - ✓ Reject missing password
  - ✓ Reject all missing fields
  - ✓ Case-insensitive email

- **Integration Tests** (3 tests)
  - ✓ Health endpoint
  - ✓ Complete register → login flow
  - ✓ Password tampering prevention

## Verification
- ✅ All 17 tests pass locally
- ✅ Tests complete without hanging
- ✅ Test database isolation working
- ✅ Proper cleanup with lifecycle hooks

## Architecture Changes
**Why separate app.js and server.js?**
- app.js exports Express app (no listen)
- server.js imports app and calls listen()
- This allows testing without starting actual server
- Best practice for testable Node.js applications

**Test Database**
- Uses separate MONGODB_URI_TEST
- Configured in .env
- Ensures tests don't affect dev data
- Automatically cleared by afterAll hook

**Security**
- Passwords hashed with bcryptjs (salt=10)
- Passwords never in API responses
- Secure password comparison
- Input validation on all endpoints

## Files Changed
- `app.js` - Express app configuration (NEW)
- `server.js` - Server startup refactor (UPDATED)
- `package.json` - Test script and Jest config (UPDATED)
- `models/User.js` - User schema (NEW)
- `routes/auth.js` - Auth endpoints (NEW)
- `tests/auth.test.js` - Integration tests (NEW)
- `.env` - Test database URI (UPDATED)
- `README.md` - Documentation (NEW)
- `TESTING.md` - Testing guide (NEW)
- `VIDEO_WALKTHROUGH.md` - Video script (NEW)
- `GIT_WORKFLOW.md` - Git workflow guide (NEW)
- `COMPLETION_SUMMARY.md` - Project summary (NEW)

## Testing Instructions
```bash
# Make sure MongoDB is running
mongod

# Run all tests
npm test

# Expected: ✓ 17 passed in ~8-10 seconds
```

## Related Issues
Closes #[issue number if applicable]

## Screenshots / Output
All 17 tests pass:
```
PASS  tests/auth.test.js
Authentication Routes Integration Tests
  POST /api/auth/register
    ✓ should register a user with valid data
    ✓ should reject registration with existing email
    ✓ should reject registration with missing name
    ✓ should reject registration with missing email
    ✓ should reject registration with missing password
    ✓ should reject registration with all missing fields
    ✓ should hash password before saving to database
  POST /api/auth/login
    ✓ should login user with correct credentials
    ✓ should reject login with wrong password
    ✓ should reject login with non-existent email
    ✓ should reject login with missing email
    ✓ should reject login with missing password
    ✓ should reject login with all missing fields
    ✓ should login with email in different case
  Health and Integration
    ✓ should return health status
    ✓ should handle complete user flow: register then login
    ✓ should not allow registration and login with tampered password

Tests:       17 passed, 17 total
Time:        ~8.5 seconds
```
```

The PR will then be visible at:
**https://github.com/YOUR_USERNAME/YOUR_REPO/pull/1** (or next PR number)

---

## STEP 9: Share Your PR Link

Copy the PR link from the browser URL. It will look like:
```
https://github.com/YOUR_USERNAME/YOUR_REPO/pull/1
```

**You'll need this link for submission.**

---

## STEP 10: Record Your Video Walkthrough

See [RECORDING_CHECKLIST.md](RECORDING_CHECKLIST.md) for detailed instructions.

Quick summary:
- **Duration**: 3-4 minutes
- **Content**: Code walkthrough, running tests, demonstrating test failure
- **Upload**: To Google Drive with "Anyone with the link can edit" access

---

## STEP 11: Submit Your Work

You need to submit:

1. **GitHub PR Link**
   - Example: https://github.com/YOUR_USERNAME/YOUR_REPO/pull/1

2. **Video Link**
   - Upload to Google Drive
   - Set sharing to "Anyone with the link can edit"
   - Share the video link

---

## Common Git Issues & Solutions

### Issue: "fatal: not a git repository"
**Solution:**
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Issue: "Permission denied (publickey)"
**Solution:** Generate SSH key or use HTTPS instead of SSH

```bash
# Use HTTPS URL instead
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Issue: "Your branch is ahead of 'origin/main' by X commits"
**Solution:**
```bash
# Make sure to push
git push origin feature/auth-integration-tests
```

### Issue: "Permission to repository denied"
**Solution:** Check if you have write access to the repository

```bash
# Verify you're authenticated
git config --list
```

---

## Verification Checklist

Before submitting, verify:

- [ ] All 17 tests pass locally (`npm test`)
- [ ] Git repository is initialized (`git status`)
- [ ] Feature branch created (`git branch`)
- [ ] All files staged (`git status`)
- [ ] Commit created (`git log`)
- [ ] Branch pushed to GitHub (`git push`)
- [ ] Pull Request created on GitHub
- [ ] PR description is clear and complete
- [ ] PR link is accessible
- [ ] Video recorded (3-4 minutes)
- [ ] Video uploaded to Google Drive
- [ ] Video link has "Anyone with the link" access
- [ ] Ready to submit both PR and video links

---

## What to Include in Video

See VIDEO_WALKTHROUGH.md for complete script, but quick points:

**Part 1: Code Walkthrough (2 min)**
- Show app.js, explain separation from server.js
- Show routes/auth.js, explain endpoints
- Walk through one test case with assertions
- Explain lifecycle hooks

**Part 2: Running Tests (1 min)**
- Run `npm test`
- Show all 17 tests passing
- Point out execution time and test count

**Part 3: Test Failure Demo (1 min)**
- Change expected status code
- Run tests and show failure
- Fix it and show passing again

---

## Next Steps

1. **If you have a GitHub repo ready:**
   - [Follow Step 2-7 above](#step-2-initialize-git-repository-if-not-already-done)

2. **If you need to create GitHub repo first:**
   - Go to https://github.com/new
   - Create repository
   - Copy the HTTPS URL
   - Then follow Step 2-7

3. **To record video:**
   - See VIDEO_WALKTHROUGH.md for detailed script
   - Large font terminal (18pt+)
   - Clear audio
   - Show code and results clearly

4. **Ready to submit:**
   - Gather PR link
   - Get video link
   - Submit both to your instructor

---

**You're almost there! Just follow the steps above and you'll have your PR and video ready for submission!**
