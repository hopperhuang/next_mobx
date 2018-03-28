import React from 'react';
import Router from 'next/router';

import { inject, observer } from 'mobx-react';


@inject('store') @observer
class Market extends React.Component {
  componentDidMount() {
    this.props.store.getInfo();
  }
  render() {
    return (
      <div>
        {this.props.store.jobs.map(job => (
          <div onClick={() => { Router.push('/jd'); }} className="job" key={job.id} >
            <div>公司：{job.company}</div>
            <div>职位：{job.position}</div>
            <div>技能与岗位吻合度：{job.likely}</div>
            <style jsx>
              {
                `
                div {
                    font-size: 0.5rem;
                }
                .job {
                    margin-bottom: 0.6rem;
                }
                `
            }
            </style>
          </div>))}
      </div>
    );
  }
}

export default Market;
