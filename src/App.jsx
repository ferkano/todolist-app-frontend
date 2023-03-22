import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import serviceLogin from "./service/login";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await serviceLogin.login({ username, password });

      setUser(user);
      setPassword("");
      setusername("");
    } catch (error) {
      setErrorMessage("Wrong credentials");
    }
  };
  return (
    <div className="App">
      <LoginForm
        handleSubmit={handleLogin}
        userName={username}
        password={password}
        handleUsernameChange={(e) => setusername(e.target.value)}
        handlePasswordChange={(e) => setPassword(e.target.value)}
        handleLogin={handleLogin}
      />
    </div>
  );
}

export default App;
