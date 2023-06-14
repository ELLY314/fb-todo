import React, { useState } from "react";

const ListItem = ({ item, todoData, setTodoData }) => {
  // console.log("ListItem 랜더링");

  // 편집 상태 설정 state
  const [isEdit, setIsEdit] = useState(false);
  // 편집 상태 타이틀 설정 state
  const [editTitle, setEditTitle] = useState(item.title);

  const getStyle = _completed => {
    return {
      padding: "10px",
      textDecoration: _completed ? "line-through" : "none",
    };
  };

  // 이벤트 핸들러

  const handleDeleteClick = _id => {
    // 전달된 ID를 검색해서 목록에서 제거
    // 1. 전달된 id로 해당하는 목록 찾아서 제외
    // 2. 새로운 목록으로 갱신해서 화면 리랜더링
    // 3. 배열의 고차함수 중 filter를 사용
    const newTodoData = todoData.filter(item => item.id !== _id);
    setTodoData(newTodoData);
    // 로컬스토리지 저장
    localStorage.setItem("fbTodoData", JSON.stringify(newTodoData));
  };
  const handleEditClick = _id => {
    console.log(_id);
    setIsEdit(true);
  };
  const handleEditChange = e => {
    setEditTitle(e.target.value);
  };
  const handleCancelClick = () => {
    setIsEdit(false);
  };
  const handleSaveClick = _id => {
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        item.title = editTitle;
      }
      return item;
    });
    setTodoData(newTodoData);
    // 로컬스토리지 저장
    localStorage.setItem("fbTodoData", JSON.stringify(newTodoData));
    setIsEdit(false);
  };
  const handleCompleteChange = _id => {
    // id에 해당하는 것만 수정하면 되지 않다. XXX
    // state는 항상 새롭게 만든 내용 즉, 배열로 업데이트 해야한다.
    // 새로운 배열을 만들어서 set 하자.
    let newTodoData = todoData.map(item => {
      if (item.id === _id) {
        // completed를 갱신함.
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
    // 로컬스토리지 저장
    localStorage.setItem("fbTodoData", JSON.stringify(newTodoData));
  };

  if (isEdit) {
    // 편집중
    return (
      <div className="flex items-center justify-between w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded ">
        <div className="items-center w-3/5">
          <input className="w-full px-3 py-2 mr-3 text-gray-500 rounded" type="text" value={editTitle} onChange={handleEditChange} />
          {/* defaultChecked : 체크박스에 기본체크 상태 설정 */}
        </div>

        <div className="items-center ">
          <button className="px-4 py-2" onClick={() => handleSaveClick(item.id)}>
            Save
          </button>
          <button className="px-4 py-2" onClick={handleCancelClick}>
            Cancle
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between w-full mb-2 px-4 py-1 text-gray-600 bg-gray-100 border rounded ">
        <div className="items-center flex" style={getStyle(item.completed)}>
          {/* defaultChecked : 체크박스에 기본체크 상태 설정 */}
          <input type="checkbox" defaultChecked={item.completed} onChange={() => handleCompleteChange(item.id)} />
          <span className="ml-3">{item.title}</span>
        </div>

        <div className="items-center">
          <button className="px-4 py-2" onClick={handleEditClick}>
            Edit
          </button>
          <button className="px-4 py-2" onClick={() => handleDeleteClick(item.id)}>
            X
          </button>
        </div>
      </div>
    );
  }
};
// 리랜더링 최적화 적용
export default React.memo(ListItem);
