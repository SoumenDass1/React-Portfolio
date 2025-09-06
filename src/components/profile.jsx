import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/header.css";
import "../css/home.css";
import "../css/about.css";
import portfolioImage from "../assets/portfolioImage.png";

function Profile() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am an aspiring web developer who is passionate about building creative and functional web applications. Currently, I am pursuing my studies in computer science and learning the core concepts of programming, databases, and web technologies. I spend my time exploring front-end and back-end development, experimenting with different frameworks, and improving my problem-solving skills. My goal is to become a skilled developer who can design efficient systems and deliver impactful projects. With dedication and continuous learning, I aim to grow my expertise and contribute meaningfully to the field of technology while building a strong foundation for my career."
      ],
      typeSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-box">
            <h1 className="logo">Portfolio</h1>
          </div>

          <nav className="nav-bar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="home">
          <div className="text-box">
            <h2>Hello, I am</h2>
            <h1>Soumen Dass</h1>
            <p>Aspiring Web Developer | Exploring AI & Backend</p>
          </div>

          <div className="image">
            <img src={portfolioImage} alt="Main Image" />
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-box">
            <h1>About Me</h1>
            <div className="about-me">
              <p><span ref={el}></span></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
