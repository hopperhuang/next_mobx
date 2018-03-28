import { observer, inject } from 'mobx-react';
import React from 'react';
import Router from 'next/router';
import Com from './Com';

@inject('store') @observer
class OtherComments extends React.Component {
  componentDidMount() {
    this.props.store.getInfo();
  }
  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
          <p>js标签评价</p>
          <p onClick={() => { Router.push('/course'); }} >自我增值</p>
        </div>
        <Com tagComments={this.props.store.tags} />
        <p>本标签对何种职位可见</p>
        {this.props.store.showTo.map(show => (
          <div key={show.id} >{show.job}</div>
        ))}
      </div>);
  }
}

export default OtherComments;
