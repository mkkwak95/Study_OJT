import React from 'react'
import './Footer.scss';

const Footer = () => {
    return ( 
      <footer className='footer_all'>
        
        <div className='footer_body'>
          <h2 className='footer_tilon_img'>
            <img src="https://centerface.co.kr/images/logo_02.png"
                 className='tilon_footer_img'
                 alt="(주)틸론"></img>
          </h2>
          <div className='footer_tilon_info'>
            <dl className='footer_info_box'>
              <div className='footer_info_text'>
                <dt>주식회사</dt>
                <dd>틸론</dd>
                <dt>대표</dt>
                <dd>최백준, 최경원</dd>
                <dt>대표전화</dt>
                <dd>02-2627-9000</dd>
                <dt>FAX</dt>
                <dd>02-2627-9099</dd>
                <dt>사업자번호</dt>
                <dd>119-81-49757</dd>
                <dt>통신판매업신고번호</dt>
                <dd>2020-서울강서-2069</dd>
              </div>
            </dl>

            <address>서울 법인 : (07789) 서울시 강서구 마곡중앙14로 22</address>
            <address>제주 법인 : (63309) 제주특별자치도 제주시 첨단로 213-3 311, 312호</address>
            <small>©TILON Co., Ltd. All Rights Reserved.</small>
          </div>
        </div>
      </footer>
      );
    };

export default Footer;

/*
        <>
          <footer className='footer_all'>
              <div className='footer_inbox'>
                <div className='tilon_img_place'>
                <h2 className="tilon_img_box">
                    <img src="https://centerface.co.kr/images/logo_02.png"
                     className='tilon_footer_img'
                     alt="(주)틸론"></img>
                </h2>
                </div>
                <div className="tilon_info_box">
                    <ul className="tilon_info_text">
                        <li>주식회사: 틸론</li>
                        <li>대표: 최백준, 최경원</li>
                        <li>대표전화: 02-2627-9000</li>
                        <li>FAX: 02-2627-9099</li>
                        <li>사업자번호: 119-81-49757</li>
                        <li>통신판매업신고번호: 2020-서울강서-2069</li>
                    </ul>
                    <address className="address">서울 법인 : (07789) 서울시 강서구 마곡중앙14로 22</address>
                    <address className="address">제주 법인 : (63309) 제주특별자치도 제주시 첨단로 213-3 311, 312호</address>
                    <p className='copyright'>ⓒTILON Co., Ltd. All Rights Reserved.</p>
                </div>
            </div>
          </footer>
        </> */