import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { OverlayProvider } from './context/OverlayContext';
import { ToastProvider } from './components/ui/Toast';
import { ScrollToTop } from './components/common/ScrollToTop';
import { PageTransition } from './components/common/PageTransition';
import { PageLoader } from './components/common/PageLoader';
import { SkipToContent } from './components/common/SkipToContent';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Shop = lazy(() => import('./pages/Shop').then((module) => ({ default: module.Shop })));
const ProductDetail = lazy(() =>
  import('./pages/ProductDetail').then((module) => ({ default: module.ProductDetail }))
);
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Blog = lazy(() => import('./pages/Blog').then((module) => ({ default: module.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((module) => ({ default: module.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const Cart = lazy(() => import('./pages/Cart').then((module) => ({ default: module.Cart })));
const Checkout = lazy(() => import('./pages/Checkout').then((module) => ({ default: module.Checkout })));
const Terms = lazy(() => import('./pages/Terms').then((module) => ({ default: module.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then((module) => ({ default: module.Privacy })));
const Shipping = lazy(() => import('./pages/Shipping').then((module) => ({ default: module.Shipping })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));

const App = () => {
  const location = useLocation();

  return (
    <OverlayProvider>
      <ToastProvider>
        <SkipToContent />
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait" initial={false}>
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  }
                />
                <Route
                  path="/shop"
                  element={
                    <PageTransition>
                      <Shop />
                    </PageTransition>
                  }
                />
                <Route
                  path="/product/:productId"
                  element={
                    <PageTransition>
                      <ProductDetail />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <PageTransition>
                      <Blog />
                    </PageTransition>
                  }
                />
                <Route
                  path="/blog/:slug"
                  element={
                    <PageTransition>
                      <BlogPost />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PageTransition>
                      <Cart />
                    </PageTransition>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <PageTransition>
                      <Checkout />
                    </PageTransition>
                  }
                />
                <Route
                  path="/legal/terms"
                  element={
                    <PageTransition>
                      <Terms />
                    </PageTransition>
                  }
                />
                <Route
                  path="/legal/privacy"
                  element={
                    <PageTransition>
                      <Privacy />
                    </PageTransition>
                  }
                />
                <Route
                  path="/legal/shipping"
                  element={
                    <PageTransition>
                      <Shipping />
                    </PageTransition>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PageTransition>
                      <NotFound />
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </Layout>
      </ToastProvider>
    </OverlayProvider>
  );
};

export default App;

