import React from "react";

function BoxDesktop(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        width: "120px",
        height: "120px",
        borderStyle: "solid",
        borderLeftWidth: props.noLeft && "0px",
        borderRightWidth: props.noRight && "0px",
        borderTopWidth: props.noTop && "0px",
        borderBottomWidth: props.noBottom && "0px",
        textAlign: "center",
        userSelect: "none",
        backgroundColor: props.winValues ? "black" : "white",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "80px",
          color: props.winValues ? "white" : "black",
        }}
      >
        {props.value}
      </p>
    </div>
  );
}

export default BoxDesktop;
