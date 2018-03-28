import { observable, action } from 'mobx';

class Intro {
    @observable info = {
      name: '',
      age: '',
      exp: [],
      tel: '',
      email: '',
      edu: [],
      specialExp: '',
      tags: [],
    }
    @observable pModal = true
    @observable eModal = true

    constructor(isServer) {
      this.isServer = isServer;
    }
    @action hidePmodal = () => {
      this.pModal = false;
    }
    @action hideEmodal = () => {
      console.log('hide emodal');
      this.eModal = false;
    }
    @action getInfo = () => {
      setTimeout(() => {
        this.info = {
          name: 'huangjiawei',
          age: '26',
          tel: '158xxxxxxxx',
          email: 'huangjiawei@innotechx.com',
          specialExp: '这是我的个人经历xxxxxxxxx',
          tags: [
            { name: 'mysql', score: 4 },
            { name: 'js', score: 5 },
            { name: 'php', score: 5 },
            { name: 'react.js', score: 4.5 },
            { name: 'go', score: 4 },
          ],
          exp: [
            {
              id: 'ct1',
              content: 'aaaaa',
              position: '组长',
              time: '2018-1-1',
              company: '上海寅诺',
            },
            {
              id: 'ct2',
              content: 'bbbbb',
              position: '开发',
              time: '2018-1-1',
              company: '上海寅诺',
            },
            {
              id: 'ct3',
              content: 'ccccc',
              position: '策划',
              time: '2018-1-1',
              company: '上海寅诺',
            },
          ],
          edu: [
            {
              id: 'e1',
              time: '2017-1-1',
              school: 'scau',
              degree: '学士学位',
            },
            {
              id: 'e2',
              time: '2018-1-1',
              school: 'sctu',
              degree: '硕士学位',
            },
          ],
        };
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
