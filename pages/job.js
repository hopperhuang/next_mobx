import React from 'react';
// import Head from 'next/head';
import { Provider } from 'mobx-react';
import { initStore } from '../store/job';
import Job from '../components/Job';
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
        <Header title="发布一个职位" />
        <Provider store={this.store}>
          <Job />
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
