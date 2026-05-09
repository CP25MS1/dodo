package usecase

// ExampleUsecase defines the business logic for an example feature.
type ExampleUsecase interface {
	SayHello(name string) string
}

type exampleUsecase struct{}

// NewExampleUsecase creates a new instance of ExampleUsecase.
func NewExampleUsecase() ExampleUsecase {
	return &exampleUsecase{}
}

func (u *exampleUsecase) SayHello(name string) string {
	if name == "" {
		return "Hello, World!"
	}
	return "Hello, " + name + "!"
}
