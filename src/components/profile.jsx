import "../css/header.css";
import "../css/home.css";
import "../css/about.css";
import '../css/skills.css';
import portfolioImage from "../assets/portfolioImage.png";

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
                        <p>
                            Student At Newton School Of Technology |<br />
                            Aspiring Web Developer | Exploring AI & Backend
                        </p>
                    </div>

                    <div className="image">
                        <img src={portfolioImage} alt="Main Image" />
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="about-box">
                        <h1>About Me</h1>
                        <div className="about-empty">
                            <div className="about-me">
                                <p><span></span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills">
                    <h1 className="my-skills">My Skills</h1>
                    <div className="skill-box">
                        <div className="containers">
                            <div className="skill-container-1">
                                <h3>pyhton</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;
