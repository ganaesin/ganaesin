import React, { useState } from 'react';
import $ from "jquery";

const Info = () => {

  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });

  var [교과총점, set교과총점] = useState('');
  var [예체능총점, set예체능총점] = useState('');
  var [내신총점, set내신총점] = useState('');

  var [전교생, set전교생] = useState('');
  var [등수, set등수] = useState('');
  var [평균, set평균] = useState('');

  교과총점 += 40
  예체능총점 += 10

  내신총점 += (Number(교과총점) + Number(예체능총점))

  const [결석, set결석] = useState('');
  const [지각, set지각] = useState('');
  const [조퇴, set조퇴] = useState('');
  const [결과, set결과] = useState('');

  const on결석 = (e) => {
    set결석(e.target.value);
  };

  const on지각 = (e) => {
    set지각(e.target.value);
  };

  const on조퇴 = (e) => {
    set조퇴(e.target.value);
  };

  const on결과 = (e) => {
    set결과(e.target.value);
  };

  const [school1, setschool1] = useState('');
  const [school2, setschool2] = useState('');
  const [school3, setschool3] = useState('');
  const [school4, setschool4] = useState('');

  const onschool1 = (e) => {
    setschool1(e.target.value);
  };
  const onschool2 = (e) => {
    setschool2(e.target.value);
  };
  const onschool3 = (e) => {
    setschool3(e.target.value);
  };
  const onschool4 = (e) => {
    setschool4(e.target.value);
  };

  const [봉사, set봉사] = useState('');

  const on봉사 = (e) => {
    set봉사(e.target.value);
  };

  const [교내상, set교내상] = useState('');

  const on교내상 = (e) => {
    set교내상(e.target.value);
  };

  const [임원, set임원] = useState('');

  const on임원 = (e) => {
    set임원(e.target.value);
  };

  const [역사1원점수, set역사1원점수] = useState('');
  const [역사1평균, set역사1평균] = useState('');
  const [역사1편차, set역사1편차] = useState('');

  const on역사1원점수= (e) => {
    set역사1원점수(e.target.value);
  };

  const on역사1평균 = (e) => {
    set역사1평균(e.target.value);
  };

  const on역사1편차 = (e) => {
    set역사1편차(e.target.value);
  };

  const [국어1원점수, set국어1원점수] = useState('');
  const [국어1평균, set국어1평균] = useState('');
  const [국어1편차, set국어1편차] = useState('');

  const on국어1원점수 = (e) => {
    set국어1원점수(e.target.value);
  };

  const on국어1평균 = (e) => {
    set국어1평균(e.target.value);
  };

  const on국어1편차 = (e) => {
    set국어1편차(e.target.value);
  };

  const [도덕1원점수, set도덕1원점수] = useState('');
  const [도덕1평균, set도덕1평균] = useState('');
  const [도덕1편차, set도덕1편차] = useState('');

  const on도덕1원점수 = (e) => {
    set도덕1원점수(e.target.value);
  };

  const on도덕1평균 = (e) => {
    set도덕1평균(e.target.value);
  };

  const on도덕1편차 = (e) => {
    set도덕1편차(e.target.value);
  };

  const [수학1원점수, set수학1원점수] = useState('');
  const [수학1평균, set수학1평균] = useState('');
  const [수학1편차, set수학1편차] = useState('');

  const on수학1원점수 = (e) => {
    set수학1원점수(e.target.value);
  };

  const on수학1평균 = (e) => {
    set수학1평균(e.target.value);
  };

  const on수학1편차 = (e) => {
    set수학1편차(e.target.value);
  };

  const [과학1원점수, set과학1원점수] = useState('');
  const [과학1평균, set과학1평균] = useState('');
  const [과학1편차, set과학1편차] = useState('');

  const on과학1원점수 = (e) => {
    set과학1원점수(e.target.value);
  };

  const on과학1평균 = (e) => {
    set과학1평균(e.target.value);
  };

  const on과학1편차 = (e) => {
    set과학1편차(e.target.value);
  };

  const [기가1원점수, set기가1원점수] = useState('');
  const [기가1평균, set기가1평균] = useState('');
  const [기가1편차, set기가1편차] = useState('');

  const on기가1원점수 = (e) => {
    set기가1원점수(e.target.value);
  };

  const on기가1평균 = (e) => {
    set기가1평균(e.target.value);
  };

  const on기가1편차 = (e) => {
    set기가1편차(e.target.value);
  };

  const [영어1원점수, set영어1원점수] = useState('');
  const [영어1평균, set영어1평균] = useState('');
  const [영어1편차, set영어1편차] = useState('');

  const on영어1원점수 = (e) => {
    set영어1원점수(e.target.value);
  };

  const on영어1평균 = (e) => {
    set영어1평균(e.target.value);
  };

  const on영어1편차 = (e) => {
    set영어1편차(e.target.value);
  };

  const [사회1원점수, set사회1원점수] = useState('');
  const [사회1평균, set사회1평균] = useState('');
  const [사회1편차, set사회1편차] = useState('');

  const on사회1원점수 = (e) => {
    set사회1원점수(e.target.value);
  };

  const on사회1평균 = (e) => {
    set사회1평균(e.target.value);
  };

  const on사회1편차 = (e) => {
    set사회1편차(e.target.value);
  };

  const [선택1원점수, set선택1원점수] = useState('');
  const [선택1평균, set선택1평균] = useState('');
  const [선택1편차, set선택1편차] = useState('');

  const on선택1원점수 = (e) => {
    set선택1원점수(e.target.value);
  };

  const on선택1평균 = (e) => {
    set선택1평균(e.target.value);
  };

  const on선택1편차 = (e) => {
    set선택1편차(e.target.value);
  };

  const [역사2원점수, set역사2원점수] = useState('');
  const [역사2평균, set역사2평균] = useState('');
  const [역사2편차, set역사2편차] = useState('');

  const on역사2원점수 = (e) => {
    set역사2원점수(e.target.value);
  };

  const on역사2평균 = (e) => {
    set역사2평균(e.target.value);
  };

  const on역사2편차 = (e) => {
    set역사2편차(e.target.value);
  };

  const [국어2원점수, set국어2원점수] = useState('');
  const [국어2평균, set국어2평균] = useState('');
  const [국어2편차, set국어2편차] = useState('');

  const on국어2원점수 = (e) => {
    set국어2원점수(e.target.value);
  };

  const on국어2평균 = (e) => {
    set국어2평균(e.target.value);
  };

  const on국어2편차 = (e) => {
    set국어2편차(e.target.value);
  };

  const [도덕2원점수, set도덕2원점수] = useState('');
  const [도덕2평균, set도덕2평균] = useState('');
  const [도덕2편차, set도덕2편차] = useState('');

  const on도덕2원점수 = (e) => {
    set도덕2원점수(e.target.value);
  };

  const on도덕2평균 = (e) => {
    set도덕2평균(e.target.value);
  };

  const on도덕2편차 = (e) => {
    set도덕2편차(e.target.value);
  };

  const [수학2원점수, set수학2원점수] = useState('');
  const [수학2평균, set수학2평균] = useState('');
  const [수학2편차, set수학2편차] = useState('');

  const on수학2원점수 = (e) => {
    set수학2원점수(e.target.value);
  };

  const on수학2평균 = (e) => {
    set수학2평균(e.target.value);
  };

  const on수학2편차 = (e) => {
    set수학2편차(e.target.value);
  };

  const [과학2원점수, set과학2원점수] = useState('');
  const [과학2평균, set과학2평균] = useState('');
  const [과학2편차, set과학2편차] = useState('');

  const on과학2원점수 = (e) => {
    set과학2원점수(e.target.value);
  };

  const on과학2평균 = (e) => {
    set과학2평균(e.target.value);
  };

  const on과학2편차 = (e) => {
    set과학2편차(e.target.value);
  };

  const [기가2원점수, set기가2원점수] = useState('');
  const [기가2평균, set기가2평균] = useState('');
  const [기가2편차, set기가2편차] = useState('');

  const on기가2원점수 = (e) => {
    set기가2원점수(e.target.value);
  };

  const on기가2평균 = (e) => {
    set기가2평균(e.target.value);
  };

  const on기가2편차 = (e) => {
    set기가2편차(e.target.value);
  };

  const [영어2원점수, set영어2원점수] = useState('');
  const [영어2평균, set영어2평균] = useState('');
  const [영어2편차, set영어2편차] = useState('');

  const on영어2원점수 = (e) => {
    set영어2원점수(e.target.value);
  };

  const on영어2평균 = (e) => {
    set영어2평균(e.target.value);
  };

  const on영어2편차 = (e) => {
    set영어2편차(e.target.value);
  };

  const [사회2원점수, set사회2원점수] = useState('');
  const [사회2평균, set사회2평균] = useState('');
  const [사회2편차, set사회2편차] = useState('');

  const on사회2원점수 = (e) => {
    set사회2원점수(e.target.value);
  };

  const on사회2평균 = (e) => {
    set사회2평균(e.target.value);
  };

  const on사회2편차 = (e) => {
    set사회2편차(e.target.value);
  };

  const [선택2원점수, set선택2원점수] = useState('');
  const [선택2평균, set선택2평균] = useState('');
  const [선택2편차, set선택2편차] = useState('');

  const on선택2원점수 = (e) => {
    set선택2원점수(e.target.value);
  };

  const on선택2평균 = (e) => {
    set선택2평균(e.target.value);
  };

  const on선택2편차 = (e) => {
    set선택2편차(e.target.value);
  };

  전교생 += ((Number(school1) + Number(school2) + Number(school3) + Number(school4)) / 4)

  전교생 = Math.round(전교생)

  return (
    <div>
      <div>
        <div id="len">
          <input id="schools" maxlength="3" class="inputs" value={school1} onChange={onschool1} placeholder="1학기 중간고사 수강자 수" />
          <input id="schools" maxlength="3" class="inputs" value={school2} onChange={onschool2} placeholder="1학기 기말고사 수강자 수" />

          <br />

          <input id="schools" maxlength="3" class="inputs" value={school3} onChange={onschool3} placeholder="2학기 중간고사 수강자 수" />
          <input id="schools" maxlength="3" class="inputs" value={school4} onChange={onschool4} placeholder="2학기 기말고사 수강자 수" />
          <br />
        </div>
      </div>

      <div id="len">
        <br />
      </div>

      <div id="len">
        <input id="middle" maxlength="3" class="inputs" value={봉사} onChange={on봉사} placeholder="총 봉사 시간" />
        <input id="middle" maxlength="2" class="inputs" value={교내상} onChange={on교내상} placeholder="총 교내상 수" />
        <input id="middle" maxlength="2" class="inputs" value={임원} onChange={on임원} placeholder="총 임원 시간" />
      </div>

      <div id="len">
        <input id="small" maxlength="3" class="inputs" value={결석} onChange={on결석} placeholder="무단결석" />
        <input id="small" maxlength="2" class="inputs" value={지각} onChange={on지각} placeholder="무단지각" />
        <input id="small" maxlength="2" class="inputs" value={조퇴} onChange={on조퇴} placeholder="무단조퇴" />
        <input id="small" maxlength="2" class="inputs" value={결과} onChange={on결과} placeholder="무단결과" />
      </div>

      <div id="len">
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 역사
        </span>
        <input maxlength="2" class="inputs" value={역사1원점수} onChange={on역사1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={역사1평균} onChange={on역사1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={역사1편차} onChange={on역사1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 국어
        </span>
        <input maxlength="2" class="inputs" value={국어1원점수} onChange={on국어1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={국어1평균} onChange={on국어1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={국어1편차} onChange={on국어1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 도덕
        </span>
        <input maxlength="2" class="inputs" value={도덕1원점수} onChange={on도덕1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={도덕1평균} onChange={on도덕1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={도덕1편차} onChange={on도덕1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 수학
        </span>
        <input maxlength="2" class="inputs" value={수학1원점수} onChange={on수학1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={수학1평균} onChange={on수학1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={수학1편차} onChange={on수학1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 과학
        </span>
        <input maxlength="2" class="inputs" value={과학1원점수} onChange={on과학1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={과학1평균} onChange={on과학1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={과학1편차} onChange={on과학1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 기가
        </span>
        <input maxlength="2" class="inputs" value={기가1원점수} onChange={on기가1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={기가1평균} onChange={on기가1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={기가1편차} onChange={on기가1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 영어
        </span>
        <input maxlength="2" class="inputs" value={영어1원점수} onChange={on영어1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={영어1평균} onChange={on영어1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={영어1편차} onChange={on영어1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 사회
        </span>
        <input maxlength="2" class="inputs" value={사회1원점수} onChange={on사회1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={사회1평균} onChange={on사회1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={사회1편차} onChange={on사회1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 선택
        </span>
        <input maxlength="2" class="inputs" value={선택1원점수} onChange={on선택1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={선택1평균} onChange={on선택1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={선택1편차} onChange={on선택1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 역사
        </span>
        <input maxlength="2" class="inputs" value={역사2원점수} onChange={on역사2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={역사2평균} onChange={on역사2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={역사2편차} onChange={on역사2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 국어
        </span>
        <input maxlength="2" class="inputs" value={국어2원점수} onChange={on국어2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={국어2평균} onChange={on국어2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={국어2편차} onChange={on국어2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 도덕
        </span>
        <input maxlength="2" class="inputs" value={도덕2원점수} onChange={on도덕2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={도덕2평균} onChange={on도덕2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={도덕2편차} onChange={on도덕2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 수학
        </span>
        <input maxlength="2" class="inputs" value={수학2원점수} onChange={on수학2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={수학2평균} onChange={on수학2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={수학2편차} onChange={on수학2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 과학
        </span>
        <input maxlength="2" class="inputs" value={과학2원점수} onChange={on과학2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={과학2평균} onChange={on과학2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={과학2편차} onChange={on과학2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 기가
        </span>
        <input maxlength="2" class="inputs" value={기가2원점수} onChange={on기가2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={기가2평균} onChange={on기가2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={기가2편차} onChange={on기가2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 영어
        </span>
        <input maxlength="2" class="inputs" value={영어2원점수} onChange={on영어2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={영어2평균} onChange={on영어2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={영어2편차} onChange={on영어2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 사회
        </span>
        <input maxlength="2" class="inputs" value={사회2원점수} onChange={on사회2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={사회2평균} onChange={on사회2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={사회2편차} onChange={on사회2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 선택
        </span>
        <input maxlength="2" class="inputs" value={선택2원점수} onChange={on선택2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={선택2평균} onChange={on선택2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={선택2편차} onChange={on선택2편차} placeholder="표준편차" />
        <br />
      </div>

      <div>
        <div id="k">
          내신성적 총점은&nbsp;
          <span id="mark">
            {Number(내신총점)}점
          </span> 입니다. <br />
          전교생 {Number(전교생)}명 중에서&nbsp;
          <span id="mark">
            {Number(등수)}등
          </span> 입니다. <br />
          평균 점수는&nbsp;
          <span id="mark">
            {Number(평균)}점
          </span> 입니다.
        </div>
      </div>

    </div>
  );
};

export default Info;