import React from "react";
import styled from "styled-components";

const SCSupplierDiv = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SCDeliveryDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SCDelivery = styled.p`
  padding: 0.25rem 0.5rem;
  border: 0.1rem solid rgb(120, 120, 120);
  color: rgb(120, 120, 120);
  border-radius: 5%;
  transition: all 0.5s ease;

  &: hover {
    background: rgb(120, 120, 120);
    color: white;
  }
`;

const Supplier = (props) => {
  const { supplierInfo } = props;
  return (
    <SCSupplierDiv data-cy={supplierInfo.name}>
      <img
        styled={{ display: "block" }}
        src={supplierInfo.url}
        width="200px"
        height="200px"
      ></img>

      <p>{supplierInfo.name}</p>
      <p>
        {supplierInfo.detailInfo.map((item, index) => (
          <span key={index + 1}>
            {item}
            {index !== supplierInfo.detailInfo.length - 1 && "-"}
          </span>
        ))}
      </p>
      <SCDeliveryDiv>
        <SCDelivery>{supplierInfo.delivery}</SCDelivery>
        <SCDelivery>{supplierInfo.fee}</SCDelivery>
      </SCDeliveryDiv>
    </SCSupplierDiv>
  );
};

export default Supplier;
