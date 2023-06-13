import React, { useState } from "react";

const Form = ({ todoData, setTodoData }) => {
  // 새로운 할일 state변수
  const [value, setValue] = useState("");

  // input type="text"의 value 변경 화면 리랜더링
  const handleChange = e => {
    setValue(e.target.value);
  };
  // form submit 실행시 체크
  const handleSubmit = e => {
    // 웹 브라우저 url 주소표시창으로 데이터 전송을 막아야함.
    // 마치 a태그의 href 를 막아주듯이.
    e.preventDefault();
    // 새로운 todo 객체를 만들어 준다.
    // 형식 즉, 키명을 구조를 지켜줌.
    const newTodo = { id: Date.now(), title: value, completed: false };
    // state 저장한다. 화면 리랜더링 된다.
    // todoData 에 추가.
    setTodoData([...todoData, newTodo]);
    setValue("");
  };
  return (
    <div>
      <form style={{ display: "flex", gap: "0 10px" }} onSubmit={handleSubmit}>
        <input type="text" name="value" style={{ flex: "10", padding: "5px" }} placeholder="할일을 입력해 주세요" value={value} onChange={handleChange} />
        <input type="submit" style={{ flex: "1" }} value="입력" />
      </form>
    </div>
  );
};

export default Form;