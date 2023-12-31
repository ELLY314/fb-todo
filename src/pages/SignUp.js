import React, { useState } from "react";
import SignupDiv from "../style/UserCss";
import { useNavigate } from "react-router-dom";
// firebase연동
import firebase from "../firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      // Firebase 에 회원가입 하기
      let creatUser = await firebase.auth().createUserWithEmailAndPassword(email, pw);
      // 회원 가입이 성공시 사용자 이름을 업데이트
      await creatUser.user.updateProfile({
        displayName: nickName,
      });
      // 로그인 창으로 이동
      navigate("/login");
      console.log("등록된 정보 : ", creatUser.user);
    } catch (error) {
      // 회원가입 시 에러 처리
      console.log(error.Code);
      if (error.code == "auth/email-already-in-use") {
        alert("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        alert("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        alert("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        alert("The password is too weak.");
      }
    }
  };

  return (
    <div className="p-6 shadow rounded-lg bg-white mt-5">
      <h2>Signup</h2>
      {/* 
      1. emotion을 활용하여 tag의 용도를 구분한다.
      2. css 도 함께 적용한다.
    */}
      <SignupDiv>
        <form action="">
          <label htmlFor="">별칭</label>
          <input type="text" required value={nickName} onChange={e => setNickName(e.target.value)} maxLength={10} minLength={2} />

          <label htmlFor="">이메일</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />

          <label htmlFor="">비밀번호</label>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} required minLength={8} maxLength={16} />

          <label htmlFor="">비밀번호 확인</label>
          <input type="password" value={pwConfirm} onChange={e => setPwConfirm(e.target.value)} required minLength={8} maxLength={16} />

          <div className="btn-list flex justify-center gap-5 w-full">
            <button className="border rounded px-5 py-2 shadow " onClick={e => handleSignUp(e)}>
              회원가입
            </button>

            <button
              className="border rounded px-5 py-2 shadow"
              onClick={e => {
                e.preventDefault();
                navigate("/");
              }}
            >
              취소
            </button>
          </div>
        </form>
      </SignupDiv>
    </div>
  );
};

export default SignUp;
