package usecase

import (
	"testing"
)

func TestSayHello(t *testing.T) {
	uc := NewExampleUsecase()

	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{
			name:     "Empty name",
			input:    "",
			expected: "Hello, World!",
		},
		{
			name:     "With name",
			input:    "Antigravity",
			expected: "Hello, Antigravity!",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := uc.SayHello(tt.input)
			if result != tt.expected {
				t.Errorf("expected %s, got %s", tt.expected, result)
			}
		})
	}
}
