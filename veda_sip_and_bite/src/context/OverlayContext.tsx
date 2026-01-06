import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface OverlayContextValue {
  isCartOpen: boolean;
  isSearchOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
}

const OverlayContext = createContext<OverlayContextValue | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const value = useMemo(
    () => ({
      isCartOpen,
      isSearchOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false)
    }),
    [isCartOpen, isSearchOpen]
  );

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>;
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within OverlayProvider');
  }
  return context;
};

