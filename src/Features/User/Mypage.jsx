import React from 'react';
import './Mypage.scss';

const Mypage = () => { 

  return (
    <main className='Mypage_main'>
      <div className='Mypage_body'>
        <div className='Mypage_box'>
          <div className='Mypage_title'>
            <p className="Mypage_title_text">마이페이지</p>
            <p className="Mypage_description">마이페이지에서는 연락처 등 수정이 가능합니다.</p>
          </div>
          <form className='Mypage_form'>
            <div className='Mypage_input'>
                  <input id="name" name="name" placeholder=" " value="(주)틸론"/>
                  <label htmlFor="name" className="floating_label">
                  성함&nbsp;
                  </label>
                  <p></p>
            </div>
            <div className='Mypage_input'>
                  <input id="email" name="email" placeholder=" " value="tilon@tl.com"/>
                  <label htmlFor="email" className="floating_label">
                  이메일&nbsp;<span>(필수)</span>
                  </label>
                  <p>필수 정보입니다.</p>
            </div>
 
            <div className='Mypage_input'>
                  <input id="pwd" name="pwd" placeholder=" "/>
                  <label htmlFor="pwd" className="floating_label">
                  비밀번호&nbsp;<span>(필수)</span>
                  </label>
                  <p>필수 정보입니다.</p>
            </div>

            <div className='Mypage_input'>
                  <input id="newpwd" name="newpwd" placeholder=" "/>
                  <label htmlFor="newpwd" className="floating_label">
                  비밀번호&nbsp;<span>(필수)</span>
                  </label>
                  <p>필수 정보입니다.</p>
            </div>

            <div className='Mypage_input'>
                  <input id="newpwdcheck" name="newpwdcheck" placeholder=" "/>
                  <label htmlFor="newpwdcheck" className="floating_label">
                  비밀번호 확인&nbsp;<span>(필수)</span>
                  </label>
                  <p>필수 정보입니다.</p>
            </div>

            <button type='submit' className='Mypage_submit'>회원정보 수정</button>
            <button type='cancel' className='Mypage_cancel'>취소</button>

            <a className='leave_request' href="/leave">회원 탈퇴 신청</a> 
          </form>
        </div>
      </div>
    </main>
  )
}

export default Mypage;