import { observable, action } from 'mobx';

class Intro {
    @observable jobs = []

    constructor(isServer) {
      this.isServer = isServer;
    }
    @action getInfo = () => {
      setTimeout(() => {
        this.jobs = [
          {
            company: 'inntechx',
            position: 'js工程师',
            likely: '40%',
            id: '001',
          },
          {
            company: 'inntechx',
            position: 'python开发工程师',
            likely: '50%',
            id: '002',
          },
          {
            company: 'inntechx',
            position: 'php工程师',
            likely: '45%',
            id: '003',
          },
          {
            company: 'inntechx',
            position: 'golang工程师',
            likely: '80%',
            id: '004',
          },
          {
            company: 'inntechx',
            position: 'js工程师',
            likely: '40%',
            id: '005',
          },
          {
            company: 'inntechx',
            position: 'python开发工程师',
            likely: '50%',
            id: '006',
          },
          {
            company: 'inntechx',
            position: 'php工程师',
            likely: '45%',
            id: '007',
          },
          {
            company: 'inntechx',
            position: 'golang工程师',
            likely: '80%',
            id: '008',
          },
        ];
      }, 1000);
    }
}

let store = null;
export function initStore(isServer) {
  if (isServer) {
    return new Intro(isServer);
  } else {
    if (store === null) {
      store = new Intro(isServer);
    }
    return store;
  }
}
