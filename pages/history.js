import Router from 'next/router';
import Header from '../components/Header';


export default function name() {
  return (
    <div>
      <Header title="评价历史" />
      <div onClick={() => { Router.push('/interviewee'); }} >
                对xxx的评价
      </div>
      <div>
                对xxx的评价
      </div>
      <div>
                对xxx的评价
      </div>
      <div>
                对xxx的评价
      </div>
    </div>
  );
}
