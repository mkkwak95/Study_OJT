import React, { useState } from "react";
import "./ReservationList.scss";

const ReservationList = () => {
  const myroom = [
    {
      id: 404,
      title: "여수 EXPO 전시회",
      date: "2024. 5. 27. 오후 9:16:58 ~ 2024. 6. 4. 오후 9:16:58",
    },
    {
      id: 408,
      title: "테스트 회의",
      date: "2024. 5. 28. 오후 6:29:42 ~ 2024. 5. 28. 오후 7:29:42",
    },
  ];

  const inviteroom = [
    {
      id: 415,
      title: "프론트 테스트",
      date: "2024. 6. 5. 오전 1:14:53 ~ 2024. 6. 5. 오전 1:14:53",
    },
    {
      id: 428,
      title: "틸론 테스트",
      date: "2024. 6. 5. 오전 10:35:09 ~ 2024. 6. 5. 오전 10:35:09",
    },
  ];

  const [meeting, setMeeting] = useState(myroom);
  const [clickedMyMeeting, setClickedMyMeeting] = useState(true);
  const [clickedInvite, setClickedInvite] = useState(false);

  /* <NavLink to="tab" style={({isActive})} => 
    isActive ? myroom : inviteroom }> TAB </NavLink> */

  const handleMeetingData = (e) => {
    let dataType = e.target.innerText;

    if (dataType === "내가 만든 방") {
      setMeeting(myroom);
      setClickedMyMeeting(true);
      setClickedInvite(false);
    } else {
      setMeeting(inviteroom);
      setClickedMyMeeting(false);
      setClickedInvite(true);
    }
  };

  return (
    <main className="RsvList_main">
      <div className="RsvList_body">
        <div className="RsvList_box">
          <div className="RsvList_title_box">
            <p className="RsvList_title">회의 목록</p>
          </div>
          <div className="RsvList_tab">
            <button
              className={
                clickedMyMeeting ? "Rsv_select_tab active" : "Rsv_select_tab"
              }
              onClick={handleMeetingData}
            >
              내가 만든 방
            </button>
            <button
              className={
                clickedInvite ? "Rsv_select_tab active" : "Rsv_select_tab"
              }
              onClick={handleMeetingData}
            >
              초대 받은 방
            </button>
          </div>

          <table className="RsvList_table_box">
            <colgroup>
              <col style={{ width: "7%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "36%" }} />
              <col style={{ width: "39%" }} />
            </colgroup>
            <thead>
              <tr className="RsvList_table_title">
                <th>번호</th>
                <th>회의명</th>
                <th>일시</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {meeting.map((meetingData) => (
                <tr className="RsvList_text">
                  <td>{meetingData.id}</td>
                  <td>{meetingData.title}</td>
                  <td>{meetingData.date}</td>
                  {clickedMyMeeting ? (
                    <td>
                      <div>
                        <button>시작</button>
                        <button>초대</button>
                        <button>편집</button>
                        <button>삭제</button>
                      </div>
                    </td>
                  ) : (
                    <td>
                      <div>
                        <button>참여하기</button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
            <tbody></tbody>
          </table>
          <a href="/reservation" className="button_new_rsv">
            새 회의
          </a>
        </div>
      </div>
    </main>
  );
};

export default ReservationList;
