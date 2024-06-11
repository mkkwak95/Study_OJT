import React from 'react';
import './ForgotPassword.scss';

const ForgotPassword = () => { 
  return (
    <main className='Forgot_main'>
      <div className='Forgot_body'>
        <div className='Forgot_box'>
          <div className='Forgot_title_box'>
            <p className='Forgot_title'>비밀번호 찾기</p>
            <p className='Forgot_description'>비밀번호 재설정을 위해 가입시 등록한 이메일 주소를 입력해 주세요.</p>
          </div>
          <form className='Forgot_form'>
            <div className='Forgot_input'>
                  <input className='Forgot_inputbox' id="email" name="email" placeholder=" "/>
                  <label className='Forgot_inputlabel' htmlFor="email">
                  이메일&nbsp;<span className='Forgot_span'>(필수)</span>
                  </label>
                  <p className='Forgot_p'>필수 정보입니다.</p>
            </div>
            <button type='button' className='Forgot_button_submit'>이메일 발송</button>
            <button type='button' className='Forgot_button_join'>회원가입</button>
          </form>
        </div>
      </div>
    </main>
  )
  
} 

export default ForgotPassword;