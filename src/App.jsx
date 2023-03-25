import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import SignInForm from "./components/SignInForm";
import serviceLogin from "./service/login";
import serviceUser from "./service/user";

function App() {
  const [signIn, setsignIn] = useState("");
  const [login, setLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await serviceLogin.login({ username, password });

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (err) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleSingIn = async (e) => {
    e.preventDefault();

    try {
      const addUser = await serviceUser.userPost({
        username,
        name,
        lastname,
        password,
      });
      setUser(addUser.data);
      setUsername("");
      setPassword("");
      setLastname("");
      setName("");
    } catch (err) {
      setErrorMessage(err.response.data.error);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleButtonLogin = (e) => {
    setsignIn(false);
    setLogin(true);
    setUser("");
    setPassword("");
    setUsername("");
    setName("");
    setLastname("");
  };

  const handleButtonSignIn = (e) => {
    setsignIn(true);
    setLogin(false);
    setUser("");
    setPassword("");
    setUsername("");
    setName("");
    setLastname("");
  };

  return (
    <div className="App">
      <Navbar
        login={login}
        signIn={signIn}
        handleButtonLogin={handleButtonLogin}
        handleButtonSignIn={handleButtonSignIn}
      />
      <Notification message={errorMessage} />
      {login === true && (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={(e) => setUsername(e.target.value)}
          handlePasswordChange={(e) => setPassword(e.target.value)}
          handleLogin={handleLogin}
        />
      )}
      {signIn === true && (
        <SignInForm
          handleSingIn={handleSingIn}
          userName={username}
          password={password}
          name={name}
          lastname={lastname}
          handleUsernameChange={(e) => setUsername(e.target.value)}
          handlePasswordChange={(e) => setPassword(e.target.value)}
          handleNameChange={(e) => setName(e.target.value)}
          handleLastnameChange={(e) => setLastname(e.target.value)}
        />
      )}
    </div>
  );
}

export default App;
