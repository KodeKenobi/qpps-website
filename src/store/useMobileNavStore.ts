import { create } from 'zustand';

interface MobileNavStore {
  open: boolean;
  setOpen: (index: boolean) => void;
}

const useMobileNavStore = create<MobileNavStore>((set) => ({
  open: false,
  setOpen: (index: boolean) => set({ open: index }),
}));

export default useMobileNavStore;