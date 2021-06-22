import React, { useCallback, useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Toast from 'react-native-toast-message';
import * as Atom from '../../Atom';

export default ({ value, keyField, onChange }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSuccessRead = useCallback(
    (e) => {
      // onChange({ [keyField]: e.data });
      onChange(keyField, e.data);
      setContent(e.data);
      setShow(false);
      setLoading(true);
      setTimeout(() => {
        if (e.data === '0049501403') {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Codigo de Lacre Confere com o Siscrim',
            // text2: 'Exemplo de sucesso para quando o codigo do lacre for igual ao do siscrim',
            visibilityTime: 6000,
            autoHide: true,
            topOffset: 100,
            bottomOffset: 40,
          });
          setLoading(false);
          return;
        }
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Codigo de Lacre Diferente do Siscrim',
          //  text2: 'Exemplo de erro para quando o codigo do lacre for diferente do siscrim',
          visibilityTime: 6000,
          autoHide: true,
          topOffset: 100,
          bottomOffset: 40,
        });
        setLoading(false);
      }, 2200);
    }, [],

  );

  return (
    <>
      {show ? (
        <QRCodeScanner
          reactivate
          showMarker
          onRead={handleSuccessRead}
          flashMode={RNCamera.Constants.FlashMode.auto}
        />
      ) : (
          <Atom.Button
            loading={loading}
            mt={2}
            textButton={content ? 'Outra Leitura' : 'Ler Código'}
            onPress={() => setShow(true)}
          />
        )}

      {content && (
        <Atom.Box mt={3}>
          <Atom.Text fontWeight={1} fontSize={1}>{content}</Atom.Text>
        </Atom.Box>
      )}
    </>
  );
};
