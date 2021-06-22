/* eslint-disable no-underscore-dangle */
import PouchDB from 'pouchdb-react-native';

// PouchDB.debug.enable('*');

const db = new PouchDB('appincdb');
// tables - 1. forms_started,

/**
 * Cria documento com id e "colunas"
 * @param {!Object} body
 * @param {?string} name - nome do doc
 * @returns {Promise<Object>} doc info ou error
 */
const create = async (body, name = null) => {
  try {
    const doc = await db.put({
      _id: name || `${parseInt(Math.random() * 10000000, 10)}`,
      ...body,
    });
    return doc;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * insere informações no documento
 * @param {string} id - id do documento
 * @param {Object} body - informações que serão salvas no doc
 * @returns {Promise<Object>} doc info ou error
 * @throws {Object} - erro gerado
 */
const insert = async (id, body) => {
  try {
    const doc = await db.get(id);
    const response = await db.put({
      ...doc,
      _id: id,
      _rev: doc._rev,
      ...body,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * insere informações no documento
 * @param {string} id - id do documento
 * @param {string} element - elemento que ira ser adicionado no array
 * @returns {Promise<Object>} doc info ou error
 * @throws {Object} - erro gerado
 */
const insertArray = async (id, element) => {
  try {
    const doc = await db.get(id);
    const response = await db.put({
      _id: id,
      _rev: doc._rev,
      data: [...doc.data, element],
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * insere informações no documento
 * @param {boolean} form - se true retorna so os forms
 * @param {{ startkey: string | number, endkey: string | number }} query - retorna tudo entre os valores star e end
 * @throws {Object} - erro gerado
 */
const all = async (form, query = {}) => {
  try {
    const result = await db.allDocs({
      include_docs: true,
      attachments: true,
      ...(form ? {
        startkey: 0,
        endkey: 10000000,
      } : { ...query }),
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteAllForms = async () => {
  try {
    const forms = await all(true);
    const remove = await db.bulkDocs(
      forms.rows.map((el) => ({ ...el.doc, _deleted: true })),
    );
    console.log({ remove });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const query = async (id) => {
  try {
    const doc = await db.get(id);
    return doc;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  db,
  all,
  query,
  insert,
  create,
  insertArray,
  deleteAllForms,
};
