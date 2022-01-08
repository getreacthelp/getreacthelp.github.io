import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routingConstants } from "../utils/constants";

function Homepage() {
  return (
    <Container style={{ textAlign: "center" }}>
      <h1 className="mt-5 mb-2">Hello there!</h1>
      <h2>
        This website is for everyone, who want be or is a React Developer.
      </h2>
      <h3 className="mt-3">
        <b>The Purpose:</b>
      </h3>
      <h4>
        Everything I create, will be uploaded on this website, with its code and
        explanation. Also some components which I create will be here, You can
        use them instead of installing full libraries.
      </h4>
      <h5 className="mt-5">
        Don't worry, if the word libraries or any of the thing goes above your
        head. By the end of few precious hours of your life, you will be
        digesting it all like a pro.
      </h5>
      <h2 className="mt-5">
        Just click on docs if you want to begin this awesome journey!
      </h2>
      <h4>
        Or just click{" "}
        <Link
          to={routingConstants.DOCS}
          style={{ textDecoration: "none", color: "blue" }}
        >
          <b>HERE!</b>
        </Link>
      </h4>
    </Container>
  );
}

export default Homepage;
