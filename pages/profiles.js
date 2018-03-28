import Router from 'next/router';
import Header from '../components/Header';

export default function Profiles() {
  return (
    <div>
      <Header title="投来的简历" />
      <p>招聘职位： 前端开发</p>
      <p>投来的简历</p>
      <div className="item" onClick={() => { Router.push('/hrsee'); }} >
        <p>a先生</p>
        <p>高级js工程师</p>
        <p className="tags" >
          <span>react.js 5分</span>
          <span>vue.js 5分</span>
          <span>js 5分</span>
          <span>php 5分</span>
          <span>golang 5分</span>
          <span>mysql 5分</span>
        </p>
        <p>合适程度：50%</p>
      </div>
      <div className="item" >
        <p>b先生</p>
        <p>高级js工程师</p>
        <p className="tags" >
          <span>react.js 5分</span>
          <span>vue.js 5分</span>
          <span>js 5分</span>
          <span>php 5分</span>
          <span>golang 5分</span>
          <span>mysql 5分</span>
        </p>
        <p>合适程度：50%</p>
      </div>
      <div className="item" >
        <p>c先生</p>
        <p>高级js工程师</p>
        <p className="tags" >
          <span>react.js 5分</span>
          <span>vue.js 5分</span>
          <span>js 5分</span>
          <span>php 5分</span>
          <span>golang 5分</span>
          <span>mysql 5分</span>
        </p>
        <p>合适程度：50%</p>
      </div>
      <style jsx>
        {`
        .tags {
            display: flex;
            flex-wrap: wrap;
        }
        .item {
            border: 1px solid black;
            margin-bottom: 0.5rem;
        }
        `}
      </style>
    </div>
  );
}
