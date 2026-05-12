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
## Testing
- **Unit tests**: Co-locate unit test files next to the files they test (same directory). Use `.test.tsx` or `.spec.tsx` suffixes. Prefer co-location over a central `__tests__` folder.

- **E2E tests**: Keep all end-to-end tests under an `e2e/` directory at the project root. Recommended structure:

```
├── e2e/
│   ├── fixtures/           # Static data (JSON, images) for test scenarios
│   ├── helpers/            # Reusable utility functions
│   ├── specs/              # Actual test files (.spec.ts or .test.ts)
│   │   ├── auth.spec.ts
│   │   └── checkout.spec.ts
│   └── support/            # Custom commands, global setup/teardown
├── playwright.config.ts    # Framework configuration file
└── .env                    # Environment-specific variables (URLs, credentials)
```
