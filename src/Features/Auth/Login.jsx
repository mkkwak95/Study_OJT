import React from 'react';
import './Login.scss';

const Login = () => {
 
    return (
        <main className='login_main'>
            <div className='login_body'>
            <div className='login_box'>
                <div className='login_left'>
                <h2 className='login_title_txt'>CenterFace Login</h2>
                <p className='login_description_txt'>CenterFace와 함께 평범한 화상회의를
                <br></br>특별하게 만나보세요</p>
                </div>

                <form className='login_right'>
                <div className='login_input'>
                    <input className='login_inputbox' id="id" name="id" placeholder=" "/>
                    <label htmlFor="id" className="floating_label">
                    아이디&nbsp;</label>
                </div>
                <div className='login_input'>
                    <input className='login_inputbox' id="pwd" name="pwd" placeholder=" "/>
                    <label htmlFor="pwd" className="floating_label">
                    비밀번호&nbsp;</label>
                </div>
                <button className='button_login_submit' type='submit'>로그인</button>
                <div className='login_check_box'>
                    <div className='login_agree'>
                    <input className='login_check' name="save" type="checkbox">
                    </input>
                    <p className='login_save_id'>아이디 저장</p>
                    </div>
                    <div className='login_agree'>
                    <input className='login_check' name="save" type="checkbox">
                    </input>
                    <p className='login_save_id'>비밀번호 저장</p>
                    </div>
                </div>
                <button className='button_login' type='button'>비밀번호 찾기</button>
                <button className='button_login' type='button'>회원가입</button>
                </form>
            </div>
            </div>
        </main>
    )

}

export default Login;

/*import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss'; // SCSS 파일을 import

const Login = () => {
    return (
        <main className="login_main">
            <div className="login_form_container">
                <h1>로그인</h1>
                <form action="/login" method="post">
                    <div className="form_group">
                        <label htmlFor="username">아이디</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login_button">로그인</button>
                </form>
                <div className="login_links">
                    <Link to="/signup">회원가입</Link>
                    <Link to="/forgot-password">비밀번호 찾기</Link>
                </div>
            </div>
        </main>
    );
};

export default Login;*/