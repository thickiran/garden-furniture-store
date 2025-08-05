import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    muted: string;
    hero: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    heading: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const themes: Record<string, Theme> = {
  default: {
    name: 'Garden Fresh',
    colors: {
      primary: '#2D5A27',
      secondary: '#8B4513',
      accent: '#D4A574',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#2C3E50',
      textSecondary: '#6C757D',
      border: '#DEE2E6',
      muted: '#F8F9FA',
      hero: '#2D5A27',
    },
    fonts: {
      primary: 'Inter, sans-serif',
      secondary: 'Georgia, serif',
      heading: 'Playfair Display, serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '2rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      xl: '0 25px 50px rgba(0, 0, 0, 0.25)',
    },
  },
  sophisticated: {
    name: 'Sophisticated',
    colors: {
      primary: '#8B4513',
      secondary: '#D2B48C',
      accent: '#DEB887',
      background: '#FEFEFE',
      surface: '#F9F7F4',
      text: '#2F2F2F',
      textSecondary: '#6B6B6B',
      border: '#E8E4E0',
      muted: '#F5F2EE',
      hero: '#8B4513',
    },
    fonts: {
      primary: 'Helvetica Neue, sans-serif',
      secondary: 'Times New Roman, serif',
      heading: 'Playfair Display, serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2.5rem',
      xl: '5rem',
    },
    borderRadius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 2px rgba(139, 69, 19, 0.05)',
      md: '0 4px 8px rgba(139, 69, 19, 0.08)',
      lg: '0 8px 16px rgba(139, 69, 19, 0.1)',
      xl: '0 16px 32px rgba(139, 69, 19, 0.15)',
    },
  },
  modern: {
    name: 'Modern Minimal',
    colors: {
      primary: '#000000',
      secondary: '#404040',
      accent: '#FF6B35',
      background: '#FFFFFF',
      surface: '#FAFAFA',
      text: '#1A1A1A',
      textSecondary: '#707070',
      border: '#E0E0E0',
      muted: '#F5F5F5',
      hero: '#000000',
    },
    fonts: {
      primary: 'SF Pro Display, system-ui, sans-serif',
      secondary: 'SF Pro Text, system-ui, sans-serif',
      heading: 'SF Pro Display, system-ui, sans-serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
    },
    borderRadius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      xl: '1rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
      md: '0 4px 12px rgba(0, 0, 0, 0.1)',
      lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
      xl: '0 16px 48px rgba(0, 0, 0, 0.15)',
    },
  },
  dark: {
    name: 'Dark Elegance',
    colors: {
      primary: '#BB86FC',
      secondary: '#03DAC6',
      accent: '#CF6679',
      background: '#121212',
      surface: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      border: '#2C2C2C',
      muted: '#1A1A1A',
      hero: '#BB86FC',
    },
    fonts: {
      primary: 'Roboto, sans-serif',
      secondary: 'Roboto, sans-serif',
      heading: 'Roboto Slab, serif',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '2rem',
    },
    shadows: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
      xl: '0 25px 50px rgba(0, 0, 0, 0.7)',
    },
  },
};

interface ThemeContextType {
  currentTheme: Theme;
  themeName: string;
  setTheme: (themeName: string) => void;
  availableThemes: string[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>('default');
  
  const applyThemeToDOM = (theme: Theme) => {
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    root.style.setProperty('--font-primary', theme.fonts.primary);
    root.style.setProperty('--font-secondary', theme.fonts.secondary);
    root.style.setProperty('--font-heading', theme.fonts.heading);
  };
  
  // Apply theme on initial load
  React.useEffect(() => {
    applyThemeToDOM(themes[themeName]);
  }, [themeName]);
  
  const setTheme = (newThemeName: string) => {
    if (themes[newThemeName]) {
      setThemeName(newThemeName);
      applyThemeToDOM(themes[newThemeName]);
    }
  };

  const value: ThemeContextType = {
    currentTheme: themes[themeName],
    themeName,
    setTheme,
    availableThemes: Object.keys(themes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};