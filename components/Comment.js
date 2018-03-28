import { observer, inject } from 'mobx-react';
import React from 'react';
import CommentTags from './CommentTags';

@inject('store') @observer
class Comment extends React.Component {
  componentDidMount() {
    this.props.store.getInfo();
  }
  render() {
    return (
      <div>
        <p>招聘岗位：前端开发工程师</p>
        <p>请对本次面试的求职者进行评价</p>
        <p>职位需求技能评价:</p>
        <CommentTags
          tags={this.props.store.commentTags}
          changeScore={this.props.store.changeScore}
          changeComment={this.props.store.changeComment}
        />
        <p>总体评分&nbsp;&nbsp;: <input onChange={(e) => { this.props.store.changeTotalScore(e.target.value); }} value={this.props.store.totalScore} /></p>
        <p>总体评价:</p>
        <p>
          <textarea
            onChange={e => this.props.store.changeTotalComment(e.target.value)}
            value={this.props.store.totolComent}
          />
        </p>
        <style jsx>
          {
                `
                    input {
                        border: 1px solid black;
                    }
                    textarea {
                        border: 1px solid black;
                    }
                `
            }
        </style>
      </div>);
  }
}

export default Comment;
