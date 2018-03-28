import React from 'react';
// import Head from 'next/head';
import { Provider } from 'mobx-react';
import { initStore } from '../store/index';
import Page from '../components/Page';
import Header from '../components/Header';

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(isServer);
    return { lastUpdate: store.lastUpdate, isServer };
  }

  constructor(props) {
    super(props);
    this.store = initStore(props.isServer, props.lastUpdate);
  }

  render() {
    return (
      <div>
        <Header title="My Demo page" />
        <Provider store={this.store}>
          <Page title="Index Page" linkTo="/other" />
        </Provider>
        <img src="/static/my-image.jpg" alt="" />
      </div>
    );
  }
}
