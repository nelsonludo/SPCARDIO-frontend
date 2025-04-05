---
# **SPCARDIO FRONTEND Platform**

SPCARDIO is a platform developed to help schools manage lecturers, students and courses. It offers a variety of functionalities such: view and store weekly time tables, track courses evolution progress, exchange amongs lecturers and students, and manage an educational articles library.
---

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Folder Structure](#folder-structure)
5. [Key Features](#key-features)
6. [State Management with Zustand](#state-management-with-zustand)
7. [Routing](#routing)
8. [Error Handling](#error-handling)
9. [Contributing](#contributing)
10. [Branch Naming Convention](#branch-naming-convention)

---

## **Project Overview**

SPCARDIO is built with **React and TypeScript**, using **Zustand** for state management, **TailwindCSS** for styling, and **React Router** for navigation.

The frontend interacts with a **REST API** and handles authentication using **JWT**. All routes are protected with **role-based access control**, except for login and signup.

The project enforces **ESLint** to maintain code quality, and contributors must follow a **branching strategy** for collaboration.

---

## **Technologies Used**

- **Frontend Framework**: React (TypeScript)
- **State Management**: Zustand
- **Styling**: TailwindCSS, Material UI
- **Routing**: React Router DOM
- **API Calls**: Axios
- **Forms & Validation**: React Hook Form, Zod
- **Authentication**: JWT
- **Notifications**: React Toastify
- **Cookies Management**: js-cookie
- **Linting**: ESLint

---

## **Setup Instructions**

To set up the project locally:

### **1. Clone the Repository**

```bash
git clone https://github.com/<this user's name>/spcardio.git
cd
```

### **2. Install Dependencies**

Ensure you have **Node.js (v22.13.0)** installed.

```bash
npm install
```

### **3. Setup Environment Variables**

Create a `.env` file in the root directory and add the required **two environment variables**, which include:

- **JWT Token (Split into two parts)**

### **4. Run the Development Server**

```bash
npm run dev
```

The application will be available at **`http://localhost:1574/`**.

---

## **Folder Structure**

The project follows a **default React setup** with an organized `src` folder:

```
src/
├── api/                # Custom hooks for API calls
├── hooks/              # Custom React hooks
├── pages/              # Route-based components (e.g., Login, Dashboard)
├── lib/                # Shared libraries
├── utils/              # Utility functions (e.g., API handlers, helpers)
├── types/              # TypeScript type definitions
│   ├── enums/          # Enums (e.g., API modules)
│   ├── entities/       # Project main entities TypeScript type definition
├── components/         # Reusable UI components
├── router/             # Route definitions
├── stores/             # Zustand stores
├── layouts/            # Layout components (one for each user type for access control)
└── ...
```

### **Key Folders:**

- **`api/`**: Contains all custom hooks for API interactions.
- **`components/`**: Contains reusable UI components.
- **`pages/`**: Defines the different pages/screens of the app.
- **`router/`**: Manages route definitions using React Router.
- **`stores/`**: Implements Zustand for state management.
- **`types/entities/`**: Typescript type definition.

---

## **Key Features**

### **Authentication**

- Supports login via **email/password (JWT)**.
- Uses Zustand to manage authentication state.
- Tokens are stored and refreshed automatically.

### **content Management**

- Users(administrators) can **create and view content(Unite d'enseignements, enseignants, etudiants, programmes, types d'activites pedagogiques, activites pedagogiques )**.

  - Importing Content from CSV for bulk creation of **content(Unite d'enseignements, enseignants, etudiants, programmes, types d'activites pedagogiques, activites pedagogiques )**:

  #### **CSV File content**

        Based on the content type the csv should be organised respecting these type definitions where each attribute should be a column header

  ````Programme {
          title
      }
       UE {
          titre
          code
      }
       AP {
          intitule
          date
          horaires
          lieu
      }
       TAP {
          code
          titre
      }
       Etudiant {
          nom
          niveau
          anneeEntree
          matricule
          email
          anneeDeSortie
          titreMemoire
      }
       Enseignant {
          nom
          grade
          pays
          departement
          matricule
          faculte
          universite
      }```

  ````

- Users can **view content(Unite d'enseignements based on programmes, enseignants, etudiants, programmation of courses(weekly timetables), articles library, courses completion follow up)**.

### **Role-Based Access Control**

- Routes are protected based on **user roles**.
- Only **authenticated users** can access certain features.

### **Error Handling & Notifications**

- Uses **React Toastify** for user-friendly notifications.
- Implements **Error Boundaries** for better error management.

---

## **Contributing**

All contributors must follow this **workflow**:

1. **Fork** the repository.
2. **Create a branch** for your feature/fix.
3. **Submit a Pull Request (PR)** for review.
4. **Wait for approval** before merging into `main`.

### **Branch Naming Convention**

| Type    | Naming Convention      | Example                    |
| ------- | ---------------------- | -------------------------- |
| Feature | `feature/<short-desc>` | `feature/login-form`       |
| Bugfix  | `bugfix/<short-desc>`  | `bugfix/fix-login-error`   |
| Hotfix  | `hotfix/<short-desc>`  | `hotfix/crash-on-login`    |
| Release | `release/<version>`    | `release/1.0.0`            |
| Chore   | `chore/<short-desc>`   | `chore/refactor-api-calls` |

---

## **Final Notes**

- Ensure **ESLint rules** are followed.
- Always test your features before submitting a **Pull Request**.
- If you have any questions, refer to this **README** before reaching out.

---
