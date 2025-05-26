import { create } from 'zustand';

export type Nav = {
  label: string;
  url: string;
  external?: boolean;
};


const navs: Nav[] = [
  {
    label: "About",
    url: "about",
  },
  {
    label: "Approach",
    url: "approach",
  },
  {
    label: "Leadership",
    url: "leadership",
  },
  {
    label: "Contact",
    url: "contact",
  },
];


interface PositionState {
  position: string | null;
  navs: Nav[];
  setPosition: (position: string) => void;
}

const usePositionStore = create<PositionState>((set) => ({
  position: null,
  navs,
  setPosition: (position: string) => set({ position }),
}));

export default usePositionStore;