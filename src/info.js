import React, { useState } from 'react';
import $ from "jquery";

let Info = () => {

  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });

  let [교과총점, set교과총점] = useState('');
  let [예체능총점, set예체능총점] = useState('');
  let [내신총점, set내신총점] = useState('');

  let [전교생, set전교생] = useState('');
  let [등수, set등수] = useState('');
  let [평균, set평균] = useState('');

  예체능총점 += 10

  내신총점 += (Number(교과총점) + Number(예체능총점))

  let [결석1, set결석1] = useState('');
  let [지각1, set지각1] = useState('');
  let [조퇴1, set조퇴1] = useState('');
  let [결과1, set결과1] = useState('');

  let on결석1 = (e) => {
    set결석1(e.target.value);
  };

  let on지각1 = (e) => {
    set지각1(e.target.value);
  };

  let on조퇴1 = (e) => {
    set조퇴1(e.target.value);
  };

  let on결과1 = (e) => {
    set결과1(e.target.value);
  };

  let [결석2, set결석2] = useState('');
  let [지각2, set지각2] = useState('');
  let [조퇴2, set조퇴2] = useState('');
  let [결과2, set결과2] = useState('');

  let on결석2 = (e) => {
    set결석2(e.target.value);
  };

  let on지각2 = (e) => {
    set지각2(e.target.value);
  };

  let on조퇴2 = (e) => {
    set조퇴2(e.target.value);
  };

  let on결과2 = (e) => {
    set결과2(e.target.value);
  };

  let [school1, setschool1] = useState('');
  let [school2, setschool2] = useState('');
  let [school3, setschool3] = useState('');
  let [school4, setschool4] = useState('');

  let onschool1 = (e) => {
    setschool1(e.target.value);
  };
  let onschool2 = (e) => {
    setschool2(e.target.value);
  };
  let onschool3 = (e) => {
    setschool3(e.target.value);
  };
  let onschool4 = (e) => {
    setschool4(e.target.value);
  };

  let [봉사, set봉사] = useState('');

  let on봉사 = (e) => {
    set봉사(e.target.value);
  };

  let [교내상, set교내상] = useState('');

  let on교내상 = (e) => {
    set교내상(e.target.value);
  };

  let [임원, set임원] = useState('');

  let on임원 = (e) => {
    set임원(e.target.value);
  };

  let [미2, set미2] = useState('');
  let [음2, set음2] = useState('');
  let [체2, set체2] = useState('');

  let on미2 = (e) => {
    set미2(e.target.value);
  };

  let on음2 = (e) => {
    set음2(e.target.value);
  };

  let on체2 = (e) => {
    set체2(e.target.value);
  };

  let [미3, set미3] = useState('');
  let [음3, set음3] = useState('');
  let [체3, set체3] = useState('');

  let on미3 = (e) => {
    set미3(e.target.value);
  };

  let on음3 = (e) => {
    set음3(e.target.value);
  };

  let on체3 = (e) => {
    set체3(e.target.value);
  };

  let [역사1원점수, set역사1원점수] = useState('');
  let [역사1평균, set역사1평균] = useState('');
  let [역사1편차, set역사1편차] = useState('');

  let on역사1원점수= (e) => {
    set역사1원점수(e.target.value);
  };

  let on역사1평균 = (e) => {
    set역사1평균(e.target.value);
  };

  let on역사1편차 = (e) => {
    set역사1편차(e.target.value);
  };

  let [국어1원점수, set국어1원점수] = useState('');
  let [국어1평균, set국어1평균] = useState('');
  let [국어1편차, set국어1편차] = useState('');

  let on국어1원점수 = (e) => {
    set국어1원점수(e.target.value);
  };

  let on국어1평균 = (e) => {
    set국어1평균(e.target.value);
  };

  let on국어1편차 = (e) => {
    set국어1편차(e.target.value);
  };

  let [도덕1원점수, set도덕1원점수] = useState('');
  let [도덕1평균, set도덕1평균] = useState('');
  let [도덕1편차, set도덕1편차] = useState('');

  let on도덕1원점수 = (e) => {
    set도덕1원점수(e.target.value);
  };

  let on도덕1평균 = (e) => {
    set도덕1평균(e.target.value);
  };

  let on도덕1편차 = (e) => {
    set도덕1편차(e.target.value);
  };

  let [수학1원점수, set수학1원점수] = useState('');
  let [수학1평균, set수학1평균] = useState('');
  let [수학1편차, set수학1편차] = useState('');

  let on수학1원점수 = (e) => {
    set수학1원점수(e.target.value);
  };

  let on수학1평균 = (e) => {
    set수학1평균(e.target.value);
  };

  let on수학1편차 = (e) => {
    set수학1편차(e.target.value);
  };

  let [과학1원점수, set과학1원점수] = useState('');
  let [과학1평균, set과학1평균] = useState('');
  let [과학1편차, set과학1편차] = useState('');

  let on과학1원점수 = (e) => {
    set과학1원점수(e.target.value);
  };

  let on과학1평균 = (e) => {
    set과학1평균(e.target.value);
  };

  let on과학1편차 = (e) => {
    set과학1편차(e.target.value);
  };

  let [기가1원점수, set기가1원점수] = useState('');
  let [기가1평균, set기가1평균] = useState('');
  let [기가1편차, set기가1편차] = useState('');

  let on기가1원점수 = (e) => {
    set기가1원점수(e.target.value);
  };

  let on기가1평균 = (e) => {
    set기가1평균(e.target.value);
  };

  let on기가1편차 = (e) => {
    set기가1편차(e.target.value);
  };

  let [영어1원점수, set영어1원점수] = useState('');
  let [영어1평균, set영어1평균] = useState('');
  let [영어1편차, set영어1편차] = useState('');

  let on영어1원점수 = (e) => {
    set영어1원점수(e.target.value);
  };

  let on영어1평균 = (e) => {
    set영어1평균(e.target.value);
  };

  let on영어1편차 = (e) => {
    set영어1편차(e.target.value);
  };

  let [사회1원점수, set사회1원점수] = useState('');
  let [사회1평균, set사회1평균] = useState('');
  let [사회1편차, set사회1편차] = useState('');

  let on사회1원점수 = (e) => {
    set사회1원점수(e.target.value);
  };

  let on사회1평균 = (e) => {
    set사회1평균(e.target.value);
  };

  let on사회1편차 = (e) => {
    set사회1편차(e.target.value);
  };

  let [선택1원점수, set선택1원점수] = useState('');
  let [선택1평균, set선택1평균] = useState('');
  let [선택1편차, set선택1편차] = useState('');

  let on선택1원점수 = (e) => {
    set선택1원점수(e.target.value);
  };

  let on선택1평균 = (e) => {
    set선택1평균(e.target.value);
  };

  let on선택1편차 = (e) => {
    set선택1편차(e.target.value);
  };

  let [역사2원점수, set역사2원점수] = useState('');
  let [역사2평균, set역사2평균] = useState('');
  let [역사2편차, set역사2편차] = useState('');

  let on역사2원점수 = (e) => {
    set역사2원점수(e.target.value);
  };

  let on역사2평균 = (e) => {
    set역사2평균(e.target.value);
  };

  let on역사2편차 = (e) => {
    set역사2편차(e.target.value);
  };

  let [국어2원점수, set국어2원점수] = useState('');
  let [국어2평균, set국어2평균] = useState('');
  let [국어2편차, set국어2편차] = useState('');

  let on국어2원점수 = (e) => {
    set국어2원점수(e.target.value);
  };

  let on국어2평균 = (e) => {
    set국어2평균(e.target.value);
  };

  let on국어2편차 = (e) => {
    set국어2편차(e.target.value);
  };

  let [도덕2원점수, set도덕2원점수] = useState('');
  let [도덕2평균, set도덕2평균] = useState('');
  let [도덕2편차, set도덕2편차] = useState('');

  let on도덕2원점수 = (e) => {
    set도덕2원점수(e.target.value);
  };

  let on도덕2평균 = (e) => {
    set도덕2평균(e.target.value);
  };

  let on도덕2편차 = (e) => {
    set도덕2편차(e.target.value);
  };

  let [수학2원점수, set수학2원점수] = useState('');
  let [수학2평균, set수학2평균] = useState('');
  let [수학2편차, set수학2편차] = useState('');

  let on수학2원점수 = (e) => {
    set수학2원점수(e.target.value);
  };

  let on수학2평균 = (e) => {
    set수학2평균(e.target.value);
  };

  let on수학2편차 = (e) => {
    set수학2편차(e.target.value);
  };

  let [과학2원점수, set과학2원점수] = useState('');
  let [과학2평균, set과학2평균] = useState('');
  let [과학2편차, set과학2편차] = useState('');

  let on과학2원점수 = (e) => {
    set과학2원점수(e.target.value);
  };

  let on과학2평균 = (e) => {
    set과학2평균(e.target.value);
  };

  let on과학2편차 = (e) => {
    set과학2편차(e.target.value);
  };

  let [기가2원점수, set기가2원점수] = useState('');
  let [기가2평균, set기가2평균] = useState('');
  let [기가2편차, set기가2편차] = useState('');

  let on기가2원점수 = (e) => {
    set기가2원점수(e.target.value);
  };

  let on기가2평균 = (e) => {
    set기가2평균(e.target.value);
  };

  let on기가2편차 = (e) => {
    set기가2편차(e.target.value);
  };

  let [영어2원점수, set영어2원점수] = useState('');
  let [영어2평균, set영어2평균] = useState('');
  let [영어2편차, set영어2편차] = useState('');

  let on영어2원점수 = (e) => {
    set영어2원점수(e.target.value);
  };

  let on영어2평균 = (e) => {
    set영어2평균(e.target.value);
  };

  let on영어2편차 = (e) => {
    set영어2편차(e.target.value);
  };

  let [사회2원점수, set사회2원점수] = useState('');
  let [사회2평균, set사회2평균] = useState('');
  let [사회2편차, set사회2편차] = useState('');

  let on사회2원점수 = (e) => {
    set사회2원점수(e.target.value);
  };

  let on사회2평균 = (e) => {
    set사회2평균(e.target.value);
  };

  let on사회2편차 = (e) => {
    set사회2편차(e.target.value);
  };

  let [선택2원점수, set선택2원점수] = useState('');
  let [선택2평균, set선택2평균] = useState('');
  let [선택2편차, set선택2편차] = useState('');

  let on선택2원점수 = (e) => {
    set선택2원점수(e.target.value);
  };

  let on선택2평균 = (e) => {
    set선택2평균(e.target.value);
  };

  let on선택2편차 = (e) => {
    set선택2편차(e.target.value);
  };

  전교생 += ((Number(school1) + Number(school2) + Number(school3) + Number(school4)) / 4)

  전교생 = Math.round(전교생)

  let ABCDE = 0
  let ABCDE2 = 0

  let ycn_A = 0
  let ycn_B = 0
  let ycn_C = 0

  function cheakycn(value) {
    if (value === 'A') {
      ycn_A += 1
    }
    else if (value === 'B') {
      ycn_B += 1
    }
    else if (value === 'C') {
      ycn_C += 1
    }
  } 

  function cheakABCDE(value) {
    if (Number(value) >= 90) {
      ABCDE += Number(5)
    }
    else if (Number(value) >= 80 && Number(value) < 90) {
      ABCDE += Number(4)
    }
    else if (Number(value) >= 70 && Number(value) < 80) {
      ABCDE += Number(3) 
    }
    else if (Number(value) >= 60 && Number(value) < 70) {
      ABCDE += Number(2)
    }
    else {
      ABCDE += Number(1)
    }
  }

  function cheakABCDE2(value) {
    if (Number(value) >= 90) {
      ABCDE2 += Number(5)
    }
    else if (Number(value) >= 80 && Number(value) < 90) {
      ABCDE2 += Number(4)
    }
    else if (Number(value) >= 70 && Number(value) < 80) {
      ABCDE2 += Number(3)
    }
    else if (Number(value) >= 60 && Number(value) < 70) {
      ABCDE2 += Number(2)
    }
    else {
      ABCDE2 += Number(1)
    }
  }

  cheakycn(미2)
  cheakycn(체2)
  cheakycn(음2)
  cheakycn(미3)
  cheakycn(체3)
  cheakycn(음3)

  cheakABCDE(역사1원점수)
  cheakABCDE(국어1원점수)
  cheakABCDE(도덕1원점수)
  cheakABCDE(수학1원점수)
  cheakABCDE(과학1원점수)
  cheakABCDE(기가1원점수)
  cheakABCDE(영어1원점수)
  cheakABCDE(사회1원점수)
  cheakABCDE(선택1원점수)

  cheakABCDE2(역사2원점수)
  cheakABCDE2(국어2원점수)
  cheakABCDE2(도덕2원점수)
  cheakABCDE2(수학2원점수)
  cheakABCDE2(과학2원점수)
  cheakABCDE2(기가2원점수)
  cheakABCDE2(영어2원점수)
  cheakABCDE2(사회2원점수)
  cheakABCDE2(선택2원점수)

  let 이수과목총점 = (Number(역사1원점수)
            + Number(국어1원점수)
            + Number(도덕1원점수)
            + Number(수학1원점수)
            + Number(과학1원점수)
            + Number(기가1원점수)
            + Number(영어1원점수)
            + Number(사회1원점수)
            + Number(선택1원점수))

  let 과목평균합 = (Number(역사1평균)
          + Number(국어1평균)
          + Number(도덕1평균)
          + Number(수학1평균)
          + Number(과학1평균)
          + Number(기가1평균)
          + Number(영어1평균)
          + Number(사회1평균)
          + Number(선택1평균))

  let 표준편차합 = (Number(역사1편차)
          + Number(국어1편차)
          + Number(도덕1편차)
          + Number(수학1편차)
          + Number(과학1편차)
          + Number(기가1편차)
          + Number(영어1편차)
          + Number(사회1편차)
          + Number(선택1편차))

  let 이수과목총점2 = (Number(역사2원점수)
              + Number(국어2원점수)
              + Number(도덕2원점수)
              + Number(수학2원점수)
              + Number(과학2원점수)
              + Number(기가2원점수)
              + Number(영어2원점수)
              + Number(사회2원점수)
              + Number(선택2원점수))

  let 과목평균합2 = (Number(역사2평균)
              + Number(국어2평균)
              + Number(도덕2평균)
              + Number(수학2평균)
              + Number(과학2평균)
              + Number(기가2평균)
              + Number(영어2평균)
              + Number(사회2평균)
              + Number(선택2평균))

  let 표준편차합2 = (Number(역사2편차)
              + Number(국어2편차)
              + Number(도덕2편차)
              + Number(수학2편차)
              + Number(과학2편차)
              + Number(기가2편차)
              + Number(영어2편차)
              + Number(사회2편차)
              + Number(선택2편차))

  let volun = 0

  let p1 = (Number(이수과목총점) / Number(9))
  let p2 = (Number(이수과목총점2) / Number(9))

  평균 = (((Number(p1) + Number(p2)) / Number(2)).toFixed(1))

  if (봉사 >= 40) {
    volun += 20
  }
  else if (봉사 >= 35 && 봉사 < 40){
    volun += 19
  }
  else if (봉사 >= 30 && 봉사 < 35) {
    volun += 18
  }
  else if (봉사 >= 25 && 봉사 < 30) {
    volun += 17
  }
  else if (봉사 >= 20 && 봉사 < 25) {
    volun += 16
  }
  else if (봉사 >= 15 && 봉사 < 20) {
    volun += 15
  }
  else if (봉사 >= 10 && 봉사 < 15) {
    volun += 14
  }
  else if (봉사 >= 5 && 봉사 < 10) {
    volun += 13
  }
  else {
    volun += 12
  }

  let sang = 0

  if (교내상 == 4) {
    sang += 2
  }
  else if (교내상 == 3) {
    sang += 1.5
  }
  else if (교내상 == 2) {
    sang += 1
  }
  else if (교내상 == 1) {
    sang += 0.5
  }

  sang += (Number(임원) / 10)

  let ekm = 10 - Number(sang)
  
  if (ekm >= 8) {
    sang += 8
  }
  else {
    sang += Number(ekm)
  }

  let score = 0
  let score2 = 0

  if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 18) || 결석1 >= 6) {
    score += 2.4
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 15 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 18) || (결석1 >= 5 && 결석1 <= 6))) {
    score += 3.0
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 12 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 15) || (결석1 >= 4 && 결석1 <= 5))) {
    score += 3.6
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 9 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 12) || (결석1 >= 3 && 결석1 <= 4))) {
    score += 4.2
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 6 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 9) || (결석1 >= 2 && 결석1 <= 3))) {
    score += 4.8
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 3 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 6) || (결석1 >= 1 && 결석1 <= 2))) {
    score += 5.4
  }
  else if (((Number(결과1) + Number(지각1) + Number(조퇴1)) >= 0 && ((Number(결과1) + Number(지각1) + Number(조퇴1)) <= 3) || (결석1 >= 0 && 결석1 <= 1))) {
    score += 6
  }

  if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 18) || 결석2 >= 6) {
    score2 += 2.8
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 15 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 18) || (결석2 >= 5 && 결석2 <= 6))) {
    score2 += 3.5
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 12 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 15) || (결석2 >= 4 && 결석2 <= 5))) {
    score2 += 4.2
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 9 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 12) || (결석2 >= 3 && 결석2 <= 4))) {
    score2 += 4.9
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 6 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 9) || (결석2 >= 2 && 결석2 <= 3))) {
    score2 += 5
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 3 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 6) || (결석2 >= 1 && 결석2 <= 2))) {
    score2 += 6.3
  }
  else if (((Number(결과2) + Number(지각2) + Number(조퇴2)) >= 0 && ((Number(결과2) + Number(지각2) + Number(조퇴2)) <= 3) || (결석2 >= 0 && 결석2 <= 1))) {
    score2 += 7
  }

  let Km = (Number(2) * (Number(ABCDE) / Number(9)))
  let Km2 = (Number(2) * (Number(ABCDE2) / Number(9)))

  let ycn = (Number(3) * Number(ycn_A)) + (Number(2) * Number(ycn_B)) + (Number(ycn_C))
  let ycn2 = ((Number(ycn_A) + Number(ycn_B) + Number(ycn_C)) * Number(3))

  let ycn3 = ((Number(ycn) / Number(ycn2)) * 20)

  let F1 = ((((Number(이수과목총점) - Number(과목평균합)) / Number(표준편차합)) * Number(10)) + Number(Km))
  let F2 = ((((Number(이수과목총점2) - Number(과목평균합2)) / Number(표준편차합2)) * Number(10)) + Number(Km2))

  교과총점 += (F1 * 2) + (F2 * 2) + Number(ycn3) + Number(volun) + Number(sang) + Number(score) + Number(score2 * 2) + Number(12) + Number(4.433)

  console.log('=======')
  console.log(F1 * 2)
  console.log(F2 * 2)
  console.log(ycn3 )
  console.log(volun)
  console.log(sang)
  console.log(score)
  console.log(score2 * 2)
  console.log('=======')

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
        <span id="c">
          1학년
        </span>
        <input id="small" maxlength="2" class="inputs" value={결석1} onChange={on결석1} placeholder="무단결석" />
        <input id="small" maxlength="2" class="inputs" value={지각1} onChange={on지각1} placeholder="무단지각" />
        <input id="small" maxlength="2" class="inputs" value={조퇴1} onChange={on조퇴1} placeholder="무단조퇴" />
        <input id="small" maxlength="2" class="inputs" value={결과1} onChange={on결과1} placeholder="무단결과" />
      </div>

      <div id="len">
        <span id="c">
          2학년
        </span>
        <input id="small" maxlength="2" class="inputs" value={결석2} onChange={on결석2} placeholder="무단결석" />
        <input id="small" maxlength="2" class="inputs" value={지각2} onChange={on지각2} placeholder="무단지각" />
        <input id="small" maxlength="2" class="inputs" value={조퇴2} onChange={on조퇴2} placeholder="무단조퇴" />
        <input id="small" maxlength="2" class="inputs" value={결과2} onChange={on결과2} placeholder="무단결과" />
      </div>

      <div id="len">
        <br />
      </div>

      <div id="len">
        <input id="middle" maxlength="1" class="inputs" value={미2} onChange={on미2} placeholder="2학년 미술 등급" />
        <input id="middle" maxlength="1" class="inputs" value={음2} onChange={on음2} placeholder="2학년 음악 등급" />
        <input id="middle" maxlength="1" class="inputs" value={체2} onChange={on체2} placeholder="2학년 체육 등급" />
      </div>

      <div id="len">
        <input id="middle" maxlength="1" class="inputs" value={미3} onChange={on미3} placeholder="3학년 미술 등급" />
        <input id="middle" maxlength="1" class="inputs" value={음3} onChange={on음3} placeholder="3학년 음악 등급" />
        <input id="middle" maxlength="1" class="inputs" value={체3} onChange={on체3} placeholder="3학년 체육 등급" />
      </div>

      <div id="len">
        <br />
      </div>

      <div id="iid">
        해당 학기 성적이 없는 경우&nbsp;
        <span id="mark">
          100, 0, 0
        </span> 
        으로 채워주세요.
      </div>
      
      <div id="len">
        <br />
      </div>

      <div id="len">
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 역사
        </span>
        <input maxlength="3" class="inputs" value={역사1원점수} onChange={on역사1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={역사1평균} onChange={on역사1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={역사1편차} onChange={on역사1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 국어
        </span>
        <input maxlength="3" class="inputs" value={국어1원점수} onChange={on국어1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={국어1평균} onChange={on국어1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={국어1편차} onChange={on국어1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 도덕
        </span>
        <input maxlength="3" class="inputs" value={도덕1원점수} onChange={on도덕1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={도덕1평균} onChange={on도덕1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={도덕1편차} onChange={on도덕1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 수학
        </span>
        <input maxlength="3" class="inputs" value={수학1원점수} onChange={on수학1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={수학1평균} onChange={on수학1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={수학1편차} onChange={on수학1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 과학
        </span>
        <input maxlength="3" class="inputs" value={과학1원점수} onChange={on과학1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={과학1평균} onChange={on과학1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={과학1편차} onChange={on과학1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 기가
        </span>
        <input maxlength="3" class="inputs" value={기가1원점수} onChange={on기가1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={기가1평균} onChange={on기가1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={기가1편차} onChange={on기가1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 영어
        </span>
        <input maxlength="3" class="inputs" value={영어1원점수} onChange={on영어1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={영어1평균} onChange={on영어1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={영어1편차} onChange={on영어1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 사회
        </span>
        <input maxlength="3" class="inputs" value={사회1원점수} onChange={on사회1원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={사회1평균} onChange={on사회1평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={사회1편차} onChange={on사회1편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 1학기 선택
        </span>
        <input maxlength="3" class="inputs" value={선택1원점수} onChange={on선택1원점수} placeholder="원점수" />
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
        <input maxlength="3" class="inputs" value={역사2원점수} onChange={on역사2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={역사2평균} onChange={on역사2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={역사2편차} onChange={on역사2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 국어
        </span>
        <input maxlength="3" class="inputs" value={국어2원점수} onChange={on국어2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={국어2평균} onChange={on국어2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={국어2편차} onChange={on국어2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 도덕
        </span>
        <input maxlength="3" class="inputs" value={도덕2원점수} onChange={on도덕2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={도덕2평균} onChange={on도덕2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={도덕2편차} onChange={on도덕2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 수학
        </span>
        <input maxlength="3" class="inputs" value={수학2원점수} onChange={on수학2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={수학2평균} onChange={on수학2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={수학2편차} onChange={on수학2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 과학
        </span>
        <input maxlength="3" class="inputs" value={과학2원점수} onChange={on과학2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={과학2평균} onChange={on과학2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={과학2편차} onChange={on과학2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 기가
        </span>
        <input maxlength="3" class="inputs" value={기가2원점수} onChange={on기가2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={기가2평균} onChange={on기가2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={기가2편차} onChange={on기가2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 영어
        </span>
        <input maxlength="3" class="inputs" value={영어2원점수} onChange={on영어2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={영어2평균} onChange={on영어2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={영어2편차} onChange={on영어2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 사회
        </span>
        <input maxlength="3" class="inputs" value={사회2원점수} onChange={on사회2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={사회2평균} onChange={on사회2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={사회2편차} onChange={on사회2편차} placeholder="표준편차" />
        <br />
      </div>

      <div id="len">
        <span id="c">
          2학년 2학기 선택
        </span>
        <input maxlength="3" class="inputs" value={선택2원점수} onChange={on선택2원점수} placeholder="원점수" />
        <input maxlength="4" class="inputs" value={선택2평균} onChange={on선택2평균} placeholder="과목평균" />
        <input maxlength="4" class="inputs" value={선택2편차} onChange={on선택2편차} placeholder="표준편차" />
        <br />
      </div>

      <div>
        <div id="k">
          내신성적 총점은&nbsp;
          <span id="mark">
            {Number(교과총점).toFixed(3)}점
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