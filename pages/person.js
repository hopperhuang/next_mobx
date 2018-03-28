import React from 'react';
import Router from 'next/router';
import { Provider } from 'mobx-react';
import { initStore } from '../store/intro';
import Page from '../components/Person';
import Header from '../components/Header';


export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { info: store.info, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer);
  }

  render() {
    return (
      <div className="container" >
        <Header title="我的个人简历" />
        <Provider store={this.store}>
          <Page />
        </Provider>
        <div className="bottomBar" >
          <div onClick={() => { Router.push('/market'); }} >工作市场看看</div>
          <div>个人积分: 443</div>
        </div>
        <style jsx>{`
      .container {
          box-sizing: border-box;
          padding: 0 0.2rem;
      }
      .bottomBar {
        display: flex;
        font-size: 0.5rem;
        justify-content: space-between;
      }
      .bottomBar div {
        border: 0.1rem solid black;
      }
    `}
        </style>
      </div>
    );
  }
}
