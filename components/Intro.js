import { inject, observer } from 'mobx-react';
import React from 'react';
import Exp from './Exp';
import Edu from './Edu';
import Tags from './Tag';

@inject('store') @observer
class Intro extends React.Component {
  componentDidMount() {
    this.props.store.getInfo();
  }
  render() {
    return (
      <div>
        <div className="personal" >
          {this.props.store.pModal ? <div className="modal" onClick={this.props.store.hidePmodal} >请先购买</div> : ''}
          <p className="name" >姓名：{this.props.store.info.name}</p>
          <p className="age" >年龄：{this.props.store.info.age}</p>
          <p className="tel" >联系电话：{this.props.store.info.tel}</p>
          <p className="email" >个人邮箱：{this.props.store.info.email}</p>
        </div>
        <div>
          <p>总体评分：5 分</p>
        </div>
        <Tags tags={this.props.store.info.tags} />
        <div className="expAndEdu" >
          {this.props.store.eModal ? <div className="modal" onClick={this.props.store.hideEmodal} >请先购买</div> : ''}
          <p className="intro" >个人工作经历:</p>
          <Exp exp={this.props.store.info.exp} />
          <p className="edu" >个人教育经历</p>
          <Edu edu={this.props.store.info.edu} />
          <p className="spExp">个人经历：{this.props.store.info.specialExp}</p>
        </div>
        <style jsx>{`
      .name, .age, .tel, .email, .intro, .edu, .spExp {
        font-size: .5rem;
        line-height: .5rem;
        vertical-align: middle;
        margin-bottom: .2rem;
      }
      .personal {
        width: 100%;
        height: 3rem;
        position: relative;
      }
      .expAndEdu {
        width: 100%;
        position: relative;
      }
      .modal {
        z-index: 99;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: center;
        line-height: 100%;
        vertical-align: middle;
        box-sizing: border-box;
        padding-top: 1rem;
        color: white;
        background-color: rgba(0,0,0,0.8);
      }
    `}
        </style>
      </div>
    );
  }
}

export default Intro;
