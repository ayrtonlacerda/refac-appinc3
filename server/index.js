import { createServer } from 'miragejs';
import { BASE_URL } from '@env';
import { authLoginMock, vestigiosMock } from './mocks';

export const startMirage = () => {
  console.log('%c ⚠️  START LOCAL SERVER ⚠️', 'background: #4444FF; color: #fff');
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.urlPrefix = BASE_URL;

      this.post('/auth/login', () => authLoginMock);
      this.get('/caso/:caso', (_, request) => {
        const { caso } = request.params;
        return vestigiosMock[caso][0];
      });
      this.get('/caso/:caso/vestigio', (_, request) => {
        const { caso } = request.params;
        return vestigiosMock[caso];
      });

      // whitelist
      // ref: https://github.com/miragejs/miragejs/issues/623
      this.urlPrefix = '';
      this.passthrough((request) => {
        if (request.url === 'http://10.0.2.2:8081/symbolicate') {
          return true;
        }
        return false;
      });
    },
  });
};
