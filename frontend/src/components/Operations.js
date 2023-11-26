import {ListGroup,Button,ButtonGroup,ButtonToolbar,Stack,input,Dropdown,Form,Container,Row,Col } from "react-bootstrap";

import TableSearch from "./TableSearch"
import TableFilter from "./tableFilter";
import TableSort from "./tableSort";

function Operations(){

    function handleFilterSelection(e){

    }
    function handleSortSelection(e){

    }

    return(
      <Container fluid>
      <Row>
       <Col xs={6}><TableSearch input=""/></Col>
       <Col xs={3}><TableFilter/></Col>
       <Col><TableSort/></Col>
    </Row>
    </Container>
    )
}
export default Operations;