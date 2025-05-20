import { create } from 'zustand';

interface OpenBiographyStore {
  index: number;
  setIndex: (index: number) => void;
}

const useOpenLocationStore = create<OpenBiographyStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
}));

export default useOpenLocationStore;