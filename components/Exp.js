import { observer } from 'mobx-react';
import React from 'react';
import Router from 'next/router';

@observer
class Exp extends React.Component {
  render() {
    return this.props.exp.map(e => (
      <div className="container" key={e.id} >
        <button
          className="modify"
          onClick={() => Router.push({
            pathname: '/modify',
            query: {
              type: 'exp',
              id: e.id,
            },
          })}
        >
          修改信息
        </button>
        <div>所在公司：{e.company}</div>
        <div>时间：{e.time}</div>
        <div>工作内容：{e.content}</div>
        <div>工作岗位: {e.position}</div>
        <style jsx >
          {`
                div {
                    font-size: 0.4rem;
                    margin-bottom: 0.2rem;
                }
                .container {
                    margin-bottom: 0.4rem;
                    position: relative;
                }
                .modify {
                  position: absolute;
                  top: 0.1rem;
                  right: .1rem;
                }
             `}
        </style>
      </div>));
  }
}

export default Exp;
