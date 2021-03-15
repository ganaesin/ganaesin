import React, { useState } from 'react';
import $ from "jquery";

const Nav = () => {

  $(".inputs").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('.inputs').focus();
    }
  });
  
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

  return (
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
  );
  }
export default Nav;