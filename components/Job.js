import React from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
import TagsInput from './TagsInput';


@inject('store') @observer
class Job extends React.Component {
  componentDidMount() {
    // this.props.store.getInfo();
  }
  render() {
    return (
      <div>
        <p>职位：<input value={this.props.store.positon} onChange={e => this.props.store.changePositon(e.target.value)} /></p>
        <p>工作经验：<input value={this.props.store.exp} onChange={e => this.props.store.changeExp(e.target.value)} /></p>
        <button onClick={this.props.store.addTags} >点击添加工作标签</button>
        <TagsInput
          tags={this.props.store.tags}
          changeTag={this.props.store.changeTag}
          changeScore={this.props.store.changeScore}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>其他说明：.....</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="out" onClick={() => { Router.push('/comment'); }} >发布招聘</div>
        <style jsx>
          {
                `
                    div {
                        font-size: 0.5rem;
                    }
                    .out {
                        width: 3rem;
                        margin: 0 auto;
                        background: #c0c0c0;
                        text-align: center
                        padding: .3rem;
                        border-radius: .3rem;
                    }
                `
            }
        </style>
        {/* <DevTools /> */}
      </div>
    );
  }
}

export default Job;
