import { observable, action } from 'mobx';

class Intro {
    @observable tags = [];
    @observable showTo = [
      { id: 1, job: '前端开发工程师' },
      { id: 2, job: 'node.js工程师' },
    ];

    constructor(isServer) {
      this.isServer = isServer;
    }
    @action getInfo = () => {
      this.tags = [
        {
          who: 'xxx高级工程师',
          id: 1,
          tagsScore: 4,
          tagsComment: 'xxxxx',
          cansee: true,
        },
        {
          who: 'xxx高级工程师',
          id: 2,
          tagsScore: 4,
          tagsComment: 'xxxxx',
          cansee: false,
        },
        {
          who: 'xxx高级工程师',
          id: 3,
          tagsScore: 4,
          tagsComment: 'xxxxx',
          cansee: true,
        },
      ];
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
