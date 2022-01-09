import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListComponent(props) {
  return (
    <ListGroup as="ul" style={{display:'flex',justifyContent:'space-between',backgroundColor:'red'}}>
      <ListGroup.Item as="li" variant="dark" style={{display:'flex',justifyContent:'space-between'}}>
        <Link
          to={props.route}
          style={styles.listItem}
        >
          {props.name}
        </Link>
        <Link to="/" style={styles.listItem}>
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
