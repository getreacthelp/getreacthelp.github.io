import React, { Fragment } from "react";
import { gamesList, ListComponent } from "../../Components";

function Games() {
  return (
    <Fragment>
      <div style={{ backgroundColor: "lightgray" }} className="px-3 py-2">
        <h3>Select any game from the below list:</h3>
      </div>
      <div>
        {gamesList.map((item) => {
          return <ListComponent route={item.route} name={item.name} />;
        })}
      </div>
    </Fragment>
  );
}

export default Games;
