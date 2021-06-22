import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import produce from 'immer';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';
import { FormBuilder } from '../../Templates';
import theme from '../../../styles';

const Group = ({
  group, onChange, keyField, value,
}) => {
  const scrollRef = useRef(null);
  const setRef = useCallback((node) => {
    scrollRef.current = node;
  }, []);

  const [width, setWidth] = useState(0);
  const [data, setData] = useState(value || [group]);

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

  const handleAddItem = useCallback(() => {
    setWidth(width + theme.metrics.SCREEN_WIDTH * 2);
    setData((prevData) => ([...prevData, group]));
  }, [data]);

  const handleRemoveItem = useCallback((index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  }, [data.length]);

  const handlerEditItem = (key, value, index) => {
    setData((prevData) => {
      const indexElementSample = prevData[index]
        .findIndex((element) => element.key === key);
      const nextData = produce(prevData, (draftData) => {
        draftData[index][indexElementSample][key] = value;
      });
      onChange(keyField, nextData);
      return nextData;
    });
  };

  useEffect(() => {
    onChange(keyField, data);
  }, [data.length]);

  return (
    <>
      <Atom.Scroll
        setRef={setRef}
        noPaddingX
        horizontal
        pagingEnabled
        persistentScrollbar
      >
        {data.map((item, index) => (
          <>
            <Atom.Container>
              <Atom.Box
                p={1}
                mx={1}
                variant="group"
              >
                <Atom.Text>{value && value[index] ? value[index][0]?.description : ''}</Atom.Text>
                <FormBuilder
                  group
                  fields={group}
                  item={item}
                  handleChangeValueForm={
                    (key, value) => handlerEditItem(key, value, index)
                  }
                />
              </Atom.Box>
              <Atom.Touch onPress={() => handleRemoveItem(index)}>
                <Atom.Ball bg="RED" size="XXBIG" bottom={18}>
                  <Atom.Icon type="minus" />
                </Atom.Ball>
              </Atom.Touch>
            </Atom.Container>
          </>
        ))}

      </Atom.Scroll>

      <Atom.Button onPress={handleAddItem} textButton="ADICIONAR" />
    </>
  );
};

export default Group;
