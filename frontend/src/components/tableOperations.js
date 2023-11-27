import {ListGroup,Button,ButtonGroup,ButtonToolbar,Stack,input,Dropdown,Form,Container,Row,Col } from "react-bootstrap";

import TableSearch from "./TableSearch"
import TableFilter from "./tableFilter";
import TableSort from "./tableSort";
import { useState } from "react";

function TableOperations({operatedOnData,onOperationChange}){
  console.log(onOperationChange);
    return(
      <Container fluid>      
      <Row>
       <Col xs={3}><TableSearch input="" operatedOnTableData={operatedOnData}/></Col>
       <Col xs={4}><TableFilter operatedOnData={operatedOnData} onFilter={onOperationChange} /></Col>
       <Col xs={4}><TableSort operatedOnTableData={operatedOnData} onTableSort={onOperationChange}/></Col>
    </Row>      
    </Container>
    )
}
export default TableOperations;