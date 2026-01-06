import { ReactNode } from 'react';
import { useOverlay } from '../../context/OverlayContext';
import { CartDrawer } from '../commerce/CartDrawer';
import { SearchModal } from '../commerce/SearchModal';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { PromoBanner } from './PromoBanner';
import { TailwindSanityTest } from '../common/TailwindSanityTest';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isCartOpen, closeCart, isSearchOpen, closeSearch } = useOverlay();

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <PromoBanner />
      <Navbar />
      {children}
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      {import.meta.env.DEV && <TailwindSanityTest />}
    </div>
  );
};

