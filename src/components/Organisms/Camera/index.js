import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import produce from 'immer';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';
import theme from '../../../styles';

const config = {
  width: theme.metrics.SCREEN_WIDTH - 30,
  height: 280,
  includeBase64: true,
  useFrontCamera: false,
  cropping: true,
};

const Camera = ({
  keyField, value, onChange, crop, type, options,
}) => {
  const scrollRef = useRef(null);
  const setRef = useCallback((node) => {
    scrollRef.current = node;
  }, []);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      // setTimeout(() => {
      scrollRef.current.scrollTo({
        x: width + theme.metrics.SCREEN_WIDTH * 2,
        y: 0,
        animated: true,
      });
      // }, 50);
    }
  }, [width]);

  const [picture, setPicture] = useState([]);

  const handleCamera = useCallback(() => {
    ImageCropPicker.openCamera({ ...config })
      .then((image) => {
        console.log({ image });
        onChange(keyField, {
          ...value,
          pictures: value?.pictures
            ? [...value?.pictures, image]
            : [image],
        });
        // setPicture((arrayPictures) => [...arrayPictures, image]);
        setWidth(width + theme.metrics.SCREEN_WIDTH * 2);
      });
  }, [value]);

  const handleGalery = useCallback(() => {
    ImageCropPicker.openPicker({ ...config })
      .then((image) => {
        setPicture(image);
        onChange(keyField, { ...value, image });
      });
  }, [value]);

  const handleChangeLegend = useCallback((text) => {
    onChange(keyField, { ...value, legend: text });
  }, [value]);

  const handleChangeRadio = useCallback((id) => {
    // console.log({ id, value, keyField });
    onChange(keyField, { ...value, radio: id });
  }, [value]);

  return (
    <>
      {value ? (
        <>
          <Atom.Scroll
            setRef={setRef}
            noPaddingX
            horizontal
            pagingEnabled
            persistentScrollbar
          >
            {value?.pictures?.map((pic, index) => (
              <Atom.ImageBoxComponent
                width={theme.metrics.SCREEN_WIDTH - 30}
                source={{ uri: pic.path }}
                legend={`foto nº ${index + 1}`}
              />
            ))}
          </Atom.Scroll>
          <Atom.CameraButtonsViewComponent>
            <Atom.Button
              mt={2}
              icon
              iconName="add-a-photo"
              textButton="Capturar Outra Imagem"
              onPress={handleCamera}
            />
          </Atom.CameraButtonsViewComponent>
          {type === 'radio' && (
            <Molecules.RadioButton
              value={value?.radio}
              handleChange={handleChangeRadio}
              mt={15}
              options={options}
            />

          )}
          {type === 'note' && (
            <Atom.Input
              value={value?.legend}
              placeholder="Observação"
              onChangeText={handleChangeLegend}
              mt={15}
            />
          )}

        </>
      ) : (
          <>
            <Atom.CameraButtonsViewComponent>
              <Atom.Button icon iconName="add-a-photo" textButton="Capturar Imagem" onPress={handleCamera} />
            </Atom.CameraButtonsViewComponent>
          </>
        )}
    </>
  );
};

export default Camera;
