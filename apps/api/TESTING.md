# Backend Testing Guide

This guide outlines the testing strategy for the Go backend, following Clean Architecture principles.

## 1. Testing Strategy

We prioritize unit tests for **Usecases** (business logic) and **Domain** logic. External dependencies like databases or APIs are mocked.

### Naming Convention
- Test files must end with `_test.go`.
- They should reside in the same package as the code being tested.
- Example: `auth_usecase.go` -> `auth_usecase_test.go`.

---

## 2. Writing Unit Tests

We use **Table-Driven Tests** for clean and maintainable test suites.

### Example: Usecase Test
```go
package usecase

import (
	"testing"
)

func TestAuthUsecase_Login(t *testing.T) {
	// Setup mocks/dependencies
	uc := NewAuthUsecase()

	// Define test cases
	tests := []struct {
		name     string
		email    string
		expected bool
		wantErr  bool
	}{
		{"Valid login", "test@example.com", true, false},
		{"Invalid email", "bad-email", false, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := uc.Login(tt.email)
			
			if (err != nil) != tt.wantErr {
				t.Errorf("Login() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if result != tt.expected {
				t.Errorf("Login() got = %v, want %v", result, tt.expected)
			}
		})
	}
}
```

---

## 3. Mocking Interfaces

Since we use Clean Architecture, define interfaces for Repositories and inject them into Usecases. Use these interfaces to create manual mocks or use a generator like `mockery`.

```go
// Repository Interface
type UserRepository interface {
    GetByEmail(email string) (*domain.User, error)
}

// Mock implementation in test file
type mockUserRepo struct {
    mockGetByEmail func(email string) (*domain.User, error)
}

func (m *mockUserRepo) GetByEmail(email string) (*domain.User, error) {
    return m.mockGetByEmail(email)
}
```

---

## 4. Running Tests Locally

| Command | Description |
|---------|-------------|
| `go test ./...` | Run all tests in the project. |
| `go test -v ./...` | Run all tests with verbose output. |
| `go test -cover ./...` | Run tests and show coverage percentage. |
| `go test -coverprofile=coverage.out ./...` | Generate a coverage profile file. |
| `go tool cover -html=coverage.out` | View coverage report in a web browser. |

## 5. Best Practices
- **Isolation**: Each test should be independent. Use `t.Cleanup()` if needed.
- **Meaningful Names**: Test function names should describe the scenario (e.g., `TestCalculateTotal_WithDiscount`).
- **Check Errors**: Always verify that expected errors are returned and unexpected errors are handled.
- **Coverage**: Aim for high coverage in Usecases (80%+).
