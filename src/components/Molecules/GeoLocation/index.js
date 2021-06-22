import React, { useCallback } from 'react';
import Geolocation from '@react-native-community/geolocation';

import * as Atom from '../../Atom';

export default ({ value, onChange, keyRef }) => {
  const handleCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      (info) => onChange({ [keyRef]: info.coords }),
    );
  }, [value]);

  return (
    <>
      {value && (
      <>
        <Atom.Box>
          <Atom.Text fontWeight={1} fontSize={1}>{value.latitude}</Atom.Text>
        </Atom.Box>
        <Atom.Box mt={2}>
          <Atom.Text fontWeight={1} fontSize={1}>{value.longitude}</Atom.Text>
        </Atom.Box>
      </>
      )}
      <Atom.Button mt={2} icon iconName="location-on" textButton="Consultar Localização" onPress={handleCurrentPosition} />
    </>
  );
};
