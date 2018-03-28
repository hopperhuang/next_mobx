import { observer } from 'mobx-react';
import React from 'react';

@observer
class TagsInput extends React.Component {
  render() {
    return (
      <div className="container" >
        {this.props.tags.map(tag => (
          <p className="tag" key={tag.id} >
            <select value={tag.value} onChange={(e) => { this.props.changeTag(tag.id, e.target.value); }}>
              <option value="js">js</option>
              <option value="php">php</option>
              <option value="go">go</option>
              <option value="node.js">node.js</option>
            </select> &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            <select value={tag.score} onChange={(e) => { this.props.changeScore(tag.id, e.target.value); }}>
              <option value="heigh">高级</option>
              <option value="middle">中级</option>
              <option value="expert">专家</option>
              <option value="low">初级</option>
            </select>
          </p>
        ))}
        <style jsx>
          {`
   
        `}
        </style>
      </div>);
  }
}

export default TagsInput;
