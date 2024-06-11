import React from 'react';
import './Leave.scss';

const Leave = () => { 
  return (
    <main className='Leave_main'>
        <div className='Leave_body'>
            <div className='Leave_box'>
                <div className='Leave_title_box'>
                    <p className='Leave_title'>회원 탈퇴 신청</p>
                    <p className='Leave_description'>회원 탈퇴 전 반드시 유의사항을 확인하시길 바랍니다.</p>
                </div>
                <form className='Leave_form'>
                    <div className='Leave_info'>
                        <strong>회원 탈퇴 시 유의사항</strong>
                        <ul>
                            <li>
                                <p>회원 탈퇴를 하시려면 사용 중이던 상품을 해지하셔야 합니다.
                                   <br></br>(회원정보 수정&gt;해지)
                                </p>
                            </li>
                            <li>
                                <p>회원 탈퇴 시 입력하신 개인정보는 개인정보처리방침에 따라 폐기되며,
                                   <br></br>재가입 시에도 기존 정보는 복원되지 않습니다.
                                </p>
                            </li>
                            <li>
                                <p>탈퇴 시 3개월간 재가입이 불가능합니다.</p>
                            </li>
                        </ul>
                    </div> 
                    <div className='Leave_input'>
                        <input id="id" name="id" placeholder=" "/>
                        <label htmlFor="id" className="floating_label">
                        아이디&nbsp;
                        </label>
                    </div>
                    <div className='Leave_input'>
                        <input id="pwd" name="pwd" placeholder=" "/>
                        <label htmlFor="pwd" className="floating_label">
                        비밀번호&nbsp;<span>(필수)</span>
                        </label>
                    </div>
                    <button type='submit' className='Leave_submit'>회원 탈퇴</button>
                    <button type='cancel' className='Leave_cancel'>돌아가기</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Leave;
