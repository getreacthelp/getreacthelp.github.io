import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Docs, Games, Homepage, NavbarComponent, PageNotFound, routingConstants, Tictactoe } from "./Components";

function App() {
  return (
    <HashRouter basename={"/"}>
      <NavbarComponent />
      <Routes>
        <Route path={routingConstants.HOME_PAGE} element={<Homepage />} />
        <Route path={routingConstants.DOCS} element={<Docs />} />
        <Route path={routingConstants.GAMES} element={<Games />} />
        <Route path={routingConstants.TICTACTOE} element={<Tictactoe />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
