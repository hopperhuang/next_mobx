import { observable, action } from 'mobx';

class Intro {
    @observable positon = '前端开发工程师'
    @observable exp = '不限'
    @observable tags = [];
    @observable id = 0;

    constructor(isServer) {
      this.isServer = isServer;
    }
    @action changePositon = (value) => { this.positon = value; }
    @action changeExp = (value) => { this.exp = value; }
    @action addTags = () => {
      const { id } = this;
      this.tags.push({ value: 'js', score: 'hgith', id });
      this.id += 1;
    }
    @action changeTag = (id, value) => {
      this.tags[id].value = value;
    }
    @action changeScore = (id, value) => {
      this.tags[id].score = value;
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
