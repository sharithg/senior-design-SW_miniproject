import React from "react";
import "./NotFound.css";

export default function NotFound({ error_code, error_message }) {
  return (
    <React.Fragment>
      <div className="overlay">
        <main className="bsod container">
          <h1 className="neg title">
            <span className="bg">{`Error - ${error_code}`}</span>
          </h1>
          <p className="err-text">{error_message}</p>
          <p className="err-text">
            * Return to our{" "}
            <a href="/" className="link">
              homepage
            </a>
            .
          </p>
          <nav className="nav">
            <a href="/login" className="link">
              login
            </a>
            &nbsp;|&nbsp;
            <a href="/register" className="link">
              register
            </a>
          </nav>
        </main>
      </div>
    </React.Fragment>
  );
}
