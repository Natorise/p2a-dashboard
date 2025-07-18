import { Link } from "wouter";
import styles from "./NavBar.module.css";
import { botInvite, serverInvite } from "../modules/links";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "preact/hooks";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const openClass = showNav ? styles.open : "";

  const hamburgerIcon = showNav ? <IoMdClose size={60} /> :<GiHamburgerMenu size={60} />

  return (
    <div>
      <div className={`${styles.navbar} ${openClass}`}>
        <div className={styles.home}>
          <Link className={styles.name} href="/">
            P2 Assistant
          </Link>
          <div className={styles.hamburger} onClick={toggleNav}>
            {hamburgerIcon}
          </div>
        </div>

        <nav className={`${styles.nav}`}>
          <ul className={styles.navLinks}>
            {/* <li><a href="/#features">Features</a></li> */}
            {/* <li><Link href="/#commands">Commands</Link></li> */}
            <li>
              <a href={serverInvite}>Support</a>
            </li>
            <li>
              <Link href="/tos">TOS</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>

        <a href={botInvite} className={`button primary ${styles.add}`}>
          Add P2 Assistant
        </a>
      </div>
    </div>
  );
};

export default NavBar;
