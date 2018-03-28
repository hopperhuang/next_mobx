import { observer } from 'mobx-react';
import React from 'react';

@observer
class CommentTags extends React.Component {
  render() {
    return (
      <div>
        {this.props.tags.map((tag, index) => (
          <div key={tag.name} >
            <p>
              {tag.name} :
              <select value={tag.score} onChange={(e) => { this.props.changeScore(index, e.target.value); }}>
                <option value="heigh">高级</option>
                <option value="middle">中级</option>
                <option value="expert">专家</option>
                <option value="low">初级</option>
              </select>
            </p>
            <p>评价本项技能: <input value={tag.comment} onChange={e => this.props.changeComment(index, e.target.value)} /></p>
          </div>
        ))}
        <style jsx>
          {
           `
            input {
              border: 1px solid black;
            }
           `
         }
        </style>
      </div>);
  }
}

export default CommentTags;
