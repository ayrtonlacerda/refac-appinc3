/*
tudo relacionado ao serviço externo
1. config axios
2. endpoints
*/

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.appditec.redes.unb.br/',
});

export const denatran = axios.create({
  baseURL: 'http://35.198.17.69/api/pericia/denatran/',
});

export const fipe = axios.create({
  baseURL: 'http://fipeapi.appspot.com/api/1/',
});
