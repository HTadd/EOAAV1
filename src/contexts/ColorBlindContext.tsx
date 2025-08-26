import React, { createContext, useContext, useState, useEffect } from 'react';

interface ColorBlindContextType {
  isColorBlindMode: boolean;
  toggleColorBlindMode: () => void;
}

const ColorBlindContext = createContext<ColorBlindContextType | undefined>(undefined);

export const useColorBlind = () => {
  const context = useContext(ColorBlindContext);
  if (!context) {
    throw new Error('useColorBlind must be used within a ColorBlindProvider');
  }
  return context;
};

export const ColorBlindProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('colorBlindMode');
    if (saved) {
      setIsColorBlindMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('colorBlindMode', JSON.stringify(isColorBlindMode));
    if (isColorBlindMode) {
      document.documentElement.classList.add('color-blind-mode');
    } else {
      document.documentElement.classList.remove('color-blind-mode');
    }
  }, [isColorBlindMode]);

  const toggleColorBlindMode = () => {
    setIsColorBlindMode(prev => !prev);
  };

  return (
    <ColorBlindContext.Provider value={{ isColorBlindMode, toggleColorBlindMode }}>
      {children}
    </ColorBlindContext.Provider>
  );
};