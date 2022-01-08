import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListComponent(props) {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        <Link
          to={props.route}
          style={styles.listItem}
        >
          {props.name}
        </Link>
        <Link to="/" className="px-5" style={styles.listItem}>
          Tutorial to create
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}
const styles = {
  listItem: {
    textDecoration: "none",
    color: "black",
    fontWeight: "600",
  },
};

export default ListComponent;
