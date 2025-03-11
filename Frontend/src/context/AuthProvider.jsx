import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);

// AuthProvider is used to secure the user login and logout and signup logic which makes the authentication morer secure by many logic 
//An AuthProvider (Authentication Provider) is a service or system that manages user authentication for a website or application. It handles tasks like user login, registration, and session management, ensuring secure access to resources.

// 🔹 How AuthProviders Work?
// User Requests Login
// The user enters credentials (email/password) or uses social login (Google, Facebook, etc.).
// AuthProvider Verifies Credentials
// Checks if the credentials are valid (password matches, account exists).
// Generates & Sends Authentication Token
// If successful, it returns a token (JWT, OAuth token, etc.), which the frontend stores (e.g., in cookies or local storage).
// Access Control
// The token is used for future requests to verify the user’s identity without logging in again.

//  Common AuthProviders
// Social Logins (OAuth-based)

// Google, Facebook, GitHub, Twitter, LinkedIn
// Users can log in without creating new passwords.
// Custom Authentication

// Using JWT (JSON Web Token), Session-based auth, Firebase Auth
// Typically for apps that want full control over authentication.
// Third-Party Identity Providers

// Auth0, Okta, Firebase, AWS Cognito
// Ready-to-use authentication services with OAuth, SSO, and multi-factor authentication (MFA).