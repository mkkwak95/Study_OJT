import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    // 로그아웃 버튼 눌렀을 때
    const handleLogout = () => {
        const confirmed = window.confirm("정말 로그아웃 하시겠습니까?");
        if (confirmed) {
        window.location.href = '/Login';
    }
    };

    
    return (
        <header className='header_all'>
            <div className='header_body'>
                <h1 class='header_logo_img'>
                    <a href='/main'>
                        <img src='https://centerface.co.kr/images/logo_01.png' 
                             alt='CenterFace'
                             width="190"
                             height="33.28"/>
                    </a>
                </h1>
                <nav>
                    <ul className='nav_bar'>
                        <li className='nav_bar_detail'>
                            <Link className='nav_bar_text' to="/">홈</Link>
                        </li>
                        <li className='nav_bar_detail'>
                            <Link className='nav_bar_text' to="/reservation">회의예약</Link>
                        </li>
                        <li className='nav_bar_detail'>
                            <Link className='nav_bar_text' to="/list">회의목록</Link>
                        </li>
                        <li className='nav_bar_detail'>
                            <Link className='nav_bar_text' to="/faq">자주 묻는 질문</Link>
                        </li>
                        <li className='nav_bar_detail'>
                            <button className="nav_bar_text" onClick={handleLogout}>로그아웃</button>
                        </li>
                        <li className='nav_bar_detail'>
                            <a href='/mypage'>
 		                    <img src='https://meet.centerface.co.kr/images/profile_00.png' 
                             alt='프로필'  
                             width='30'
                             height="30" />
                            <span>kmlee</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
 };

    export default Header; 

    /*         <header className='header'>
            <div className='header_size'>
                <Link className='tilon_logo' to="/">
                <img 
                 src='https://centerface.co.kr/images/logo_01.png' 
                 width="190"
                 height="33.28"
                 alt='centerface'></img>
                </Link>
            <ul className="navigation_bar"> 
                <li><Link className="nav_bar_text" to="/main">
                    홈
                </Link></li>
                <li><Link className="nav_bar_text" to="/reservation">
                    회의예약
                </Link></li>
                <li><Link className="nav_bar_text" to="/list">
                    회의목록
                </Link></li>
                <li><Link className="nav_bar_text" to="/faq">
                    자주 묻는 질문
                </Link></li>
                <li><Link className="nav_bar_text" to="/Login">
                    로그인
                </Link></li>
                <li><button className="nav_bar_text" onClick={handleLogout}>
                    로그아웃
                </button></li>
                <li><Link className="nav_bar_text" to="/join">
                    가입
                </Link></li>
            </ul>
            </div>
        </header> 
        */