import React from 'react';
// import Head from 'next/head';
import { Provider } from 'mobx-react';
import { initStore } from '../store/tag';
import Interviewee from '../components/interviewee';
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
        <Header title="xxx的个人标签" />
        <Provider store={this.store}>
          <Interviewee />
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
