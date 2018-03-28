import { observer } from 'mobx-react';
import React from 'react';
import Router from 'next/router';

@observer
class Tags extends React.Component {
  render() {
    return (
      <div className="container" >
        {this.props.tags.map(tag => (
          <div className="tag" key={tag.name} onClick={() => { Router.push('/tag'); }} >
            {tag.name} : {tag.score}
          </div>
        ))}
        <style jsx>
          {`
            .container {
                display: flex;
                flex-wrap: wrap;
            }
            .tag {
                box-sizing: border-box;
                padding: 0.2rem;
                margin: 0.2rem;
                border: 0.01rem solid black;
                border-radius: 0.2rem;
            }
        `}
        </style>
      </div>);
  }
}

export default Tags;
