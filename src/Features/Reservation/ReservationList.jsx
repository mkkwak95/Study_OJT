import React from 'react';
import './ReservationList.scss';

const ReservationList = () => { 

  
  /* <NavLink to="tab" style={({isActive})} => 
    isActive ? active1 : active2 }> TAB </NavLink> */

  return (
    <main className='RsvList_main'>
      <div className='RsvList_body'>
        <div className='RsvList_box'>
          <div className='RsvList_title_box'>
            <p className='RsvList_title'>회의 목록</p>
          </div>
          <div className='RsvList_tab'>
            <button class='active'>내가 만든 방</button>
            <button class='active'>초대 받은 방</button>
          </div>

          <table className='RsvList_table_box'>
            <colgroup>
              <col style={{width: "7%"}} />
              <col style={{width: "18%"}} />
              <col style={{width: "36%"}} />
              <col style={{width: "39%"}} />
            </colgroup>
            <thead>
              <tr className='RsvList_table_title'>
                <th>번호</th>
                <th>회의명</th>
                <th>일시</th>
                <th></th>
              </tr>
            </thead> 
            <tbody>
              <tr className='RsvList_text'>
                <td>404</td>
                <td>여수 EXPO 전시회</td>
                <td>2024. 5. 27. 오후 9:16:58 ~ 2024. 6. 4. 오후 9:16:58</td>
                <td>
                  <div>
                  <button>시작</button>
                  <button>초대</button>
                  <button>편집</button>
                  <button>삭제</button>
                  </div>
                </td>
              </tr>
              <tr className='RsvList_text'>
                <td>408</td>
                <td>테스트 회의</td>
                <td>2024. 5. 28. 오후 6:29:42 ~ 2024. 5. 28. 오후 7:29:42</td>
                <td>
                  <div>
                  <button>시작</button>
                  <button>초대</button>
                  <button>편집</button>
                  <button>삭제</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
            <a href="/reservation" className='button_new_rsv'>새 회의</a>
        </div>
      </div>
    </main>
  )
  
}

export default ReservationList;