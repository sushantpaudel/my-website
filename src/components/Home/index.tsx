import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const scene = useSelector((state: any) => state.three.scene);
  const renderer = useSelector((state: any) => state.renderer);
  const camera = useSelector((state: any) => state.camera);

  useEffect(() => {}, []);
  return (
    <div className="container-fluid">
      <main>
        <header>
          <h1>Sushant Paudel</h1>
          <p>🚀 Welcome to my website!</p>
        </header>
        <blockquote>
          <p>I like learning new stuff</p>
        </blockquote>
        <section>
          <h2>📜 Manifesto</h2>
          <p>
            A developer with a demonstrated history of working in the computer
            and network security industry. Skilled in Node.js, JavaSE, Android
            Development, Leadership, and Project Management. Strong engineering
            professional graduated from Western Regional College.
          </p>
        </section>

        <section className="light">
          <h2>👩🏽‍🚀 Projects</h2>
          <p>
            <strong>Animal Monitoring System</strong>
            <br />
            Monitoring the temperature of animals and sending the data to a
            phone. (Microcontroller)
          </p>
          <p>
            <strong>Phone Booster</strong>
            <br />
            An android application to help speed up the process of a phone.
            (Android)
          </p>
          <p>
            <strong>Signature Verification System </strong>
            <br />A desktop application for the verification of offline
            signatures. (Desktop App)
          </p>
          <p>
            <strong>Devanagari OCR </strong>
            <br />A python project to identify the letter written on a paper by
            image analysis using Convolutional Neural Network.
          </p>
          <p>
            <strong>Document Management System </strong>
            <br />A web-based project for digitally archiving documents.
          </p>
          <p>
            <strong>Risk Management System </strong>
            <br />A web-based project for analysis of risk specially made for
            banking solutions.
          </p>
          <h2>🏆 Accomplishments</h2>
          <p>
            <strong>3rd WESTERN REGIONAL MATHEMATICAL OLYMPIAD </strong>
            <br />I secured the second position in this competition which was
            about the logistic abilities to solve problem-related to
            mathematics.
          </p>
          <p>
            <strong>Code with Coffee</strong>
            <br />
            It an open coding competition I secured the first position in this
            competition which was about problem-solving skills.
          </p>
          <p>
            <strong>University Grants Commission</strong>
            <br />I was funded for my Master’s thesis on “Blockchain-based
            digital identity management systems” by UGC Nepal.
          </p>
        </section>

        <blockquote>
          <p>
            “Leadership isn't about age but rather, leadership is about
            influence, impact & inspiration.”
            <br />― Onyi Anyado
          </p>
        </blockquote>

        <section className="left">
          <h2>🌮 Work History</h2>

          <h3>
            Yarsa Labs, Amarsingh Chowk, Pokhara— <i>Android Developer</i>
          </h3>
          <p>
            Completed an Android application project, A good teamwork, Developed
            the application on Git, Cooperated with the employees.
          </p>
          <h3>
            General Technology Pvt. Ltd., Kantipath, Kathmandu—{" "}
            <i>Full Stack Web Developer</i>
          </h3>
          <p>
            Good teamwork, on the platform - Node Js, Reactjs, MySQL, MSSQL,
            Git. Cooperated with the employees.
          </p>
          <h3>
            Proshore Nepal Pvt., Tinkune, Kathmandu—{" "}
            <i>Backend JavaScript Developer</i>
          </h3>
          <p>Working on Agile SCRUM on Nodejs and Python.</p>
        </section>

        <blockquote>
          <p>Thank you for visiting my website!</p>
        </blockquote>
      </main>
    </div>
  );
};

export default Home;
