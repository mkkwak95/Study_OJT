import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    return (
          <main>
            <section className='main_banner_sec'>
              <div className='bn_body'>
                <div className='bn_text'>
                  <h2>CenterFace</h2>
                  <p className='bn_text_sub'>
                  CenterFace는 어떤 환경이든 능동적으로 적응하여 최적의 화상회의를 제공합니다.
                  <br></br>
                  CenterFace와 함께 평범한 화상회의를 특별하게 만나보세요
                  </p>
                  <NavLink to ='/reservation'>
                  {/*  로그인 기능을 구현한다면... 
                  <NavLink to={isLoggedIn ? '/reservation' : '/login'}> */}
                  <button className="banner_start_button">회의 시작하기</button>
                  </NavLink>
                </div>
              </div>
            </section>

            <section className='main_info_sec'>
              <div className='main_info'>
                <p className='main_info_title'>
                  화상회의, 왜 <span>CenterFace</span> 일까요?
                </p>
                <ul className='main_info_box'>
                  <li className='pr_box'>
                    <span className='pr_text_num'> 01 </span>
                    <strong>강력한 보안</strong>
                    <p>보안 및 IT 정책에 따라 액세스 권한을 등급별로 설정할 수 있습니다. 
                       또한 IP 주소, 사용자 패턴, 메시지 내용 등을 완벽하게 보호합니다.</p>
                  </li>
                  <li className='pr_box'>
                    <span className='pr_text_num'> 02 </span>
                    <strong>다양한 기능</strong>
                    <p>회의 시 해상도 설정 및 공유 기능, 
                       발언권 및 이모지, 투표, 무제한 녹화 기능을 제공합니다.</p>
                  </li>
                  <li className='pr_box'>
                    <span className='pr_text_num'> 03 </span>
                    <strong>자유로운 확장성</strong>
                    <p>다양한 국내 오픈소스와의 통합 기능을 제공하여 자유롭게 기능 커스터마이징이 가능합니다.</p>
                  </li>
                  <li className='pr_box'>
                    <span className='pr_text_num'> 04 </span>
                    <strong>간편한 회의 환경</strong>
                    <p>별도의 프로그램 설치 없이 클릭 한 번으로 언제든지 간편하게 화상회의가 가능합니다.</p>
                  </li>
                  <li className='pr_box'>
                    <span className='pr_text_num'> 05 </span>
                    <strong>장애 및 오류 업무 자동화</strong>
                    <p>사용자가 봇을 설정하여 오류가 발생했을 때 자동으로 채널에 알리고 
                       관리자 채널에 발신을 통해 사고에 대한 신속한 대응이 가능합니다.</p>
                  </li>
                </ul>
              </div>
            </section>
          </main>
      );
    };


export default Home;

/*<div className='main'>
            <section className='main_banner'>
            <img className='main_banner_img' 
                src='https://centerface.co.kr/images/banner_01.png'
                alt='(주)틸론 배너'
            ></img>
            <div className='main_banner_text'>
            <h2 color="#222831" class="banner_title">
                CenterFace</h2>
            <p color="#222831" class="banner_text">
                CenterFace는 어떤 환경이든 능동적으로 적응하여 최적의 화상회의를 제공합니다.<br></br>
                CenterFace와 함께 평범한 화상회의를 특별하게 만나보세요</p>
            <button className="banner_start_button">회의 시작하기</button>
            </div>
            </section>
            
            <section className='main_pr_box'>
            <div className='main_pr'>
            <p className='pr_title'>화상회의, 왜 <span className='pr_title_keyword'>CenterFace</span> 일까요?</p>
            <ul className='pr_section_box'>
              <li className='pr_box'><span className='pr_text_num'> 01 </span>
              <h3>강력한 보안</h3>
              <p>보안 및 IT 정책에 따라 액세스 권한을 등급별로 설정할 수 있습니다. 
              또한 IP 주소, 사용자 패턴, 메시지 내용 등을 완벽하게 보호합니다.</p>
             </li>
             <li className='pr_box'><span className='pr_text_num'> 02 </span>
              <h3>다양한 기능</h3>
              <p>회의 시 해상도 설정 및 공유 기능, 
              발언권 및 이모지, 투표, 무제한 녹화 기능을 제공합니다.</p>
             </li>
             <li className='pr_box'><span className='pr_text_num'> 03 </span>
              <h3>자유로운 확장성</h3>
              <p>다양한 국내 오픈소스와의 통합 기능을 제공하여 자유롭게 기능 커스터마이징이 가능합니다.</p>
             </li>
             <li className='pr_box'><span className='pr_text_num'> 04 </span>
              <h3>간편한 회의 환경</h3>
              <p>별도의 프로그램 설치 없이 클릭 한 번으로 언제든지 간편하게 화상회의가 가능합니다.</p>
             </li>
             <li className='pr_box'><span className='pr_text_num'> 05 </span>
              <h3>장애 및 오류 업무 자동화</h3>
              <p>사용자가 봇을 설정하여 오류가 발생했을 때 자동으로 채널에 알리고 
                관리자 채널에 발신을 통해 사고에 대한 신속한 대응이 가능합니다.</p>
             </li>
            </ul>
            </div>
            </section>
          </div>*/