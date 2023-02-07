## Table of Contents

- [Crypto Web](#crypto-web)
  - [Description](#description)
  - [A React app that fetches real-time data on the value of various cryptocurrencies. **Users can register, log in, or sign in with Google to access the app's features.**](#a-react-app-that-fetches-real-time-data-on-the-value-of-various-cryptocurrencies-users-can-register-log-in-or-sign-in-with-google-to-access-the-apps-features)
  - [Live site](#live-site)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Dependencies](#dependencies)
- [Features](#features)
    - [**Real-time Updates**](#real-time-updates)
      - [Functionallity:](#functionallity)
      - [User Experience:](#user-experience)
    - [**Interactive Interface**](#interactive-interface)
      - [Functionallity:](#functionallity-1)
      - [User Experience:](#user-experience-1)
    - [**User Registration and Login**](#user-registration-and-login)
      - [Functionallity:](#functionallity-2)
      - [User Experience:](#user-experience-2)
    - [**Protected Route Component**](#protected-route-component)
      - [Functionallity:](#functionallity-3)
      - [User Experience:](#user-experience-3)
- [Getting Started](#getting-started)
  - [Author](#author)
    - [Juliane Schawert](#juliane-schawert)

# Crypto Web

## Description

## A React app that fetches real-time data on the value of various cryptocurrencies. **Users can register, log in, or sign in with Google to access the app's features.**

## Live site

[Crypto-web](https://cryptocoin-web.netlify.app/)

<a href="https://cryptocoin-web.netlify.app/"><img src="https://i.imgur.com/6CHz3DG.png" alt="Purple-and-Pink-Gradient-Modern-Birthday-Card-1" border="0" style="border-radius: 20px"></a>

---

## Installation

```
npx install
```

## Environment Variables

In order for the application to function properly, developers will need to create a .env file in the root directory of the project and add the following variables:

.env

```
REACT_APP_FIREBASE_KEY: the key for your Firebase project
REACT_APP_FIREBASE_AUTHDOMAIN: the auth domain for your Firebase project
REACT_APP_FIREBASE_PROJECTID: the project ID for your Firebase project
REACT_APP_FIREBASE_STORAGEBUCKET: the storage bucket for your Firebase project
REACT_APP_FIREBASE_MESSAGINGSENDERID: the messaging sender ID for your Firebase project
REACT_APP_FIREBASE_APPID: the app ID for your Firebase project
```

## Dependencies

```
React-router-dom    // routing
Firebase            // auth
Bootstrap CSS       // CSS framework
Postcss             // Vendor prefixes
```

---

# Features

### **Real-time Updates**

#### Functionallity:

The app fetches data from a crypto API and displays the current value of popular cryptocurrencies in real-time.

#### User Experience:

Users are able to see up-to-date information on the value of their preferred cryptocurrencies, allowing them to stay informed and make informed decisions.

### **Interactive Interface**

#### Functionallity:

The app displays the value of each coin in charts and tables, allowing users to easily view and compare the values.

#### User Experience:

The interactive interface enhances the user experience by making it easy to view and compare the values of different cryptocurrencies.

### **User Registration and Login**

#### Functionallity:

Users can register for an account or log in to an existing account to access the app's features. They can also sign in with Google for a convenient and secure login experience.

#### User Experience:

By registering or logging in, users are able to access and save their preferred settings, such as their favorite cryptocurrencies, for a personalized experience.

### **Protected Route Component**

#### Functionallity:

The protected route component ensures secure access to sensitive information. Only logged-in users are able to view this information; if a user is not logged in, they will be redirected to the login page.

#### User Experience:

The protected route component enhances the user's experience by ensuring that sensitive information is only accessible by those who should have access to it, providing a secure and private experience.

---

# Getting Started

Clone the repository to your local machine: git clone https://github.com/YOUR-USERNAME/CryptoCoinTracker.git
Navigate to the project directory: cd CryptoCoinTracker
Install the dependencies: npm install
Start the development server: npm start
Open your browser to http://localhost:3000 to view the app.
Built With
React
Crypto API
Google Sign-In API

---

## Author

### [Juliane Schawert](https://github.com/julischa)
