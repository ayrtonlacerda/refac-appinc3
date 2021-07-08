import { useCallback } from 'react';
import produce from 'immer';
import useStore from './store';

export const useForm = () => {
  const {
    form,
    mock,
    currentExam,
    keysOfForm,
    set,
    setKeysOfForm,
    reset,
    setMock,
    setForm,
    setValueInForm,
    ...propsFormStore
  } = useStore();

  // cria objeto com todas as chaves
  // TODO: Porem deve ser levado em consideração o tipo de repositorio
  const handleCreateForm = async (data, name) => {
    // console.log({ mock, data });
    if (!data) return;
    reset();
    let provisionalObject = {};
    data.form.fields.map((field) => {
      provisionalObject = {
        ...provisionalObject,
        [field.key]: null,
      };
    });
    // construir um array de vestigios com seus respectivos ids, para poder
    // alterar somente o array selecionado
    setKeysOfForm({ id: null, ...provisionalObject });
    setMock({ ...data, type: data.name });
  };

  const handleCreateArrayForm = (exams) => {
    console.log({ exams123213: exams });
    let object = {};
    exams.map((exam) => {
      object = {
        ...object,
        [exam.codigoVestigio]: {
          ...keysOfForm,
          id: exam.codigoVestigio,
          description: exam.descricao,
        },
      };
    });

    console.log({ object });
    setForm(object);
  };

  /**
   * @param {string} key - chave referente ao campo no form
   * @param {string} value - valor referente ao campo no form
  */
  const handleChangeValueForm = useCallback(async (key, value) => {
    setValueInForm(currentExam, key, value);
    // set({ [key]: value }, currentExam);
    // set(produce(draftState => ) { [key]: value });
    // await db.insert(`${mock.id}`, { [key]: value });
  }, [form, currentExam]);

  const handleProgressStepForm = useCallback((step) => {
    if (!form) return 0;
    // const filed = step.fields.filter((field) => !!form[field.key]);
    const percentage = 75;// (filed.length / step.fields.length) * 100;
    return percentage;
  }, [mock, form]);

  const handleReset = () => reset();

  return {
    ...propsFormStore,
    form,
    mock,
    currentExam,
    keysOfForm,
    set,
    setKeysOfForm,
    reset,
    setMock,
    setForm,
    setValueInForm,
    handleReset,
    handleCreateForm,
    handlreRetriveForm: () => { },
    handleChangeValueForm,
    handleCreateArrayForm,
    handleProgressStepForm,
  };
};
