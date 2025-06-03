import { create } from 'zustand';

interface IsVisibleStore {
  isVisible: boolean;
  setIsVisible: (index: boolean) => void;
}

const useIsVisibleStore = create<IsVisibleStore>((set) => ({
  isVisible: true,
  setIsVisible: (index: boolean) => set({ isVisible: index }),
}));

export default useIsVisibleStore;