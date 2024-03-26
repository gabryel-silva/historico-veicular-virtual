import { BodyGlobalStyles } from "./components/config/_body-styles/BodyGlobalStyles"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BodyGlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
