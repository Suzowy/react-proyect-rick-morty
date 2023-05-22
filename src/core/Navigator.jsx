import React from "react";
import "./Navigator.scss";
import { Link } from "react-router-dom";

const Navigator = ({ authenticated, logoutUser }) => {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/">Home</Link>
       
        </li>
        <li>
          <Link to="/gallery">Galeria</Link>
        </li>
        <li>
       <img src="https://i.pinimg.com/200x150/13/7b/54/137b540a18c16c296b995a908ef6bb1c.jpg"  alt="logo"/>
       <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" alt="logo"/>
       
       </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {authenticated ? (
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;