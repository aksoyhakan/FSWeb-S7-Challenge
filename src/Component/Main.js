import React from "react";
import Supplier from "./Supplier";
import styled from "styled-components";

const SCMainDiv = styled.div`
max-width:800px;
box-sizing=border-box;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
align-items:stretch;
gap:1rem;
`;

const SCFixSen = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 3rem 0 1rem 0;
`;

const Main = (props) => {
  const { supplierData } = props;
  console.log(supplierData);
  return (
    <div>
      <SCFixSen>Food delivery in Gotham City</SCFixSen>
      <SCMainDiv>
        {supplierData.map((item, index) => (
          <Supplier key={index + 1} supplierInfo={item}></Supplier>
        ))}
      </SCMainDiv>
    </div>
  );
};

export default Main;
