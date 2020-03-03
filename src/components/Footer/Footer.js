import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__link-container">
          <ul className="footer__main-links">
            <li className="footer__main-link-item">
              <a
                href="#"
                className="footer__main-link"
                data-modal-show="construction-modal"
              >
                Site Map
              </a>
            </li>
            <li className="footer__main-link-item">
              <a href="{{rootPath}}/index.html" className="footer__main-link">
                About
              </a>
            </li>
            <li className="footer__main-link-item">
              <a href="mailto:a11yestoredemo@gmail.com" className="footer__main-link">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="feedback">
            <h3 className="feedback__heading">Feedback</h3>
            <p className="feedback__copy">
              Please help us to make our accessible experience even better! If you
              have any questions, comments or feedback, please send us an email
            </p>
            <a
              href="mailto:a11yestoredemo@gmail.com"
              className="btn btn--black-inverted feedback__submit"
              target="_blank"
            >
              Submit Feedback
              <span className="element-invisible">. Link opens in a new window.</span>
            </a>
          </div>
        </div>
        <ul className="footer__secondary-links">
          <li className="footer__secondary-link-item">
            <a href="#" data-modal-show="construction-modal">
              Legal
            </a>{" "}
            |
          </li>
          <li className="footer__secondary-link-item">
            <a href="#" data-modal-show="construction-modal">
              Privacy Policy
            </a>{" "}
            |
          </li>
          <li className="footer__secondary-link-item">
            <a href="#" data-modal-show="construction-modal">
              Cookies
            </a>
          </li>
        </ul>
        <p className="footer__legal">
          Publicis Sapient makes no representations or warranties about the
          content provided on this page. Publicis Sapient does not intend for the
          prototype or any other information contained on this page to constitute
          legal advice, nor is this content meant to capture a one-size-fits-all
          solution to accessibility concerns. Readers of this content should
          contact independent legal counsel to obtain advice with respect to any
          particular legal matter, including but not limited to accessibility.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
