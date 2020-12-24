import React, { useState } from "react";
import { Form, Input, Row, Col } from "reactstrap";
import Planet from "./Planet";

export default function App() {
  const [option, setOption] = useState("All");

  function handleOption(event) {
    setOption(event.target.value);
  }

  return (
    <div class="container">
      <br />
      <h3>Planets Name</h3>
      <br />
      <Row>
        <Col sm={2} lg={2} md={2}>
          <Form>
            <Input type="select" name="value" onChange={(e) => handleOption(e)}>
              <option value="All">All</option>
              <option value="Favourite">Favourite</option>
            </Input>
          </Form>
        </Col>
      </Row>
      <br />
      <Row>
      <Planet option={option} />
      </Row>
    </div>
  );
}
