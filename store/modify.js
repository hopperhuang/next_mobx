import { observable, action } from 'mobx';

class Intro {
    @observable content = ''
    @observable time = ''
    @observable position = ''
    @observable company = ''

    constructor(isServer, type, id) {
      this.isServer = isServer;
      this.type = type;
      this.id = id;
    }
    @action getInfo = () => {
      setTimeout(() => {
        this.content = '这是我的工作内容';
        this.time = '2018-1-1';
        this.position = '前端开发';
        this.company = '上海寅诺';
      }, 1000);
    }
}

let store = null;
export function initStore(isServer, type, id) {
  if (isServer) {
    return new Intro(isServer, type, id);
  } else {
    if (store === null) {
      store = new Intro(isServer, type, id);
    }
    return store;
  }
}
