// src/HomePage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from './assets/images/witness.jpeg';
import logoImage from './assets/images/witness2.png';
import witness5 from './assets/images/witness5.jpg';
import introVideo from './assets/videos/witness1.mp4';
import witnessGif from './assets/images/witness8.gif';
import simbiGif from './assets/images/witness8.gif'; // Reused same gif

export default function HomePage() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [hideGif, setHideGif] = useState(false);
  const [showSimbiTab, setShowSimbiTab] = useState(false);
  const [typedWords, setTypedWords] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [chatOpened, setChatOpened] = useState(false);

  const videoRef = useRef(null);
  const fullText =
    'Hello, I am Simbi, your legal witness AI, Do you need Legal Advice or Assistance with any thing??';
  const words = fullText.split(' ');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intro video logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.onended = () => {
        setShowHomepage(true);
        setTimeout(() => setShowGif(true), 5000);
      };
    }
  }, []);

  // Typing effect
  useEffect(() => {
    if (showGif && !hideGif && !chatOpened) {
      setTypedWords([]);
      let index = 0;
      const interval = setInterval(() => {
        setTypedWords((prev) => [...prev, words[index]]);
        index++;
        if (index >= words.length) clearInterval(interval);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showGif, hideGif, chatOpened]);

  const dismissAll = () => {
    setHideGif(true);
    setShowGif(false);
    setShowSimbiTab(true);
    setChatOpened(false);
  };

  const maximizeGif = () => {
    setShowGif(true);
    setHideGif(false);
    setShowSimbiTab(false);
  };

  const openChatBox = () => {
    setChatOpened(true);
  };

  const renderTypingWithSimbiHighlight = () => {
    const joined = typedWords.join(' ');
    const highlighted = joined.replace(
      /\b(Simbi)\b/i,
      '<span class="simbi">$1</span>'
    );
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  const witnessClass = `witness-container-fixed${isScrolling ? ' transparent-extreme' : ''}`;
  const chatboxClass = `whatsapp-chatbox${isScrolling ? ' transparent-extreme' : ''}`;
  const simbiTabClass = `simbi-vertical-tab${isScrolling ? ' transparent-extreme' : ''}`;

  return (
    <>
      {!showHomepage && (
        <div className="video-container">
          <video
            ref={videoRef}
            className="intro-video"
            muted
            autoPlay
            playsInline
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {showHomepage && (
        <div className="homepage">
          <section
            className="top-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Navbar */}
            <header className="navbar">
              <div className="logo-menu">
                <button className="menu-button">☰</button>
                <div className="logo">
                  <img src={logoImage} alt="Witness Logo" className="logo-img" />
                </div>
              </div>
              <div className="navbar-right">
                <nav className="nav-links">
                  <a href="#">Products</a>
                  <a href="#">Solutions</a>
                  <a href="#">Support</a>
                  <a href="#">Pay Now</a>
                </nav>
                <div className="auth-buttons">
                  <button className="login">Login</button>
                  <Link to="/signup">
                    <button className="signup">Sign Up</button>
                  </Link>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="main-content">
              <h1>
                Would you like me to be a <span className="highlight">witness</span>?
              </h1>
              <div className="search-bar">
                <input type="text" placeholder="Serial number, case, reference name" />
                <button>🔍 Search</button>
              </div>

              <div className="stats">
                <h2>10 million+</h2>
                <p>Legal cases, disputes, wagers and NDAs</p>
                <p className="long-description">
                  We’ve helped millions of people safely register sensitive agreements, prove
                  intention, and protect themselves and their communities through irrefutable
                  public witness.
                </p>
                <div className="action-gif-row">
                  <button className="demo-button">Request a Demo</button>
                  <button className="contact-button">Contact Us</button>
                </div>
              </div>
            </main>

            {/* Witness GIF Balloon */}
            {showGif && !hideGif && !chatOpened && (
              <div className={witnessClass}>
                <div className="witness-balloon">{renderTypingWithSimbiHighlight()}</div>
                <img
                  src={witnessGif}
                  alt="Simbi Witness"
                  className="witness-gif"
                  onClick={openChatBox}
                />
                <button className="witness-dismiss" onClick={dismissAll}>
                  ✖
                </button>
              </div>
            )}

            {/* Chat Box */}
            {chatOpened && (
              <>
                <div className={chatboxClass}>
                  <div className="chat-header">
                    <img
                      src={simbiGif}
                      alt="Simbi Profile"
                      className="simbi-profile-pic"
                      draggable={false}
                    />
                    Simbi
                  </div>
                  <div className="chat-body">
                    <p>
                      <strong>Simbi:</strong> Hello! How can I help you today?
                    </p>
                  </div>
                  <div className="chat-input">
                    <input type="text" placeholder="Type your message..." />
                    <button>Send</button>
                  </div>
                </div>
                <button className="witness-dismiss-bottom" onClick={dismissAll}>
                  ✖
                </button>
              </>
            )}

            {/* Simbi Tab */}
            {showSimbiTab && (
              <button className={simbiTabClass} onClick={maximizeGif}>
                Simbi
              </button>
            )}
          </section>

          {/* Bottom Section */}
          <section
            className="bottom-section with-bg"
            style={{ backgroundImage: `url(${witness5})` }}
          >
            <div className="split-content">
              <div className="top-text-mobile">
                <h2>
                  What is <span className="blue-highlight">Witness</span> Public Management?
                </h2>
                <p className="intro-paragraph">
                  Witness is a movement and platform to document and share personal stories of faith,
                  transformation, and impact.
                </p>
              </div>

              <div className="video-text-combo">
                <div className="video-placeholder">
                  <div className="video-frame">▶</div>
                </div>
                <div className="right-text">
                  <h3>Why It Matters</h3>
                  <p>
                    In a world full of noise, real human experiences stand out. Witness is more than
                    content — it’s connection.
                  </p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}