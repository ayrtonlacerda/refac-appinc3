import React, { useState, useCallback, useEffect } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import * as Atom from '../../Atom';

import configGoogle from './config';

const config = {
  width: 300,
  height: 280,
  includeBase64: true,
  useFrontCamera: true,
  cropping: true,
};

// API to call google vision
const checkForText = async (base64) => {
  const body = JSON.stringify({
    requests: [
      {
        image: {
          content: base64,
        },
        features: [
          {
            type: 'DOCUMENT_TEXT_DETECTION',
          },
        ],
      },
    ],
  });

  return await fetch(
    configGoogle.googleCloud.api + configGoogle.googleCloud.apiKey,
    {
      method: 'POST',
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: base64,
            },
            features: [
              {
                type: 'DOCUMENT_TEXT_DETECTION',
              },
            ],
          },
        ],
      }),
    },
  )
    .then((response) => response.json())
    .catch();
};

const OCR = ({
  keyField, value, onChange, crop,
}) => {
  const [picture, setPicture] = useState(false);
  const [ocrText, setOcr] = useState('');
  const [text, setText] = useState(true);

  const handleCamera = useCallback(() => {
    ImageCropPicker.openCamera({ ...config }).then((image) => setPicture(image));
  }, []);

  const responseOcr = checkForText(picture.data);

  return (
    <Atom.Container>

      {!text && (
        <Atom.Box>
          <Atom.Text fontSize={2}>
            Resultado:
            {' '}
            {ocrText}
          </Atom.Text>
        </Atom.Box>
      )}

      <Atom.CameraButtonsViewComponent>
        <Atom.Button
          icon
          iconName="search"
          textButton="Consultar lacre"
          onPress={handleCamera}
          mt={4}
        />
      </Atom.CameraButtonsViewComponent>
    </Atom.Container>
  );
};

export default OCR;
