# Frontend Conventions

This document outlines the coding standards and conventions for the frontend part of the project.

## Naming Conventions

### Files and Directories
- Use **kebab-case** for all file and directory names.
- Example: `user-profile.tsx`, `auth-service.ts`, `components/shared-button/`.

### Variables and Constants
- Use **camelCase** for variable names, function names, and instances.
- Example: `const userName = 'John';`, `const fetchData = () => { ... };`.
- Use **PascalCase** for React components and types/interfaces.
- Example: `const UserProfile = () => { ... };`, `interface UserData { ... }`.

## Function Syntax
- Use **arrow function** syntax exclusively for all functions, including React components.
- Avoid the `function` keyword.

```typescript
// Correct
const MyComponent = () => {
  const handleClick = () => {
    console.log('Clicked');
  };
  return <div onClick={handleClick}>Hello</div>;
};

// Incorrect
function MyComponent() {
  function handleClick() {
    console.log('Clicked');
  }
  return <div onClick={handleClick}>Hello</div>;
}
```

## Testing
- All test files (unit and E2E) are organized inside the `apps/web` directory.
- Follow standard practices for co-location or a dedicated `__tests__` folder.
- **Unit tests**: Typically use `.test.tsx` or `.spec.tsx` suffixes alongside the file they test.
- **E2E tests**: Organized within the `web` directory following the framework's standard (e.g., in an `e2e` folder or with `.e2e.test.ts` suffixes).
