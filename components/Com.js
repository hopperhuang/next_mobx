import { observer } from 'mobx-react';
import React from 'react';
import Router from 'next/router';

@observer
class Com extends React.Component {
  render() {
    return (
      <div>
        {this.props.tagComments.map(tagComment => (
          <div key={tagComment.id} onClick={() => { Router.push('/interviewee'); }} >
            <p>评论人员：{tagComment.who}</p>
            <p>技能评分：{tagComment.tagsScore}</p>
            <p>技能评价：{tagComment.tagsComment}</p>
            <p>本评价是否对所有人可见: {tagComment.cansee ? '是' : '否'}</p>
          </div>
            ))}
        <style jsx>
          {
                `
                div {
                    font-size: 0.5rem;
                    margin: 1rem 0;
                }
                `
            }
        </style>
      </div>
    );
  }
}

export default Com;
