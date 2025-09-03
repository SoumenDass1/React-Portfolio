import React from "react";
import "../css/profile.css";

function Profile() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-box">
            <h1 className="logo">Portfolio</h1>
          </div>

          <nav className="nav-bar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="home">
          <div className="text-box">
            <h2>Hello, I am</h2>
            <h1>Soumen Dass</h1>
            <p>Aspiring Web Developer | Exploring AI & Backend</p>
          </div>

          <div className="image">
            <img src="src/assets/portfoliioImage.png" alt="Main Image" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
