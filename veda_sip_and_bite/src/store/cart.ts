import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartLine {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartLine[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: string) => number;
}

const clampQty = (quantity: number) => Math.max(1, Math.min(quantity, 10));

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((item) => item.productId === productId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === productId
                  ? { ...item, quantity: clampQty(item.quantity + quantity) }
                  : item
              )
            };
          }

          return {
            items: [...state.items, { productId, quantity: clampQty(quantity) }]
          };
        });
      },
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId)
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity: clampQty(quantity) } : item
          )
        })),
      clearCart: () => set({ items: [] }),
      getItemQuantity: (productId) =>
        get().items.find((item) => item.productId === productId)?.quantity ?? 0
    }),
    {
      name: 'veda-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      })
    }
  )
);

