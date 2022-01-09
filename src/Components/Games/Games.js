import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { gamesList, ListComponent } from "../../Components";

function Games() {
  const [noteState, setNoteState] = useState(false);
  useEffect(() => {
    document.title = "Get React Help - Games";
  }, []);
  return (
    <Fragment>
      <div style={{ backgroundColor: "lightgray" }} className="px-3 py-2">
        <h3>Select any game from the below list:</h3>
      </div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <h5
          onClick={() => setNoteState((prev) => !prev)}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "2px",
            borderRadius: "5px",
          }}
        >
          Click {noteState ? "to hide Note!" : "to show Note!"}
        </h5>
        {noteState && (
          <h5>
            Click on game name to play the game and "Tutorial to create" for
            detailed steps and code for development!
          </h5>
        )}
      </Container>
      <div>
        {gamesList.map((item) => {
          return <ListComponent route={item.route} name={item.name} />;
        })}
      </div>
    </Fragment>
  );
}

export default Games;
