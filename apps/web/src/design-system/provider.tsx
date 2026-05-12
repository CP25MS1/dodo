"use client";
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createAppTheme from './theme';

export interface DesignSystemProviderProps {
  children: React.ReactNode;
  mode?: 'light' | 'dark';
}

export const DesignSystemProvider = ({ children, mode = 'light' }: DesignSystemProviderProps) => {
  const theme = createAppTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
