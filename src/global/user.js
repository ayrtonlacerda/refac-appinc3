import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useUser = create(devtools((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}), 'User'));
export { useUser };
