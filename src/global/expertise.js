import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useExpertiseStore = create(devtools((set) => ({
  currentExpertise: null,
  setCurrentExpertise: (currentExpertise) => set({ currentExpertise }),
}), 'Expertise'));
