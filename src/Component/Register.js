import React from "react";
import styled from "styled-components";

const Register = (props) => {
  const { data, orderBoolean } = props;
  const SCRegister = styled.div`
    max-width:800px;
    box-sizing=border-box;
    border:0.25rem solid green;
    padding:2rem 5rem;
    margin: 5rem auto;
    text-align:center;
    display:${(props) => (props.orderBoolean ? "none" : "block")}`;

  return (
    <SCRegister data-cy="register" orderBoolean={orderBoolean}>
      <p>Congrats... Pizza is on its way!!!</p>
      <p>Enjoy your pizza</p>
      <img
        src="https://i.ytimg.com/vi/ykgRmXZon5o/maxresdefault.jpg"
        style={{ display: "block", margin: "1rem auto", width: "70%" }}
      ></img>
      <p>
        Your instruction:{" "}
        {data.note.length != 0 ? `${data.note}` : "no remarks"}
      </p>
    </SCRegister>
  );
};

export default Register;
