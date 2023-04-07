import { useEffect, useState } from "react";
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

  const [user, setUser] = useState("");
  const [sectionStarted, setSectionStarted] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [putNote, setPutNote] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log(user);
      setUser(user);
      serviceNotes.setToken(user.token);
      setErrorMessage("");
      setLogin(false);
      setSectionStarted(true);
    }
  }, []);

  const handleLogin = async (usernames, passwords) => {
    try {
      const user = await serviceLogin.login({
        username: usernames,
        password: passwords,
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      serviceNotes.setToken(user.token);

      setUser(user);
      setErrorMessage("");
      setLogin(false);
      setSectionStarted(true);
    } catch (err) {
      console.log(err);
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleSingIn = async (usernames, names, lastnames, passwords) => {
    try {
      const addUser = await serviceUser.userPost({
        username: usernames,
        name: names,
        lastname: lastnames,
        password: passwords,
      });
      setUser(addUser.data);
      setSectionStarted(true);
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
  };

  const handleButtonSignIn = (e) => {
    setsignIn(true);
    setLogin(false);
    setUser("");
  };

  const handleLogout = (e) => {
    setNotes([]);
    setUser("");
    setSectionStarted(false);
    window.localStorage.removeItem("loggedUser");
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

      {login === true && <LoginForm handleLogin={handleLogin} />}
      {signIn === true && <SignInForm handleSingIn={handleSingIn} />}
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
