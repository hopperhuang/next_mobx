import { observer } from 'mobx-react';
import React from 'react';

@observer
class Edu extends React.Component {
  render() {
    return this.props.edu.map(e =>
      (
        <div className="container" key={e.id} >
          <button className="modify" >修改信息</button>
          <div>时间：{e.time}</div>
          <div>学校：{e.school}</div>
          <div>获得证书：{e.degree}</div>
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

export default Edu;
