import styled from "@emotion/styled";

export const SignupDiv = styled.div`
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
export const MyPageDiv = styled.div`
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    gap: 10px 0;
    div {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      label {
        display: block;
        width: 25%;
        font-weight: 700;
      }
      input {
        display: block;
        width: 60%;
        border: 1px solid #ddd;
      }
    }
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
`;
export default SignupDiv;
