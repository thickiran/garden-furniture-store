import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, themeName, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 hover:shadow-md"
        style={{
          backgroundColor: currentTheme.colors.surface,
          borderColor: currentTheme.colors.border,
          color: currentTheme.colors.text,
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 py-2 w-48 rounded-lg border shadow-lg z-50"
          style={{
            backgroundColor: currentTheme.colors.surface,
            borderColor: currentTheme.colors.border,
            boxShadow: currentTheme.shadows.lg,
          }}
        >
          {availableThemes.map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeChange(theme)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                theme === themeName 
                  ? 'font-medium' 
                  : 'hover:bg-opacity-50'
              }`}
              style={{
                color: theme === themeName ? currentTheme.colors.primary : currentTheme.colors.text,
                backgroundColor: theme === themeName ? `${currentTheme.colors.primary}15` : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (theme !== themeName) {
                  e.currentTarget.style.backgroundColor = `${currentTheme.colors.primary}10`;
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== themeName) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full border"
                  style={{
                    backgroundColor: theme === 'default' ? '#2D5A27' :
                                   theme === 'sophisticated' ? '#8B4513' :
                                   theme === 'modern' ? '#000000' :
                                   theme === 'dark' ? '#BB86FC' : currentTheme.colors.primary,
                    borderColor: currentTheme.colors.border,
                  }}
                />
                <span>
                  {theme === 'default' ? 'Garden Fresh' :
                   theme === 'sophisticated' ? 'Sophisticated' :
                   theme === 'modern' ? 'Modern Minimal' :
                   theme === 'dark' ? 'Dark Elegance' : theme}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;