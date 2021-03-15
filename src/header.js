import React, { useState } from 'react';

const Header = () => {
  return (
    <div>
      <h1 id="titles">
        2021년 경기도교육청
        <br />
        2학년 가내신 계산기
        <h3 id="mini">
          <span id="red">본 사이트에서 제공되는 정보는 정확하지 않을 수 있습니다. <br/>
          본 정보를 이용하여 생기는 피해는 전적으로 이용자에게 있습니다.</span><br /><br />
          화면이 작으면 Ctrl, + 또는 Command, +를 누르세요.<br /><br />
          2학년 평균 점수를 3학년 때도 유지했을 때의 결과입니다.<br />
          시험 평균과 표준편차는 매번 다르므로 약간의 차이가 있을 수 있습니다.<br /><br />
          문의사항 | slyam06@naver.com<br />
          개발자 | 이하람
        </h3>
      </h1>
    </div>
  );
}

export default Header;