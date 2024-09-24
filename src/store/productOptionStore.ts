import {
  colorType,
  productOptionDetailType,
  sizeType,
} from '@/types/ResponseTypes';
import { create } from 'zustand';

interface selectedType {
  colorId: string | null;
  sizeId: string | null;
}

export interface productOptionStoreType {
  isColor: boolean;
  isSize: boolean;
  colors: colorType[];
  sizes: sizeType[];
  productOptionDetail: productOptionDetailType[];
  isView: boolean;
  selected: {
    colorId: string | null;
    sizeId: string | null;
  };
  totalPrice: number;
  setIsColorOptions: (isColor: boolean) => void;
  setIsSizeOptions: (isSize: boolean) => void;
  setColorList: (colors: colorType[]) => void;
  setSizeList: (sizes: sizeType[]) => void;
  handleSelector: (selected: selectedType) => void;
  handleView: (view: boolean) => void;
  setProductOptionDetail: (data: productOptionDetailType[]) => void;
  setTotalPrice: (price: number) => void;
}

// zustand 스토어 생성
export const useProductOptionStore = create<productOptionStoreType>((set) => ({
  isColor: false,
  isSize: false,
  colors: [],
  sizes: [],
  productOptionDetail: [],
  isView: false,
  selected: {
    colorId: null,
    sizeId: null,
  },
  totalPrice: 0,
  setIsColorOptions: (isColor) => set({ isColor: isColor }),
  setIsSizeOptions: (isSize) => set({ isSize: isSize }),
  setColorList: (colors) => set({ colors: colors }),
  setSizeList: (sizes) => set({ sizes: sizes }),
  handleSelector: (selected) => set({ selected: selected }),
  handleView: (isView) => set({ isView: isView }),
  setProductOptionDetail: (productOptionDetail) =>
    set({ productOptionDetail: productOptionDetail }),
  setTotalPrice: (totalPrice) => set({ totalPrice: totalPrice }),
}));
