![App Example](./assets/example.gif)

---

# SNK Test App Improvements

## This document outlines the improvements made to the SNK Test App, the rationale behind each change, and the approaches used to enhance the application.

# Wondering why the library is used! 🧐

## react-native-reanimated-carousel

It provides smooth animations for carousels, which are common UI components.
It is optimized for performance, especially on mobile devices.
It integrates well with React Native's ecosystem and react-native-reanimated.

## expo-linear-gradient

It allows you to create visually appealing gradient backgrounds or effects.
It is lightweight and easy to use with React Native components.
It enhances the overall design and user experience by adding depth and style.

## zustand

Its not used but would be my first choice due to less time to configure, lightweight, high performance and eas

## Improvements and Rationale 🤨

### 1. Custom Icons

- **Why?** Custom icons improve the visual appeal and branding of the application.
- **Approach:** Use a custom icon library or create SVG-based icons to ensure consistency and scalability.

### 2. Correct Fonts

- **Why?** Consistent typography enhances readability and maintains a professional look.
- **Approach:** Use web-safe fonts or import fonts from a reliable source (e.g., Google Fonts) and ensure proper fallback mechanisms.
  (was not able to find the font had to find a workaround)

### 3. Consistent Spacing Website (spacenk.com)

- **Why?** Inconsistent spacing affects the overall design and user experience.
- **Approach:** Define a clear spacing system (e.g., multiples of 8px) and apply it consistently across the application.

### 4. Header Transition for Accessibility (spacenk.com)

- **Why?** Smooth transitions improve accessibility and provide a better user experience.
- **Approach:** Since using header from router I didnt feel the need to add animation but can be worked on.

### 5. [BUG WEBSITE] Mobile View Search Bar Bug on website(spacenk.com)

- **Issue:** In mobile view, after opening and closing the search dropdown, the page becomes unresponsive to scrolling.
- **Fix:** Ensure proper cleanup of event listeners and state when the dropdown is closed.

---

## Development Enhancements 😎

### 1. Dynamic Homescreen [DATA DRIVEN APPROACH]

- **Why?** A data-driven approach allows for flexibility and easier updates.
- **Approach:** Use APIs or a CMS to control the content displayed on the homescreen, ensuring it remains developer-friendly.

### 3. Data Validation with Zod

- **Why?** Validating data from APIs or CMS ensures reliability and prevents runtime errors.
- **Approach:** Use the Zod library for schema-based validation.

### 4. Loading State with Skeleton

- **Why?** A skeleton loading state improves user experience during data fetching.
- **Approach:** Implement skeleton components to indicate loading progress.

### 5. Shopify Flash List

- **Why?** Flash List offers better performance than Flat List for large datasets.
- **Approach:** Replace Flat List with Shopify Flash List for improved rendering.

### 6. ESLint for Developer Experience

- **Why?** ESLint catches issues early and enforces coding standards.
- **Approach:** Add ESLint to the project and configure it for the team's coding style.

### 7. Accessibility (A11y)

- **Why?** Reach to Users with disablilities
- **Approach:** Add clear role, labels and description for screen reader to read it correctly and users undertand without any confusion

---

## [State Management]: Zustand vs. Context

- **Why Zustand?**
  - **Better Performance:** React Context causes unnecessary re-renders, while Zustand updates only the components that use the state.
  - **Ease of Use:** No need to wrap components in `Context.Provider`.
  - **Scalability:** Works well for managing additional UI states like themes or user preferences.

---

## Testing and Type Checking

### 1. Strict Type Checking

- **Why?** Strict type checking reduces bugs and improves code quality.
- **Approach:** Enable stricter TypeScript settings for better type safety.

---

## General Guidelines

- **Avoid Over-Engineering:** Keep the data-driven development approach simple and maintainable.
- **Consistency:** Follow clear design and development rules to ensure a cohesive application.

- **SOLID Principle:** Follow the rules of SOLID principle to have a consistent and clean development

---

## Conclusion

These improvements aim to enhance the performance, accessibility, and maintainability of the SNK Test App while ensuring a better developer and user experience.

# How to run the SNK APP? 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
y to use
\n# Trigger build
