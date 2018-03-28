export default function Jd() {
  return (
    <div>
      <p>职位：前端开发工程师</p>
      <p>工作经验： 不限</p>
      <p>技能要求</p>
      <p className="tags" >
        <span>js: 较好</span>
        <span>react.js 较好</span>
        <span>vue.js 较好</span>
      </p>
      <p>其他说明...</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        <p>找hr聊聊</p>
        <p>投递简历</p>
      </div>

      <style jsx>
        {`
      .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
      }
      `}
      </style>
    </div>);
}
