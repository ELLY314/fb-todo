import styled from "@emotion/styled";

const SignupDiv = styled.div`
  form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 0;
    label {
      width: 30%;
      display: block;
      font-weight: 700;
    }
    input {
      width: 70%;
      display: block;
      border: 1px solid #ddd;
      padding: 5px;
    }
    /* .btn-list {
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 10px;
    } */
  }
`;
export const LoginDiv = styled.div`
form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 0;
    label {
      width: 30%;
      display: block;
      font-weight: 700;
    }
    input {
      width: 70%;
      display: block;
      border: 1px solid #ddd;
      padding: 5px;
    }
  }

`
export default SignupDiv;
