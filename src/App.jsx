import { useState } from "react";
import "./App.scss";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Notification from "./components/Notification";
import SignInForm from "./components/SignInForm";
import serviceLogin from "./service/login";
import serviceNotes from "./service/notes.js";

import serviceUser from "./service/user";

function App() {
  const [signIn, setsignIn] = useState("");
  const [login, setLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [user, setUser] = useState("");
  const [sectionStarted, setSectionStarted] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [putNote, setPutNote] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await serviceLogin.login({ username, password });

      console.log(user);

      serviceNotes.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      setErrorMessage("");
      setLogin(false);
      setSectionStarted(true);
    } catch (err) {
      console.log(err);
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
      setsignIn(false);
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

  const handleLogout = (e) => {
    setUser("");
    setSectionStarted(false);
    console.log(sectionStarted);
  };

  const addNote = (noteObject) => {
    serviceNotes.createNotes(noteObject).then((returnNote) => {
      setNotes(notes.concat(returnNote));
    });
  };

  const deleteNote = (id) => {
    serviceNotes.deleteNotes(id);
  };

  const updateNote = (id, noteObject) => {
    serviceNotes.updateNotes(id, noteObject).then((returnData) => {
      const putNote = notes.map((note) => {
        if (note._id === id) {
          if (returnData.title !== undefined) {
            note.title = returnData.title;
          }
          note.status = returnData.status;
        }
        return note;
      });
      setNotes(putNote);
    });
  };

  return (
    <div className="App container-app">
      <Navbar
        login={login}
        signIn={signIn}
        handleButtonLogin={handleButtonLogin}
        handleButtonSignIn={handleButtonSignIn}
        sectionStarted={sectionStarted}
        handleLogout={handleLogout}
      />
      {errorMessage && <Notification message={errorMessage} />}

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
      {user && (
        <Notes
          status={status}
          setStatus={setStatus}
          id={id}
          setId={setId}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          putNote={putNote}
          setPutNote={setPutNote}
          addNote={addNote}
          updateNote={updateNote}
          user={user}
          notes={notes}
          setNotes={setNotes}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
}

export default App;
