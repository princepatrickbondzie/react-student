import React from "react";
import styles from "../../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.mynav}>
      <p>I am Gifty Mensah. This is a project line to learn React.</p>
      <div className={styles.myhandles}>
        <p>Follow me on:</p>
        <Link to="www.linkedin.com/in/gifty-mensah">
          <FaLinkedin size={20} color="white" />
        </Link>
        <Link to="https://wa.me/0548344182">
          <FaWhatsapp size={20} color="white" />
        </Link>
        <Link to="www.twitter.com">
          <FaTwitter size={20} color="white" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
