# Project Folder Structure Guide

This document provides an overview of the `src` folder structure and guidelines for contributors.

## Folder Structure

### 1. `public/assets`

- **Purpose**: Contains static files such as images, icons, fonts, and other media files.
- **Best Practices**:
  - Organize subfolders by type (e.g., `images/`, `fonts/`).
  - Use consistent naming conventions (e.g., `kebab-case`).
  - Ensure assets are optimized for faster load times.

---

### 2. `components`

- **Purpose**: Houses reusable UI components not tied to a specific page.
- **Best Practices**:
  - Structure subfolders by component type (e.g., commons/, icons/ buttons/, modals/, cards/) for each current folders.
  - Each component should have its own folder:
    - `ComponentName.jsx`
    - `ComponentName.stories.jsx`
    - `index.js` (for simpler imports)
  - Name components consistently (e.g., `Button`, `Card`, `InputField`).
  - Keep components small and self-contained.
  - Avoid adding page-specific logic.
  - Implement all component state in stories.
  - Example:

    ```javascript
    import React from 'react';

    function Button({ label, onClick })(
      <button onClick={onClick}>{label}</button>
    );
    ```

---

### 4. `utils`

- **Purpose**: Contains utility functions or common logic reusable across the application.
- **Best Practices**:
  - Group related functions into files (e.g., `dateHelpers.js`, `stringHelpers.js`).
  - Avoid adding page-specific logic.
  - Example:
    ```javascript
    export const formatDate = date => new Date(date).toLocaleDateString();
    ```

---

### 5. `hooks`

- **Purpose**: Custom React hooks encapsulating reusable stateful logic.
- **Best Practices**:
  - Name hooks clearly (e.g., `useFetchData.js`, `useAuth.js`).
  - Ensure hooks follow React's rules (e.g., always start with "use").
  - Include comments explaining the purpose and usage of each hook.

---

### 6. `layouts`

- **Purpose**: Defines application-wide layouts (e.g., `MainLayout`, `AuthLayout`).
- **Best Practices**:
  - Store layout components in folders (e.g., `MainLayout/`, `AuthLayout/`).
  - Include shared structures like headers, footers, and sidebars.
  - Example:
    ```javascript
    const MainLayout = ({ children }) => (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
    ```

---

### 7. `pages`

- **Purpose**: Contains components representing individual routes.
- **Best Practices**:
  - Name folders/files based on the route (e.g., `HomePage`, `LoginPage`, `DashboardPage`).
  - Keep route-specific logic here and use reusable components from `components`.
  - Example structure:
    ```
    pages/
    ├── HomePage/
    │   ├── HomePage.jsx
    │   ├── index.js
    ```

---

### 8. `providers`

- **Purpose**: Contains context providers or higher-order components (HOCs) for managing global state.
- **Best Practices**:
  - Name providers clearly (e.g., `AuthProvider`, `ThemeProvider`).
  - Write each provider in its own file with encapsulated logic.
  - Example:
    ```javascript
    export const AuthContext = createContext();
    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      return (
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
      );
    };
    ```

---

### 9. `schemas`

- **Purpose**: Contains Zod schemas for form validation.
- **Best Practices**:
  - Use Zod for form validation.
  - Store schemas in files like `loginSchema.js`.
  - Example:

```javascript
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
```

---

### 10. `services`

- **Purpose**: Handles API calls and external data-fetching logic.
- **Best Practices**:
  - Group services by domain (e.g., `authService.js`, `userService.js`).
  - Use libraries like Axios or Fetch for HTTP requests.
  - Example:
    ```javascript
    import axios from 'axios';
    export const fetchUser = async id => {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    };
    ```

---

### 11. `stores`

- **Purpose**: Manages application state using the Zustand state management library.
- **Best Practices**:
  - Create separate files for different slices of the state (e.g., `authStore.js`, `cartStore.js`).
  - Keep the state logic modular and scoped to specific features or domains.
  - Example:

    ```javascript
    import create from 'zustand';

    const useAuthStore = create(set => ({
      user: null,
      setUser: user => set({ user }),
      clearUser: () => set({ user: null }),
    }));

    export default useAuthStore;
    ```

---

### 12. `styles`

- **Purpose**: Contains global styles, themes, or variables.
- **Best Practices**:
  - Organize styles by type (e.g., `global.css`, `theme.css`).
  - Write meaningful variable names.
  - Example:
    ```css
    /* global.css */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    ```

---

### 13. `constants`

- **Purpose**: Stores fixed values used throughout the application, such as enums, app-wide strings, routes, configuration values, or status codes.
- **Best Practices**:
  - Avoid hardcoding repeated values directly in components or logic.
  - Example:
    ```javascript
    export const ACCOUNT_TYPES = {
      CHECKING: 'checking',
      SAVINGS: 'savings',
      CREDIT: 'credit',
    };
    ```

---

## Other

- **Code Consistency**: Follow coding standards enforced by ESLint and Prettier.
- **Reusability**: Avoid duplication; reuse components, hooks, or utilities whenever possible.

## Issue

If some folder for best practices is missing please let us know with [open an issue](https://github.com/rubik-hub/bank-dashboard/issues).
