# Authentication and Authorization

This folder contains backend programs that manage user authentication and authorization functionalities. The focus is on ensuring secure and efficient user interactions with the application.

---

## Programs Overview

### 1. `login.js`
Handles user login functionality:
- **Features:**
  - Validates email and password inputs using `express-validator`.
  - Checks for user existence and verifies password using `bcrypt`.
  - Generates a secure JWT token for authenticated sessions.
  - Handles errors gracefully with user-friendly messages.
  - Redirects users to their intended destination or the homepage upon successful login.

### 2. `register.js`
Manages user registration:
- **Features:**
  - Validates inputs, including email, phone number, and password strength.
  - Ensures passwords match and meet security criteria.
  - Prevents duplicate registrations by checking if the email already exists.
  - Hashes passwords securely using `bcrypt`.
  - Stores user data, including name, security questions, and optional phone number.
  - Issues a JWT token for automatic login after successful registration.

### 3. `change-password.js`
Enables users to change their passwords:
- **Features:**
  - Validates new password strength and complexity.
  - Ensures the user is verified via a JWT token (`verifiedToken`).
  - Updates the user's password securely in the database after hashing.
  - Redirects users to the login page upon successful password change.
  - Handles errors, such as invalid tokens or save failures.

---

## Key Features
1. **Input Validation:**  
   All programs use `express-validator` to enforce input standards like email format and password complexity.

2. **Error Handling:**  
   Programs return meaningful error messages to guide users through corrections.

3. **Password Security:**  
   Passwords are hashed using `bcrypt` before storage, ensuring security.

4. **Session Management:**  
   JWT tokens are used to maintain secure sessions, with tokens stored in cookies.

5. **Security Measures:**  
   Middleware (`checkAuth`) ensures routes are protected and accessible only to authorized users.

---

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install express express-validator bcrypt jsonwebtoken cookie-parser

2. **Environment Variables: Create a .env file and define the following:**
  ```bash
  JWT_SECRET=your_secret_key
  ```

3. Database Model: Ensure a User model exists with fields for email, password, security questions, etc.

4. Routes:
  - Login: `/auth/login`
  - Register: `/auth/register`
  - Change Password: `/auth/change-password`
  - Middleware: Use checkAuth for route protection and session validation.

## Usage
  - **Login:** Authenticates users and provides secure access to their accounts.
  - **Register:** Allows new users to create accounts with strong password requirements.
  - **Change Password:** Enables verified users to reset their passwords securely.
