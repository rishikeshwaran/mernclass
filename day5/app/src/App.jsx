import { useState } from "react";
import Login from "./components/Login";
import AfterLogin from "./components/AfterLogin";
import Pages from "./components/Pages";
import "./components/style/Pages.css";
import rvLogo from "./assets/rv.jpg";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <AfterLogin />
          <Pages />
        </>
      )}
    </div>
  );
}

export default App;
