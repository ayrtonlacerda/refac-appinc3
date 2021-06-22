/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { compareAsc } from 'date-fns';
import { useCommons } from '../../../../hooks';
import db from '../../../../database';
import { useForm } from '../../../../global';
// ui
import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';

const MyExpertise = () => {
  const { isFocused, navigation } = useCommons();
  const { handlreRetriveForm } = useForm();
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getExpertise = async () => {
    setRefreshing(true);
    const doc = await db.all(true);
    setData(doc.rows
      .map((el) => el.doc).sort(
        (a, b) => compareAsc(new Date(b.createdAt), new Date(a.createdAt)),
      ));
    setRefreshing(false);
  };

  const handleRemoveAll = async () => {
    await db.deleteAllForms();
    const teste = await db.all();
    console.log({ teste });
    getExpertise();
  };

  const handleClickForm = (form) => {
    handlreRetriveForm(form);
    console.log({ form, navigation });
    navigation.navigate('FormsRoutes');
  };

  useEffect(() => {
    getExpertise();
  }, [isFocused]);

  console.log({ data });

  return (
    <>
      <Molecules.Header
        title="Minhas Pericias"
        handlePress={handleRemoveAll}
        trash
      />
      <Atoms.Scroll
        p={2}
        enabled
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getExpertise}
          />
        )}
      >
        {data?.map((item) => (
          <Molecules.HistoryCard
            id={item._id}
            title={item.name}
            handlePress={() => handleClickForm(item)}
            {...item}
          />
        ))}
      </Atoms.Scroll>
    </>
  );
};

export default MyExpertise;
