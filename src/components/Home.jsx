import React from "react";
import login from "../image/login.png";
import signin from "../image/signin.png";
import addcheck from "../image/addcheck.png";
import update from "../image/update.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h2>
        To do lista app, it is a useful app to remember tasks to do and easy to
        use.
      </h2>
      <p className="text-login">Sign in with your account.</p>

      <picture className="home--img-login">
        <img src={login} className="home__img-home" alt="User login" />
      </picture>
      <p className="text-signin">
        If you don't have an account, sign up. Also this app has Dark Mode.
      </p>
      <picture className="home--img-signin">
        <img src={signin} className="home__img-home" alt="User login" />
      </picture>
      <p className="text-addcheck">
        Add your tasks to do and check them when you finish doing it.
      </p>

      <picture className="home--img-addcheck">
        <img src={addcheck} className="home__img-home" alt="User login" />
      </picture>
      <p className="text-update">Update and remove them.</p>

      <picture className="home--img-update">
        <img src={update} className="home__img-home" alt="User login" />
      </picture>
    </div>
  );
};

export default Home;
