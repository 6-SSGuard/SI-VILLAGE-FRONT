// import { create } from 'zustand';

// export interface productOptionDetailStoreType {
//   productCode: string;
//   quantity: number;
//   discountRate: number;
//   maxOrderCount: number;
//   price: number;
//   increseQuantity: () => void;
//   decreseQuantity: () => void;
//   setPrice: (price: number) => void;
// }

// export const useProductOptionDetailStore = create<productOptionDetailStoreType>(
//   (set) => ({
//     productCode: '',
//     quantity: 1,
//     discountRate: 0,
//     price: 0,
//     maxOrderCount: 0,
//     increseQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
//     decreseQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
//     setPrice: (price: number) => set({ price: price }),
//   })
// );
