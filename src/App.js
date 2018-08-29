import React from 'react';

import './lib/css/default.css';
import './lib/css/animate.css';
import './lib/css/magnific-popup.css';
import './lib/css/style.css';
import './lib/css/responsive.css';

import './lib/js/script';

import avatar from './lib/images/avatar2.jpg';

import portCsgogym from './lib/images/portfolio/csgogym.png';
import portNpm from './lib/images/portfolio/npm.png';
import portMovies from './lib/images/portfolio/movies.png';
import portMrandmrs from './lib/images/portfolio/mrandmrs.png';
import portCsgotrademe from './lib/images/portfolio/csgotrademe.png';
import portJaracati from './lib/images/portfolio/jaracati.png';
import portPropaganha from './lib/images/portfolio/propaganha.png';
import portPubg from './lib/images/portfolio/pubg.png';
import portReaction from './lib/images/portfolio/reaction.png';
import portSentionario from './lib/images/portfolio/sentionario.png';
import portSpace from './lib/images/portfolio/spaceV.png';
import portWarmup from './lib/images/portfolio/warmup.png';
import portSkintrade from './lib/images/portfolio/skintrade.png';

import test01 from './lib/images/testimonials/01.png';
import test02 from './lib/images/testimonials/02.png';
import test03 from './lib/images/testimonials/03.png';
import test04 from './lib/images/testimonials/04.png';
import test05 from './lib/images/testimonials/05.png';
import test06 from './lib/images/testimonials/06.png';
import test07 from './lib/images/testimonials/07.png';
import test08 from './lib/images/testimonials/08.png';

const App = () => (
  <div>
    <header id="home">
      <nav id="m-nav">
        <a className="mobile-btn" href="#m-nav" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline wow zoomIn">
            Hi! I&apos;m
            <span> Luiz Chagas Jr</span>
          </h1>
          <h3 className="wow fadeInUp">
            I&apos;m a passionate
            <span> Software Developer </span>
            and
            <span> JavaScript Engineer </span>
            creating modern and safe solutions for the
            <span> Web</span>
.
            <br />
            Scroll down to learn more
            {' '}
            <a className="smoothscroll" href="#about">
              about me
            </a>
            .
          </h3>
          <hr />
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="fa fa-angle-double-down" />
        </a>
      </p>
      <div className="header-overlay" />
      <div id="social">
        <div className="row social-container">
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/luizchagasjr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/luizchagas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>

            <li>
              <a href="skype:luizchagasjr?chat">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section id="about">
      <div className="row bio-container">
        <div className="twelve columns bio-inner">
          <div className="six columns bio-left">
            <div className="pp-container">
              <img className="profile-pic wow zoomIn" src={avatar} alt="Luiz Chagas Jr" />
              <h2>Luiz Chagas</h2>
              <h3>Software Developer</h3>
            </div>
          </div>

          <div className="six columns main-col wow fadeIn">
            <div className="arrow-left" />

            <p>
              Luiz is a
              {' '}
              <span id="age" />
              -year-old software developer from Brazil with a strong background in programming
              fudamentals. He currently works with full stack web development, mainly with
              JavaScript. Since becoming a freelancer, Luiz knows everything a client may need for
              their web application, from setting up DNS and configuring the server up to developing
              the application itself. He is very proficient with HTML5, CSS3, JavaScript, jQuery,
              Angular, Node.js, API integrations and other things. Even though Luiz is not a
              designer he is confident enough to use great templates made by professionals and tweak
              them as needed! Luiz also has a passion for well-written code, functional user
              interfaces, games and dogs.
            </p>

            <div className="row">
              <div className="six columns download">
                <p>
                  <a
                    href="https://www.upwork.com/freelancers/~01e33fdfde407363b0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-paper-plane" />
                    Hire Me
                  </a>
                  <a
                    href="/assets/LuizChagasJrResume.pdf"
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="resume">
      <div className="relative">
        <h1 className="section-title wow fadeInDown">Resume</h1>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h2>
            <span>Employment</span>
          </h2>
        </div>

        <div className="nine columns main-col">
          <div className="work-timeline">
            <ul className="timeline">
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">January 2017 - January 2018</p>
                  <h3>Freelancer</h3>
                  <h4>Web Developer</h4>
                  <p>
                    Worked as a Freelance Developer, doing all the work related to sales (client
                    acquisition, etc) and building solutions (Software Development Life Cycle). It
                    was a broadening experience as it took me out of my comfort zone (coding) and
                    made me grow in different areas (Analytics, SEO, client relationship, etc). I
                    focused myself on Web Development using Node.JS + Express, JavaScript (jQuery
                    and Angular), SQL and MongoDB, SASS, Gulp, etc
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">January 2016 - December 2016</p>
                  <h3>RHI Magnesita</h3>
                  <h4>Information Security Analyst</h4>
                  <p>
                    {' '}
                    Managed and expanded two different SIEM solutions: IBM&apos;s QRadar and Varonis
                    DataPrivilege. I was in charge of generating monthly KPI (Key performance
                    indicators) reports that measured our compliance with security related
                    specifications (ISO 27000 series) and the SAP GRC AC risks report, which showed
                    the number of access risks in our SAP environment. I also supported the HelpDesk
                    to make decisions on tickets that were related to information security.
                    {' '}
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">June 2015 - July 2015</p>
                  <h3>Newman Regional Health</h3>
                  <h4>IT Technician Intert</h4>
                  <p>
                    Was part of the IT department in a hospital. My tasks included providing IT
                    support for the different departments in the hospital, working with machine
                    upgrades (I helped them to change from manually preparing the new machines to
                    using a system imaging software), backing up and restoring personal data and
                    rolling out new technologies within the hospital, respecting the HIPAA
                    compliance.
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">Jun 2012 - May 2014</p>
                  <h3>CEFET-MG</h3>
                  <h4>Software Developer</h4>
                  <p>
                    Worked with the team in charge of the university&apos;s ERP system, coded in
                    Java (J2EE, JavaServer Faces). I was a full stack developer and my activities
                    ranged from fixing bugs (both in the front and back ends) to developing new
                    features. Due to my familiarity with SQL Queries, I made/redesigned most of the
                    financial reports in our system. We had weekly SCRUM meetings within the team.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h2>
            <span>Education</span>
          </h2>
        </div>

        <div className="nine columns main-col">
          <div className="education-timeline">
            <ul className="timeline wow fadeInUp">
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">August 2010 - December 2016</p>
                  <h3>CEFET-MG</h3>
                  <h4>Computer Engineering</h4>
                  <p>
                    <strong>Bachelor&apos;s Degree</strong>
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">August 2014 - May 2015</p>
                  <h3>Kansas State University</h3>
                  <h4>Computer Science</h4>
                  <p>
                    <strong>Exchange Program</strong>
                  </p>
                </div>
              </li>
              <li className="timeline-event">
                <label className="timeline-event-icon" />
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">April 2007 - December 2009</p>
                  <h3>CEFET-MG</h3>
                  <h4>Information Science</h4>
                  <p>
                    <strong>Associate&apos;s Degree</strong>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <div className="relative">
            <h1 className="section-title wow fadeInDown">Some of My Works</h1>
          </div>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf wow fadeIn">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-stock" title="Stock Info">
                  <img alt="Screenshot of website" src={portNpm} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>stock-info</h5>
                      <p>NPM Package</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-movies" title="Watchable">
                  <img alt="Screenshot of website" src={portMovies} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Watchable PWA</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title="Mr and Mrs Chagas">
                  <img alt="Screenshot of website" src={portMrandmrs} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Wedding Website</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-09" title="Sentionario">
                  <img alt="Screenshot of website" src={portSentionario} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Sentionario</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-05" title="Space Voyager">
                  <img alt="Screenshot of website" src={portSpace} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Space Voyager</h5>
                      <p>JavaScript Game</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-04" title="Jaracati Body Shop">
                  <img alt="Screenshot of website" src={portJaracati} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Jaracatia Body Shop</h5>
                      <p>JavaScript Plugin</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-10" title="PropaGanha">
                  <img alt="Screenshot of website" src={portPropaganha} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>PropaGanha</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-11" title="Warmup Arena">
                  <img alt="Screenshot of website" src={portWarmup} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Warmup Arena</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-06" title="Reaction Trainer">
                  <img alt="Screenshot of website" src={portReaction} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Reaction Trainer</h5>
                      <p>JavaScript Game</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-03" title="CSGOtrade.me">
                  <img alt="Screenshot of website" src={portCsgotrademe} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>CSGOtrade.me</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-08" title="tradePUBG.me">
                  <img alt="Screenshot of website" src={portPubg} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>tradePUBG.me</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title="SkinTrade.me">
                  <img alt="Screenshot of website" src={portSkintrade} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>SkinTrade.me</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-07" title="CSGO Gym">
                  <img alt="Screenshot of website" src={portCsgogym} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>CSGO Gym</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-plus fa-2x" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="modal-01" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portMrandmrs} alt="Screenshot of website" />
          <div className="description-box">
            <h4>Mr and Mrs Chagas</h4>
            <p>
              This is my own wedding&apos;s website. It was going to be a simple website with
              HTML/CSS/JS and responsive design but I decided to make us our own game, it is a
              frogger-like game built with Phaser.IO featuring the groom and the bride.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, Responsive Design, Game Development
            </span>
          </div>
          <div className="link-box">
            <a
              href="http://mrandmrschagas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-stock" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portNpm} alt="Screenshot of website" />
          <div className="description-box">
            <h4>Stock Info</h4>
            <p>
              Open source node package listed on NPM. It fetches stock information from Yahoo
              Finance API and returns the data in a promise.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Open Source, npm, JavaScript, ES6
            </span>
          </div>
          <div className="link-box">
            <a
              href="https://www.npmjs.com/package/stock-info"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-movies" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portMovies} alt="Screenshot of website" />
          <div className="description-box">
            <h4>Watchable</h4>
            <p>
              PWA made with React.js; It fetches movie info from IMDB, Metacritic and Rotten
              Tomatoes and lets you know if a movie is considered good or not.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Progressive Web Apps, Responsive Design
            </span>
          </div>
          <div className="link-box">
            <a
              href="http://movies.luizchagas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portSkintrade} alt="Screenshot of website" />

          <div className="description-box">
            <h4>SkinTrade.me</h4>
            <p>
              SkinTrade.me is a website that allows CSGO players trade their items for items with
              similar value stored in a bot account.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, SteamAPI, PostgreSQL, AngularJS
            </span>
          </div>

          <div className="link-box">
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-03" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portCsgotrademe} alt="Screenshot of website" />

          <div className="description-box">
            <h4>CSGOtrade.me</h4>
            <p>
              CSGOtrade.me is a website that allows CSGO players trade their items for items with
              similar value stored in a bot account.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, SteamAPI, Node.js
            </span>
          </div>

          <div className="link-box">
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-04" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portJaracati} alt="Screenshot of website" />

          <div className="description-box">
            <h4>Jaracatia Body Shop</h4>
            <p>Made a cascading smart menu plugin for this eCommerce in a third-party platform.</p>
            <span className="categories">
              <i className="fa fa-tag" />
              Scripting, JavaScript
            </span>
          </div>

          <div className="link-box">
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-05" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portSpace} alt="Screenshot of website" />

          <div className="description-box">
            <h4>Space Voyager</h4>
            <p>
              Space Voyager is a futurist platform game where the hero must travel through the space
              and recover the power crystals.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Game Development, JavaScript, Canvas
            </span>
          </div>

          <div className="link-box">
            <a href="/demo/space" target="_blank" rel="noopener noreferrer" className="button">
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-06" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portReaction} alt="Screenshot of website" />

          <div className="description-box">
            <h4>Reaction Trainer</h4>
            <p>
              Reaction Trainer is a Phaser.IO/JavaScript browser game designed to allow players to
              improve their reaction time by shooting targets that appear on the screen.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Game Development, JavaScript, Phaser.io, Canvas
            </span>
          </div>

          <div className="link-box">
            <a href="/demo/reaction" target="_blank" rel="noopener noreferrer" className="button">
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-07" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portCsgogym} alt="Screenshot of website" />

          <div className="description-box">
            <h4>CSGO Gym</h4>
            <p>
              CSGO Gym is a website where people can gamble with CSGO skins instead of real money.
              The website offers multiple types of game, such as roulette, coinflip and blackjack.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, JavaScript, AngularJS, Node.js
            </span>
          </div>

          <div className="link-box">
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-08" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portPubg} alt="Screenshot of website" />

          <div className="description-box">
            <h4>tradePUBG.me</h4>
            <p>
              tradePUBG.me is a website that allows PUBG players to trade their items for items with
              similar value stored in a bot account.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, SteamAPI, Node.js
            </span>
          </div>

          <div className="link-box">
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-09" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portSentionario} alt="Screenshot of website" />

          <div className="description-box">
            <h4>Sentionario</h4>
            <p>
              Sentionario is a collaborative platform to collect sentiment data for dictionary based
              sentiment analysis. It implements gamification concepts.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, PostgreSQL, AngularJS, Sentiment Analysis, Gamification
            </span>
          </div>

          <div className="link-box">
            <a
              href="https://sentionario.luizchagas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-10" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portPropaganha} alt="Screenshot of website" />

          <div className="description-box">
            <h4>PropaGanha</h4>
            <p>
              PropaGanha is a platform that rewards users with virtual currency for interacting with
              paid publicity. It&quot;s aimed for users in Brazil.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, MongoDB, AngularJS, Node.js, Express
            </span>
          </div>

          <div className="link-box">
            <a
              href="http://propaganha.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live Demo
            </a>
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>

        <div id="modal-11" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={portWarmup} alt="Screenshot of website" />

          <div className="description-box">
            <h4>Warmup Arena</h4>
            <p>
              Warmup Arena is a gambling site that give CSGO skins as prizes. Users earn coins to
              play by interacting with paid publicity.
            </p>
            <span className="categories">
              <i className="fa fa-tag" />
              Web Development, MongoDB, AngularJS, Node.js, Express, JavaScript games
            </span>
          </div>

          <div className="link-box">
            {false && (
              <a
                href="https://warmuparena.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Live Demo
              </a>
            )}
            <a className="popup-modal-dismiss button btn-close" href>
              Close
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="call-to-action">
      <div className="row">
        <div className="two columns header-col">
          <h1 className="wow fadeInLeft">
            <span>
              <i className="fa fa-paper-plane fa-5x pull-left fa-fw" />
            </span>
          </h1>
        </div>

        <div className="seven columns">
          <h2 className="wow zoomIn">Let&apos;s work together</h2>
          <p>I am available for Freelance projects. Hire me and get your project done!</p>
        </div>

        <div className="three columns action wow fadeIn">
          <a
            href="https://www.upwork.com/freelancers/~01e33fdfde407363b0"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Hire me Now
          </a>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="twelve columns flex-container">
            <h1 className="section-title wow fadeInDown">Client Testimonials</h1>

            <div id="testimonial-slides" className="owl-carousel">
              <div className="image-container">
                <img src={test01} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test02} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test03} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test04} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test05} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test06} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test07} alt="Testimonial" />
              </div>

              <div className="image-container">
                <img src={test08} alt="Testimonial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div className="row section-head">
        <div className="twelve columns">
          <div className="relative">
            <h1 className="section-title wow fadeInDown">Get In Touch</h1>
          </div>
          <p className="lead">
            Thanks for taking some time to read this and for you interest in contacting me.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="five columns">
          <div className="form-container wow fadeIn">
            <br />
            <p>
              Name:
              <br />
              {' '}
Luiz Antonio Chagas Junior
            </p>
            <p>
              {' '}
              Phone:
              <br />
              {' '}
+1 913 626 7809
            </p>
            <p>
              Email:
              <br />
              {' '}
luiz@luizchagas.com
            </p>
            <p>
              Skype:
              <br />
              {' '}
luizchagasjr
            </p>
          </div>
        </div>

        <div className="seven columns">
          <div id="map" />
        </div>
      </div>
    </section>
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/luizchagasjr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/luizchagas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/luizjr92" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
              </a>
            </li>

            <li>
              <a href="skype:luizchagasjr?chat">
                <i className="fa fa-skype" />
              </a>
            </li>
          </ul>

          <ul className="copyright">
            <li>Luiz Chagas Jr &copy; Copyright 2018, All Rights Reserved</li>
          </ul>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fa fa-chevron-up" />
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default App;
