# Backend Conventions

This document outlines the coding standards and conventions for the backend part of the project.

## Architecture: Clean Architecture
The backend follows **Clean Architecture** principles to ensure separation of concerns, testability, and independence from external frameworks.

### Layered Structure
1.  **Entities (Domain)**: Contains business logic and domain models.
2.  **Usecases**: Contains application-specific business rules.
3.  **Repository**: Interface definitions for data storage.
4.  **Delivery/Handlers**: Entry points for the application (e.g., HTTP, gRPC).

## Go Standard
The project adheres to the **Go Standard Project Layout** and best practices.

### Project Layout
- `/cmd`: Entry point for the application.
- `/internal`: Code private to this project.
- `/pkg`: Code that can be reused by other projects.
- `/api`: API contracts (OpenAPI, Proto).

### Code Style
- **Naming**: 
  - Use `camelCase` for private variables.
  - Use `PascalCase` for exported variables/functions.
  - Package names should be short, lowercase, and single words.
- **Error Handling**: Check errors immediately and return them. Wrap errors where context is needed.
- **Interfaces**: Define interfaces where they are used (consumer side), not where they are implemented.
