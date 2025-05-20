import { create } from 'zustand';

interface OpenBiographyStore {
  index: number | null; // null represents that no biography is open
  setIndex: (index: number) => void;
  closeBiography: () => void;
}

const useOpenBiographyStore = create<OpenBiographyStore>((set) => ({
  index: null,
  setIndex: (index: number) => set({ index }),
  closeBiography: () => set({ index: null }),
}));

export default useOpenBiographyStore;