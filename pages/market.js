import React from 'react';
// import Head from 'next/head';
import { Provider } from 'mobx-react';
import { initStore } from '../store/market';
import Market from '../components/Market';
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
        <Header title="合适的工作机会" />
        <Provider store={this.store}>
          <Market />
        </Provider>
        <style jsx>{`
      .container {
          box-sizing: border-box;
          padding: 0 0.2rem;
      }
    `}
        </style>
      </div>
    );
  }
}
