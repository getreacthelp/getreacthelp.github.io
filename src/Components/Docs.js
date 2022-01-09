import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";

function Docs() {
  useEffect(() => {
    document.title = "Get React Help - Docs";
  }, []);
  return (
    <Fragment>
      <Container className="my-4" style={{textAlign:'center'}}>
        
      </Container>
    </Fragment>
  );
}

export default Docs;
