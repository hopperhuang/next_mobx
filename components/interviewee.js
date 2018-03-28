import { observer } from 'mobx-react';
import React from 'react';

@observer
class InterViewee extends React.Component {
  render() {
    return (
      <div>
        <div>面试人员：xxx高级开发工程师</div>
        <div>技能: js</div>
        <div>技能评分: 5分</div>
        <div>技能评价: xxxxxxx</div>
        <br />
        <br />
        <div>评价面试官</div>
        <div>面试官评价是否准确？</div>
        <div>您对面试官的评分</div>
      </div>);
  }
}

export default InterViewee;
