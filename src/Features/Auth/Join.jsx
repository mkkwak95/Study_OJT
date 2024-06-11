import React, { useState } from 'react';
import './Join.scss';
import Join_modaluse from './Join_modaluse';
import Join_modalinfo from './Join_modalinfo';

const Join = () => {
    const [showModaluse, setShowModaluse] = useState(false);
    const [showModalinfo, setShowModalinfo] = useState(false);

    const handleClickUse = () => {
        setShowModaluse(true);
    }

    const closeUseModal = () => {
        setShowModaluse(false)
    }
    
    const handleClickInfo = () => {
        setShowModalinfo(true);
    }

    const closeInfoModal = () => {
        setShowModalinfo(false)
    }

    return (
        <main className='Join_main'>
          <div className='Join_body'>
            <div className='Join_box'>
            <div className='Join_title_box'>
            <p className='Join_title'>CenterFace 회원가입</p>
            <p className='Join_description'>쉽고 간편한 회원가입으로 CenterFace를 사용하실 수 있습니다.</p>
            </div>
            
            <form className='Join_form_group'>
            <div className='Join_input'>
            <input className='Join_inputbox' id="name" name="name" placeholder=" "/>
            <label htmlFor="name" className="floating_label">
                성함&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div>

            <div className='Join_input'>
            <input className='Join_inputbox' id="id" name="id" placeholder=" "/>
            <label htmlFor="id" className="floating_label">
                아이디&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div> 

            <div className='Join_input'>
            <input className='Join_inputbox' name="email" placeholder=" "/>
            <label htmlFor="email" className="floating_label">
                이메일&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div>

            <div className='Join_input'>
            <input className='Join_inputbox' id="pwd" name="pwd" placeholder=" "/>
            <label htmlFor="pwd" className="floating_label">
                비밀번호&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div>

            <div className='Join_input'>
            <input className='Join_inputbox' id="pwdcheck" name="pwdcheck" placeholder=" "/>
            <label htmlFor="pwdcheck" className="floating_label">
                비밀번호 확인&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div>

            <div className='Join_input'>
            <input className='Join_inputbox' id="numcheck" name="numcheck" placeholder=" "/>
            <label htmlFor="numcheck" className="floating_label">
                인증 번호&nbsp;<span>(필수)</span>
            </label>
            <p className='Join_alert_msg'>필수 정보입니다.</p>
            </div>
            
            <button className='button_join' type='submit'>가입하기</button>
            <button className='button_cancel' type='button'>취소</button>

            <div className='Join_check_box'>
                <div className='Join_agree'>
                <input className='Join_check' name="svc" type="checkbox">
                </input>
                <p className='Join_agree_title'> 이용약관 동의</p>
                </div>
                <button type="button" className='Join_button_read' onClick={handleClickUse}>내용 보기</button>
                {showModaluse && <Join_modaluse closeModal={closeUseModal}/>}
            </div>

            <div className='Join_check_box'>
                <div className='Join_agree'>
                <input className='Join_check' name="svc" type="checkbox">
                </input>
                <p className='Join_agree_title'> 개인정보 수집 및 이용에 대한 동의</p>
                </div>
                <button type="button" className='Join_button_read' onClick={handleClickInfo}>내용 보기</button>
                {showModalinfo && <Join_modalinfo closeModal={closeInfoModal}/>}
            </div>

            <div className='Join_check_box'>
                <div className='Join_agree'>
                <input className='Join_check' name="svc" type="checkbox">
                </input>
                <p className='Join_agree_title'> 사용자 설문 조사 메일 수신 동의</p>
                </div>
            </div>
            </form>
            
          </div>
        </div>
        </main>
    )
};

export default Join;

/* import React from 'react';
import { Link } from 'react-router-dom';
import './Join.scss'; // SCSS 파일을 import

const Join = () => {
    return (
        <main className="join_main">
            <div className="join_form_container">
                <h1>회원가입</h1>
                <form action="/signup" method="post">
                    <div className="form_group">
                        <label htmlFor="username">아이디</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="confirm_password">비밀번호 확인</label>
                        <input type="password" id="confirm_password" name="confirm_password" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <button type="submit" className="join_button">회원가입</button>
                </form>
                <div className="join_links">
                    <Link to="/login">로그인</Link>
                    <Link to="/forgot-password">비밀번호 찾기</Link>
                </div>
            </div>
        </main>
    );
};

export default Join; */