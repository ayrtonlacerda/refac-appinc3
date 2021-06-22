import React, { useCallback, useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import {} from 'styled-system';
import * as Atom from '../../Atom';

export default ({
  mode, keyField, onChange, value,
}) => {
  const [show, setShow] = useState(false);

  const handleChange = useCallback((event, selectedDate) => {
    onChange(keyField, selectedDate);
  }, []);

  useEffect(() => {
    if (!value) onChange(keyField, new Date());
  }, [value]);

  return (
    <>
      <Atom.Touch variant="datepicker" onPress={() => setShow(!show)}>
        <Atom.Text fontWeight={1} fontSize={1}>
          {mode === 'date' ? format(
            value || new Date(),
            'dd MMM yyyy',
            { locale: ptBR },
          ) : format(
            value || new Date(),
            'HH:mm',
            { locale: ptBR },
          )}
        </Atom.Text>
      </Atom.Touch>
      {show && (
        <DateTimePicker
          style={{
            width: '100%', backgroundColor: 'white', borderRadius: 5, marginTop: 6, zIndex: 99, color: '#333',
          }}
          locale="pt"
          testID="dateTimePicker"
          value={value || new Date()}
          mode={mode}
          is24Hour
          onChange={handleChange}
          display="default"
        />
      )}

    </>
  );
};
