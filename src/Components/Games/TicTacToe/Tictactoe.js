import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import BoxDesktop from "./BoxDesktop";

function Tictactoe() {
  const [letterState, setLetterState] = useState(true);
  const [arrX, setArrX] = useState([]);
  const [arrO, setArrO] = useState([]);
  const [winX, setWinX] = useState(false);
  const [winO, setWinO] = useState(false);
  const [winValues, setWinValues] = useState([]);
  const [text, setText] = useState({
    textX: "X Turn",
    textO: "O Turn",
  });

  const [boxValue, setBoxValue] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
  });
  const [winner] = useState([
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [4, 5, 6],
    [7, 8, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
  ]);
  const boxValueChangeFunction = (box) => {
    if (winX || winO) {
      return;
    } else {
      if (boxValue[box] === "") {
        setBoxValue({ ...boxValue, [box]: letterState ? "X" : "O" });
        if (letterState) {
          setArrX([...arrX, Number(box.slice(3.4))]);
        } else {
          setArrO([...arrO, Number(box.slice(3.4))]);
        }
        setLetterState((prev) => !prev);
      }
    }
  };

  const resetState = () => {
    setBoxValue({
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: "",
    });
    setArrX([]);
    setArrO([]);
    setWinX(false);
    setWinO(false);
    setWinValues([]);
    setText({
      textX: "X Turn",
      textO: "O Turn",
    });
    setLetterState(true);
  };

  useEffect(() => {
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    winner.map((item) => {
      if (checker(arrX, item)) {
        setWinX(true);
        setWinValues(item);
      } else if (checker(arrO, item)) {
        console.log("y");
        setWinO(true);
        setWinValues(item);
      }
      return item;
    });
    if (winX) {
      setText({
        textX: "X Win",
        textO: "O Lose",
      });
    } else if (winO) {
      setText({
        textX: "X Win",
        textO: "O Lose",
      });
    }
  }, [letterState, arrX, arrO, winner, winX, winO]);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <BoxDesktop
          noLeft
          noTop
          value={boxValue.box1}
          onClick={() => boxValueChangeFunction("box1")}
          winValues={winValues.includes(1)}
        />
        <BoxDesktop
          noTop
          value={boxValue.box2}
          onClick={() => boxValueChangeFunction("box2")}
          winValues={winValues.includes(2)}
        />
        <BoxDesktop
          noTop
          noRight
          value={boxValue.box3}
          onClick={() => boxValueChangeFunction("box3")}
          winValues={winValues.includes(3)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BoxDesktop
          noLeft
          value={boxValue.box4}
          onClick={() => boxValueChangeFunction("box4")}
          winValues={winValues.includes(4)}
        />
        <BoxDesktop
          value={boxValue.box5}
          onClick={() => boxValueChangeFunction("box5")}
          winValues={winValues.includes(5)}
        />
        <BoxDesktop
          noRight
          value={boxValue.box6}
          onClick={() => boxValueChangeFunction("box6")}
          winValues={winValues.includes(6)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BoxDesktop
          noLeft
          noBottom
          value={boxValue.box7}
          onClick={() => boxValueChangeFunction("box7")}
          winValues={winValues.includes(7)}
        />
        <BoxDesktop
          noBottom
          value={boxValue.box8}
          onClick={() => boxValueChangeFunction("box8")}
          winValues={winValues.includes(8)}
        />
        <BoxDesktop
          noBottom
          noRight
          value={boxValue.box9}
          onClick={() => boxValueChangeFunction("box9")}
          winValues={winValues.includes(9)}
        />
      </div>
      <div
        className="my-3"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            backgroundColor: letterState && "black",
            color: letterState && "white",
            marginRight:'10px'
          }}
        >
          {text.textX}
        </p>
        <Button variant="dark" onClick={resetState}>
          Reset
        </Button>
        <p
          style={{
            fontSize: "20px",
            backgroundColor: !letterState && "black",
            color: !letterState && "white",
            marginLeft:'10px'
          }}
        >
          {text.textO}
        </p>
      </div>
    </Container>
  );
}

export default Tictactoe;
