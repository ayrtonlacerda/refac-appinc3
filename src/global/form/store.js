import create from 'zustand';
import produce from 'immer';
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    mock: null, // mock do formulario pra consulta
    form: null,
    keysOfForm: {}, // chaves onde salvo os valores alterados no form
    currentExam: null,
    setValueInForm: (currentExam, key, value) => set(produce((draftState) => {
      draftState.form[currentExam][key] = value;
    }), '', 'SET_VALUE_IN_FORM'),
    set: (value) => set(
      (prevStore) => (prevStore.form
        ? ({ ...prevStore, form: { ...prevStore.form, ...value } })
        : ({ form: value })),
      '', 'SET',
    ),
    reset: () => set({
      form: null, mock: null, keysOfForm: {}, currentExam: null,
    }, '', 'RESET'),
    setForm: (form) => set({ form }, '', 'SET_FORM'),
    setKeysOfForm: (keysOfForm) => set({ keysOfForm }, '', 'SET_KEY_FORM'),
    setCurrentExam: (currentExam) => set({ currentExam }, '', 'SET_CURRENT_EXAM'),
    setMock: (mock) => set((prevStore) => ({ ...prevStore, mock }), '', 'SET_MOCK'),
  }), 'form'),
);

export default useStore;
