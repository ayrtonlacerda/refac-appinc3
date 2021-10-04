import { useCallback } from 'react';
import produce from 'immer';
import useStore from './store';
import DB from '../../database';

export const useForm = () => {
  const {
    form,
    mock,
    currentExam,
    keysOfForm,
    set,
    reset,
    setMock,
    setForm,
    setKeysOfForm,
    setCurrentExam,
    setValueInForm,
    setValueKeyOfForm,
    ...propsFormStore
  } = useStore();

  console.json(keysOfForm)

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

  const handleChangeValueKeysOfForm = useCallback(async (key, value, dontSaveOffline) => {
    setValueKeyOfForm(key, value);
    // set({ [key]: value }, currentExam);
    // set(produce(draftState => ) { [key]: value });
    if (!dontSaveOffline) {
      await DB.insert(
        currentExam,
        { keysOfForm: { ...keysOfForm, [key]: value } },
      );
    }
  }, [form]);

  const handleProgressStepForm = useCallback((step) => {
    if (!form) return 0;
    // const filed = step.fields.filter((field) => !!form[field.key]);
    const percentage = 75;// (filed.length / step.fields.length) * 100;
    return percentage;
  }, [mock, form]);

  const handleSetExam = (exam) => {
    setCurrentExam(exam?.codigoVestigio || exam);
  };

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
    setCurrentExam,
    handleReset,
    handleSetExam,
    handleCreateForm,
    handlreRetriveForm: () => { },
    handleChangeValueForm,
    handleCreateArrayForm,
    handleProgressStepForm,
    handleChangeValueKeysOfForm,
  };
};
