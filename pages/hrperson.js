import Router from 'next/router';
import Header from '../components/Header';

export default function () {
  return (
    <div>
      <Header title="hr个人中心" />
      <div>
        <p>我的个人积分: 234</p>
        <p onClick={() => Router.push('/history')} >我的过往评价</p>
        <p onClick={() => { Router.push('/job'); }} >发布新的招聘岗位</p>
        <p>正在招聘中的岗位</p>
        <div className="item" onClick={() => { Router.push('/job'); }} >
          <p>岗位：前端开发工程师</p>
          <p className="buttonContainer" >
            <span onClick={(e) => { e.stopPropagation(); Router.push('/profiles'); }} className="button">查看投来的简历</span>
            <span onClick={(e) => { e.stopPropagation(); Router.push('/hrmarket'); }} className="button" >到市场上去看合适的简历</span>
          </p>
        </div>
        <div className="item" onClick={() => { Router.push('/job'); }} >
          <p>岗位：php开发工程师</p>
          <p className="buttonContainer" >
            <span className="button">查看投来的简历</span>
            <span className="button" >到市场上去看合适的简历</span>
          </p>
        </div>
        <div className="item" onClick={() => { Router.push('/job'); }} >
          <p>岗位：node.js开发工程师</p>
          <p className="buttonContainer" >
            <span className="button">查看投来的简历</span>
            <span className="button" >到市场上去看合适的简历</span>
          </p>
        </div>
        <div className="item" onClick={() => { Router.push('/job'); }} >
          <p>岗位：golang开发工程师</p>
          <p className="buttonContainer" >
            <span className="button">查看投来的简历</span>
            <span className="button" >到市场上去看合适的简历</span>
          </p>
        </div>
      </div>
      <style jsx >
        {`
        .item {
            border: 2px solid black;
            margin-bottom: 1rem;
        }
        .buttonContainer {
            display: flex;
            justify-content: space-between;
        }
        .button {
            border: 1px solid black;
        }
        p {
            margin-bottom: 0.5rem;
        }
        `}
      </style>
    </div>
  );
}
