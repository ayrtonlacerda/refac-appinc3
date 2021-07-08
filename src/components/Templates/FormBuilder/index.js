import React, { useCallback } from 'react';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';
import * as Organisms from '../../Organisms';
import { useForm } from '../../../global';

const FormBuilder = ({
  fields, group, handleChangeValueForm, item,
}) => {
  const { form, currentExam } = useForm();
  let index = 0;

  const conditional = (type, field) => {
    const render = (
      field.type === type && !field.dependency)
      || (field.type === type && field.value_dependency === form[currentExam][field.dependency]);

    if (render) {
      index += 1;
    }
    return render;
  };

  return fields?.map((field, i) => {
    if (conditional('text', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Atom.Input
            width="100%"
            keyField={field.key}
            value={group ? item[i][field.key] : form[currentExam][field.key]}
            onChangeText={
              (text) => handleChangeValueForm(field.key, text)
            }
            placeholder={field.placeholder}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('camera', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Camera
            keyField={field.key}
            value={group ? item[i][field.key] : form[currentExam][field.key]}
            onChange={handleChangeValueForm}
            type={field.additional_type}
            options={field.options}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('ocr', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.OCR
            keyField={field.key}
            value={form[currentExam][field.key]}
            onChangeText={
              (text) => handleChangeValueForm(field.key, text)
            }
            placeholder={field.placeholder}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('vehicle', field)) {
      return (
        <Organisms.FormField
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Vehicle
            keyField={field.key}
            value={form[currentExam][field.key]}
            onChange={handleChangeValueForm}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('date', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.DatePicker
            keyField={field.key}
            value={form[currentExam][field.key] && new Date(form[currentExam][field.key])}
            onChange={handleChangeValueForm}
            mode={field.aditional_type}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('geolocation', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.GeoLocation
            value={form[currentExam][field.key]}
            onChange={handleChangeValueForm}
            keyRef={field.key}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('scanner', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.Scanner
            keyField={field.key}
            value={form[currentExam][field.key]}
            onChange={handleChangeValueForm}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('audio', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.AudioRecoder
            onChange={handleChangeValueForm}
            value={form[currentExam][field.key]}
            keyField={field.key}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('group', field)) {
      console.log({ group: conditional('group', field) });
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Group
            onChange={handleChangeValueForm}
            value={form[currentExam][field.key]}
            keyField={field.key}
            group={field.group}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('radio', field)) {
      return (
        <Organisms.FormField
          keyField={field.key}
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.RadioButton
            keyField={field.key}
            onChange={handleChangeValueForm}
            value={form[currentExam][field.key]}
            options={field.options}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('seal', field)) {
      return (
        <Organisms.FormField
          keyField={field.key}
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Seal
            keyField={field.key}
            onChange={handleChangeValueForm}
            value={form[currentExam][field.key]}
            options={field.options}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('description', field)) {
      return (
        <Organisms.FormField
          keyField={field.key}
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Description
            keyField={field.key}
            onChange={handleChangeValueForm}
            value={form[currentExam][field.key] || field.default_value}
            options={field.options}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('toggles', field)) {
      return (
        <Organisms.FormField
          keyField={field.key}
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.Toggles
            keyField={field.key}
            value={form[currentExam][field.key]}
            onChange={handleChangeValueForm}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('img_plus_input', field)) {
      return (
        <Organisms.FormField
          keyField={field.key}
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Molecules.ImgPlusInput
            keyField={field.key}
            value={form[currentExam][field.key]}
            onChange={handleChangeValueForm}
            {...field}
          />
        </Organisms.FormField>
      );
    }
    if (conditional('picker', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.Picker
            keyRef={field.key}
            value={form[currentExam][field.key]}
            options={field.options}
            onChangeOption={handleChangeValueForm}
            onChangeText={
              (text) => handleChangeValueForm(field.key, text)
            }
          />
        </Organisms.FormField>
      );
    }
    if (conditional('picker_plus_input', field)) {
      return (
        <Organisms.FormField
          group={group}
          number={index}
          label={field.label}
          description={field.description}
        >
          <Organisms.PickerPlusInput
            keyRef={field.key}
            value={form[currentExam][field.key]}
            options={field.options}
            onChangeOption={handleChangeValueForm}
            onChangeText={
              (text) => handleChangeValueForm(field.key, text)
            }
          />
        </Organisms.FormField>
      );
    }
    return null;
  });
};

export default FormBuilder;
