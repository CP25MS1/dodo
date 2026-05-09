import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const heading = screen.getByText(/To get started, edit the page.tsx file/i);
    expect(heading).toBeDefined();
  });

  it('renders the documentation link', () => {
    render(<Home />);
    const link = screen.getByText(/Documentation/i);
    expect(link).toBeDefined();
  });
});
