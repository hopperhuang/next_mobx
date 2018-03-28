import { observable, action, autorun } from 'mobx';

class Intro {
    @observable commentTags = []
    @observable totalScore = ''
    @observable totolComent = ''
    constructor(isServer) {
      this.isServer = isServer;
    }
    @action getInfo = () => {
      setTimeout(() => {
        this.commentTags = [
          {
            name: 'js',
            score: 'heigh',
            comment: '',
          },
          {
            name: 'react.js',
            score: 'middle',
            comment: '',
          },
          {
            name: 'vue.js',
            score: 'low',
            comment: '',
          },
        ];
      }, 1000);
    }
    @action changeTotalComment = (value) => {
      this.totolComent = value;
    }
    @action changeTotalScore = (value) => {
      this.totalScore = value;
    }
    @action changeScore = (index, value) => {
      this.commentTags[index].score = value;
    }
    @action changeComment = (index, value) => {
      this.commentTags[index].comment = value;
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
    autorun(() => { console.log(store.totalScore); });
    return store;
  }
}
