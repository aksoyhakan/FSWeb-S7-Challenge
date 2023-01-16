import React from "react";
import styled from "styled-components";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const SCNavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.15rem solid rgb(120, 120, 120);

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCNameDiv = styled.div`
  width: 40%;
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  min-width: 200px;

  @media (max-width: 715px) {
    font-size: 1rem;
    margin: 0;
    text-align: left;
  }

  @media (max-width: 550px) {
    margin-top: 1rem;
    padding: 0;
    text-align: center;
  }
`;

const SCLinkDiv = styled.div`
  width: 60%;
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  justify-content: flex-end;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SCLink = styled.div`
  text-decoration: none !important;
  padding: 0.25rem 0.75rem;
  border: 0.1rem solid rgb(120, 120, 120);
  color: rgb(120, 120, 120);
  transition: all 0.5s ease;
  margin: 0 0.1rem;
  border-radius: 10%;

  &: hover {
    background: rgb(120, 120, 120);
    color: white;
  }

  @media (max-width: 550px) {
    width: 5rem;
    padding: 0.25rem 0;
    text-align: center;
    margin-bottom: 0.25rem;
  }
`;

const Navigation = (props) => {
  const { url } = useRouteMatch();
  console.log("url:", url);
  return (
    <SCNavDiv>
      <SCNameDiv>Where is my food???</SCNameDiv>
      <SCLinkDiv>
        <Link
          data-cy="home-link"
          style={{ textDecoration: "none" }}
          to={`${url}`}
        >
          <SCLink>Home</SCLink>
        </Link>
        <Link
          data-cy="order-link"
          style={{ textDecoration: "none" }}
          to={`${url}order`}
        >
          <SCLink>Order</SCLink>
        </Link>
        <Link
          data-cy="help-link"
          style={{ textDecoration: "none" }}
          to={`${url}help`}
        >
          <SCLink>Help</SCLink>
        </Link>
      </SCLinkDiv>
    </SCNavDiv>
  );
};

export default Navigation;
