import React from 'react';
import './Reservation.scss';

const Reservation = () => { 
  return (
    <main className='Reservation_main'>
      <div className='Reservation_body'>
        <div className='Reservation_box'>
          <div className='Reservation_title_box'>
            <p className='Reservation_title'>회의 예약</p>
            <p className='Reservation_subtitle'>회의를 시작하시려면 회의 예약을 통하여 진행이 가능합니다.</p>
          </div>
          <form className='Reservation_form'>
            <div className='Reservation_input'>
            <input className='Rv_input' id="rvname" name="rvname" placeholder=" "/>
            <label htmlFor="rvname" className="floating_label">
                회의명&nbsp;<span>(필수)</span>
            </label>
            </div>
            <div className='Reservation_input'>
            <input className='Rv_input' id="rvdescript" name="rvdescript" placeholder=" "/>
            <label htmlFor="rvdescript" className="floating_label">
                설명을 입력하세요.&nbsp;<span>(필수)</span>
            </label>
            <ul className='dt_box'>
              <li className='dt_form'>
                <p>시작 시간</p>
                <input className="dt_date" type="date"></input>
                <input className="dt_time" type="time"></input>
              </li>
              <li className='dt_form'> 
                <p>종료 시간</p>
                <input className="dt_date" type="date"></input>
                <input className="dt_time" type="time"></input>
              </li>
            </ul>
            
            <button type="button" className='rv_detail_set'>상세 설정</button>
            <ul className='rvset_box'>
              <li className='rvset_form'>
                <p>입장 후 툴바 표시 시간 설정</p>
                <select className='rvset_toolbar'>
                  <option value='20000'>20,000(ms)</option>
                  <option value='40000'>40,000(ms)</option>
                </select>
              </li>
              <li className='rvset_form'>
                <p>회의 중 툴바 표시 시간 설정</p>
                <select className='rvset_toolbar'>
                  <option value='4000'>4,000(ms)</option>
                  <option value='2000'>2,000(ms)</option>
                </select>
              </li>
              <li className='rvset_form'>
                <p>회의 입장 인원 제한</p>
                <input className='rvset_toolbar' name='rvset_limit' type='number' value='20'>
                </input>
              </li>
            </ul>

            <div className='toolbar_box'>
              <strong className='toolbar_title'>툴바 UI<span>회의 시 툴바 버튼 표시를 설정</span></strong>
              <ul className="grid-container">
                <li>
                  <p className="tool_use">카메라</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">마이크</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">채팅</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">화면공유</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">참가자</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">말하기 요청</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">타일뷰</p>
                  <input type='checkbox'></input>
                </li>
                <li>
                  <p className="tool_use">설정</p>
                  <input type='checkbox'></input>
                </li>
              </ul>
            </div>

            <button type='submit' className='button_rv_submit'>예약하기</button>
            <button type='submit' className='button_rv_c'>취소</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
  
}

export default Reservation;