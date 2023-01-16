import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Component/Navigation";
import Main from "./Component/Main";
import Order from "./Component/Order";
import Help from "./Component/Help";
import firstData from "./firstData";

const SCContainer = styled.div`
  max-width: 800px;
  display: block;
  margin: 0 auto;
  padding: 1rem 1rem;
`;

const App = () => {
  const [supplierData, setSupplierData] = useState(firstData);
  const { path } = useRouteMatch();
  console.log("path :", path);

  return (
    <SCContainer>
      <Navigation></Navigation>
      <Switch>
        <Route exact path={`${path}`}>
          <Main supplierData={supplierData}></Main>
        </Route>
        <Route path={`${path}order`}>
          <Order></Order>
        </Route>
        <Route path={`${path}help`}>
          <Help></Help>
        </Route>
      </Switch>
    </SCContainer>
  );
};
export default App;
